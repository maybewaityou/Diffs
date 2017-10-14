package com.diffs;

import android.app.Application;

import com.android.volley.RequestQueue;
import com.diffs.react_native.RNMainReactPackage;
import com.diffs.react_native.RegisterPackages;
import com.diffs.vendor.http.Volley;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private static MainApplication sInstance;

    /* Request Queue 相关 start */
    private volatile RequestQueue requestQueue;
    public synchronized RequestQueue getRequestQueue() {
        if (null == requestQueue) {
            synchronized (RequestQueue.class) {
                if (null == requestQueue) {
                    requestQueue = Volley.newRequestQueue(this);
                }
            }
        }
        return requestQueue;
    }
    /* Request Queue 相关 end */

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new RNMainReactPackage(),
                    new RegisterPackages()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        sInstance = this;

        SoLoader.init(this, /* native exopackage */ false);
    }

    public static MainApplication getInstance() {
        return sInstance;
    }

}
