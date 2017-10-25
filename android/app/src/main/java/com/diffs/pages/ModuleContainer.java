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
import com.diffs.utilis.SharedPreferencesUtils;
import com.diffs.vendor.hot_update.DownloadUtil;
import com.diffs.vendor.hot_update.HotUpdate;
import com.diffs.vendor.hot_update.HotUpdateConfig;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

import java.io.File;
import java.util.HashMap;

/**
 * Created by MeePwn on 2017/10/14.
 */

public class ModuleContainer extends ReactActivity {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @SuppressWarnings("unchecked")
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        HashMap<String, String> paramsMap = (HashMap<String, String>) getIntent().getSerializableExtra("params");
        System.out.println("== bundle path ===>>>> " + Environment.getExternalStorageDirectory().getPath() + "/" + this.getPackageName() + "/module_0/bundle/index.bundle");

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.bundle")
                .setJSBundleFile(Environment.getExternalStorageDirectory().getPath() + "/" + this.getPackageName() + paramsMap.get("jsBundleFile"))
                .setJSMainModulePath("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, paramsMap.get("moduleName"), null);

        setContentView(mReactRootView);

        NetworkUtils.sendRequest(Constant.UPDATE_URL, null, response -> {
            float newVersion = (float) response.optDouble("module_0_version");
            float nativeVersion = SharedPreferencesUtils.getFloat(ModuleContainer.this, "module_0_version");
            if (newVersion <= nativeVersion) {
                Toast.makeText(getApplicationContext(), "==== 已是最新版本 ====", Toast.LENGTH_LONG).show();
                return;
            }

            // 2.更新
            Toast.makeText(getApplicationContext(), "==== 开始下载 ====", Toast.LENGTH_LONG).show();
            HotUpdateConfig.Builder builder = new HotUpdateConfig.Builder();
            String jsPatchLocalFolder = Environment.getExternalStorageDirectory().toString() + File.separator + this.getPackageName() + File.separator + paramsMap.get("moduleName").toLowerCase();
            HotUpdateConfig config = builder
                    .setFirstUpdateKey(paramsMap.get("firstUpdateKey"))
                    .setJsBundleRemoteURL("http://192.168.1.117/module_0/bundle.zip")
                    .setJsPatchLocalFolder(jsPatchLocalFolder)
                    .build();
            HotUpdate.update(this, config, new DownloadUtil.OnDownloadListener() {
                @Override
                public void onDownloadSuccess() {
                    HotUpdate.handleZIP(ModuleContainer.this, config, () -> {
                        SharedPreferencesUtils.putFloat(ModuleContainer.this, "module_0_version", newVersion);
                        MainApplication.getInstance().reloadJSBundle(mReactInstanceManager, config.getJsBundleLocalPath());
                        Toast.makeText(ModuleContainer.this, "==== 更新成功 ====", Toast.LENGTH_LONG).show();
                    });
                }

                @Override
                public void onDownloading(int progress) {
                    System.out.println("== progress ===>>>> " + progress);
                }

                @Override
                public void onDownloadFailed() {
                    Looper.prepare();
                    Toast.makeText(ModuleContainer.this, "==== 下载失败 ====", Toast.LENGTH_LONG).show();
                    Looper.loop();
                }
            });

        }, error -> {
        });
    }

}
