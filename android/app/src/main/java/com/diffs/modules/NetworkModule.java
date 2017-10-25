package com.diffs.modules;

import com.diffs.utilis.NetworkUtils;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import org.json.JSONObject;

/**
 * Created by MeePwn on 2017/10/25.
 */

public class NetworkModule extends ReactContextBaseJavaModule {

    public NetworkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NetworkModule";
    }

    @ReactMethod
    public void sendRequest(String url, ReadableMap params, Callback success, Callback failure) {
        NetworkUtils.sendRequest(url, new JSONObject(params.toHashMap()), success::invoke, failure::invoke);
    }

}
