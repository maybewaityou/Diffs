package com.diffs;

import android.os.Bundle;

import com.diffs.constant.Constant;
import com.diffs.utilis.NetworkUtils;
import com.facebook.react.ReactActivity;

import org.json.JSONObject;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Diffs";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        NetworkUtils.sendRequest(Constant.UPDATE_URL, new JSONObject(), response -> {

        }, error -> {});
    }
}
