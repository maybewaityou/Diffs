package com.diffs.vendor.hot_update;

import android.content.Context;

/**
 * Created by MeePwn on 2017/10/11.
 */

public class DownLoad {

    private static volatile DownLoad instance;

    public static DownLoad getInstance() {
        if (instance == null) {
            synchronized (DownLoad.class) {
                if (instance == null) {
                    instance = new DownLoad();
                }
            }
        }
        return instance;
    }

    private DownLoad() {
    }

    /**
     * 下载最新Bundle
     */
    public void downLoadBundle(Context context, HotUpdateConfig config, DownloadUtil.OnDownloadListener listener) {
        // 1.下载前检查SD卡是否存在更新包文件夹
        HotUpdate.checkPackage(context, config);
        // 2.下载
        DownloadUtil.getInstance().download(config.getJsBundleRemoteURL(), config.getJsPatchLocalPath(), listener);
    }

}
