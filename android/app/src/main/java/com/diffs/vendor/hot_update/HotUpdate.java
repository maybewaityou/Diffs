package com.diffs.vendor.hot_update;

import android.content.Context;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.LinkedList;

import io.reactivex.BackpressureStrategy;
import io.reactivex.Flowable;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.schedulers.Schedulers;

/**
 * Created by MeePwn on 2017/10/13.
 */

public class HotUpdate {

    public interface HotUpdateCompleteListener {
        void updateComplete();
    }

    public static void genPackageFolder(HotUpdateConfig config) {
        File dir = new File(config.getJsPatchLocalFolder());
        if (!dir.exists()) dir.mkdirs();
    }

    public static void update(Context context, HotUpdateConfig config, DownloadUtil.OnDownloadListener listener) {
        genPackageFolder(config);
        // 下载更新包
        DownLoad.getInstance().downLoadBundle(context, config, listener);
    }

    public static void checkPackage(Context context, HotUpdateConfig config) {
        // 1.下载前检查SD卡是否存在更新包文件夹,FIRST_UPDATE来标识是否为第一次下发更新包
        File bundleFile = new File(config.getLocalFolder());
        if (bundleFile.exists()) {
            ACache.get(context).put(config.getFirstUpdateKey(), false);
        } else {
            ACache.get(context).put(config.getFirstUpdateKey(), true);
        }
    }

    public static void handleZIP(final Context context, HotUpdateConfig config, final HotUpdateCompleteListener listener) {
        if (!new File(config.getJsPatchLocalPath()).exists()) return;

        // 开启单独线程，解压，合并。
        Flowable.create(s -> {
            boolean result = (Boolean) ACache.get(context).getAsObject(config.getFirstUpdateKey());
            if (result) {
                // 解压到根目录
                FileUtils.decompression(config.getJsPatchLocalFolder(), config.getJsPatchLocalPath());
                // 合并
                mergePatAndAsset(context, config);
            } else {
                // 解压到future目录
                FileUtils.decompression(config.getFutureJSPatchLocalFolder(), config.getJsPatchLocalPath());
                // 合并
                mergePatAndBundle(config);
            }
            // 删除ZIP压缩包
            FileUtils.deleteFile(config.getJsPatchLocalPath());
            s.onNext("");
            s.onComplete();
        }, BackpressureStrategy.LATEST).subscribeOn(Schedulers.io()).observeOn(AndroidSchedulers.mainThread()).subscribe((s) -> {
            // 更新完成回调
            listener.updateComplete();
        });
    }

    /**
     * 与Asset资源目录下的bundle进行合并
     */
    private static void mergePatAndAsset(Context context, HotUpdateConfig config) {

        // 1.解析Asset目录下的bundle文件
        String assetsBundle = FileUtils.getJsBundleFromAssets(context);
        // 2.解析bundle当前目录下.pat文件字符串
        String patchStr = FileUtils.getStringFromPat(config.getJsPatchLocalFile());
        // 3.合并
        merge(patchStr, assetsBundle, config);
        // 4.删除pat
        FileUtils.deleteFile(config.getJsPatchLocalFile());
    }

    /**
     * 与SD卡下的bundle进行合并
     */
    private static void mergePatAndBundle(HotUpdateConfig config) {

        // 1.解析sd卡目录下的bundle
        String assetsBundle = FileUtils.getJsBundleFromSDCard(config.getJsBundleLocalPath());
        // 2.解析最新下发的.pat文件字符串
        String patchStr = FileUtils.getStringFromPat(config.getFuturePatPath());
        // 3.合并
        merge(patchStr, assetsBundle, config);
        // 4.添加图片
        FileUtils.copyPatchImgs(config.getFutureDrawablePath(), config.getDrawablePath());
        FileUtils.copyPatchImgs(config.getFutureXHDrawablePath(), config.getXhDrawablePath());
        // 5.删除本次下发的更新文件
        FileUtils.traversalFile(config.getFutureJSPatchLocalFolder());
    }

    /**
     * 合并,生成新的bundle文件
     */
    private static void merge(String patchStr, String bundle, HotUpdateConfig config) {
        if (patchStr.length() == 0 && new File(config.getJsBundleLocalPath()).exists()) return;
        // 3.初始化 dmp
        DiffMatchPatch dmp = new DiffMatchPatch();
        // 4.转换pat
        LinkedList<DiffMatchPatch.Patch> patches = (LinkedList<DiffMatchPatch.Patch>) dmp.patch_fromText(patchStr);
        // 5.pat与bundle合并，生成新的bundle
        Object[] bundleArray = dmp.patch_apply(patches, bundle);
        // 6.保存新的bundle文件
        try {
            FileOutputStream outStream = new FileOutputStream(new File(config.getJsBundleLocalPath()));
            String newBundle = (String) bundleArray[0];
            outStream.write(newBundle.getBytes());
            outStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
