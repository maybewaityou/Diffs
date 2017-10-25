package com.diffs;

import android.app.Application;

import com.android.volley.RequestQueue;
import com.diffs.react_native.RNMainReactPackage;
import com.diffs.react_native.RegisterPackages;
import com.diffs.vendor.http.Volley;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JSBundleLoader;
import com.facebook.react.bridge.JSCJavaScriptExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.soloader.SoLoader;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
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

    public void reloadJSBundle() {
        getReactNativeHost().getReactInstanceManager().recreateReactContextInBackground();
    }

    public void reloadJSBundle(ReactInstanceManager reactInstanceManager, String jsBundleFilePath) {
        try {
            Class<?> RIManagerClazz = reactInstanceManager.getClass();
            Method method = RIManagerClazz.getDeclaredMethod("recreateReactContextInBackground",
                    JavaScriptExecutorFactory.class, JSBundleLoader.class);
            method.setAccessible(true);
            method.invoke(reactInstanceManager,
                    new JSCJavaScriptExecutorFactory(),
                    JSBundleLoader.createFileLoader(jsBundleFilePath));
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException | IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

}
