package com.diffs.pages;

import android.os.Bundle;
import android.os.Environment;
import android.os.Looper;
import android.support.annotation.Nullable;
import android.widget.Toast;

import com.diffs.BuildConfig;
import com.diffs.MainApplication;
import com.diffs.constant.Constant;
import com.diffs.utilis.NetworkUtils;
import com.diffs.vendor.hot_update.DownloadUtil;
import com.diffs.vendor.hot_update.HotUpdate;
import com.diffs.vendor.hot_update.HotUpdateConfig;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import java.io.File;

/**
 * Created by MeePwn on 2017/10/14.
 */

public class Module_0 extends ReactActivity {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        System.out.println("== bundle path ===>>>> " + Environment.getExternalStorageDirectory().getPath() + "/" + this.getPackageName() + "/module_0/index.bundle");

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.bundle")
                .setJSBundleFile(Environment.getExternalStorageDirectory().getPath() + "/" + this.getPackageName() + "/module_0/index.bundle")
                .setJSMainModulePath("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, "Module_0", null);

        setContentView(mReactRootView);

        NetworkUtils.sendRequest(Constant.UPDATE_URL, null, response -> {

            if (!response.optBoolean("shouldModule_0Update")) return;

            // 2.更新
            Toast.makeText(getApplicationContext(), "==== 开始下载 ====", Toast.LENGTH_LONG).show();
            HotUpdateConfig.Builder builder = new HotUpdateConfig.Builder();
            String jsPatchLocalFolder = Environment.getExternalStorageDirectory().toString() + File.separator + this.getPackageName() + File.separator + "module_0";
            HotUpdateConfig config = builder
                    .setFirstUpdateKey("firstUpdate")
                    .setJsBundleRemoteURL("http://192.168.1.117/bundle.zip")
                    .setJsPatchLocalFolder(jsPatchLocalFolder)
                    .build();
            HotUpdate.update(this, config, new DownloadUtil.OnDownloadListener() {
                @Override
                public void onDownloadSuccess() {
                    HotUpdate.handleZIP(Module_0.this, config, () -> {
                        MainApplication.getInstance().reloadJSBundle(config.getJsBundleLocalPath());
                        Toast.makeText(Module_0.this, "==== 更新成功 ====", Toast.LENGTH_LONG).show();
                    });
                }

                @Override
                public void onDownloading(int progress) {
                    System.out.println("== progress ===>>>> " + progress);
                }

                @Override
                public void onDownloadFailed() {
                    Looper.prepare();
                    Toast.makeText(Module_0.this, "==== 下载失败 ====", Toast.LENGTH_LONG).show();
                    Looper.loop();
                }
            });

        }, error -> {});
    }

}
