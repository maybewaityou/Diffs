package com.diffs.pages;

import android.os.Bundle;
import android.os.Environment;
import android.support.annotation.Nullable;

import com.diffs.BuildConfig;
import com.diffs.MainApplication;
import com.diffs.react_native.RegisterPackages;
import com.diffs.vendor.hot_update.HotUpdateConfig;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

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

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.bundle")
                .setJSBundleFile(Environment.getExternalStorageDirectory().getPath() + "/" + this.getPackageName() + paramsMap.get("jsBundleFile"))
                .setJSMainModulePath("index.android")
                .addPackage(new MainReactPackage())
                .addPackage(new RegisterPackages())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .setCurrentActivity(this)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, paramsMap.get("moduleName"), null);

        setContentView(mReactRootView);
    }

    public void reloadJSBundle(HotUpdateConfig config) {
        MainApplication.getInstance().reloadJSBundle(this.mReactInstanceManager, config.getJsBundleLocalPath());
    }

}
