package com.diffs.modules;

import android.os.Environment;
import android.os.Looper;
import android.widget.Toast;

import com.diffs.pages.ModuleContainer;
import com.diffs.utilis.NetworkUtils;
import com.diffs.utilis.SharedPreferencesUtils;
import com.diffs.vendor.hot_update.DownloadUtil;
import com.diffs.vendor.hot_update.HotUpdate;
import com.diffs.vendor.hot_update.HotUpdateConfig;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import java.io.File;

/**
 * Created by MeePwn on 2017/10/25.
 */

public class HotUpdateModule extends ReactContextBaseJavaModule {

    public HotUpdateModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HotUpdateModule";
    }

    @ReactMethod
    public void update(String moduleName, String updateURL, ReadableMap params, Promise promise) {
        NetworkUtils.sendRequest(updateURL, null, response -> {
            float newVersion = (float) response.optDouble(params.getString("moduleVersionKey"));
            float nativeVersion = SharedPreferencesUtils.getFloat(getCurrentActivity(), params.getString("moduleVersionKey"), 1);
            if (newVersion <= nativeVersion) {
                Toast.makeText(getCurrentActivity(), "==== 已是最新版本 ====", Toast.LENGTH_LONG).show();
                promise.resolve(response.toString());
                return;
            }

            Toast.makeText(getCurrentActivity(), "==== 开始下载 ====", Toast.LENGTH_LONG).show();
            HotUpdateConfig.Builder builder = new HotUpdateConfig.Builder();
            String jsPatchLocalFolder = Environment.getExternalStorageDirectory().toString() + File.separator + getCurrentActivity().getPackageName() + File.separator + moduleName;
            HotUpdateConfig config = builder
                    .setFirstUpdateKey(params.getString("firstUpdateKey"))
                    .setJsBundleRemoteURL(params.getString("jsBundleRemoteURL"))
                    .setJsPatchLocalFolder(jsPatchLocalFolder)
                    .build();
            HotUpdate.update(getCurrentActivity(), config, new DownloadUtil.OnDownloadListener() {
                @Override
                public void onDownloadSuccess() {
                    HotUpdate.handleZIP(getCurrentActivity(), config, () -> {
                        SharedPreferencesUtils.putFloat(getCurrentActivity(), params.getString("moduleVersionKey"), newVersion);
                        ((ModuleContainer) getCurrentActivity()).reloadJSBundle(config);
                        Toast.makeText(getCurrentActivity(), "==== 更新成功 ====", Toast.LENGTH_LONG).show();
                        promise.resolve("{}");
                    });
                }

                @Override
                public void onDownloading(int progress) {

                }

                @Override
                public void onDownloadFailed() {
                    Looper.prepare();
                    Toast.makeText(getCurrentActivity(), "==== 下载失败 ====", Toast.LENGTH_LONG).show();
                    Looper.loop();
                }
            });
        }, promise::reject);
    }

}
