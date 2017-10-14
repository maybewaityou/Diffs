package com.diffs.pages;

import android.os.Bundle;
import android.os.Environment;
import android.support.annotation.Nullable;

import com.diffs.BuildConfig;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by MeePwn on 2017/10/14.
 */

public class Module_1 extends ReactActivity {

    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        System.out.println("== bundle path ===>>>> " + Environment.getExternalStorageDirectory().getPath() + "/" + this.getPackageName() + "/module_1/index.bundle");

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.bundle")
                .setJSBundleFile(Environment.getExternalStorageDirectory().getPath() + "/" + this.getPackageName() + "/module_1/index.bundle")
                .setJSMainModulePath("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        mReactRootView.startReactApplication(mReactInstanceManager, "Module_1", null);

        setContentView(mReactRootView);
    }

}
