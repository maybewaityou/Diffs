package com.diffs.utilis;

import com.android.volley.Response;
import com.diffs.MainApplication;
import com.diffs.vendor.http.request.JSONRequest;

import org.json.JSONObject;

/**
 * Created by MeePwn on 2017/10/14.
 */

public class NetworkUtils {

    public static void sendRequest(String URL, JSONObject params, Response.Listener<JSONObject> listener, Response.ErrorListener errorListener) {
        System.out.println("== url ===>>>> " + URL);
        MainApplication.getInstance().getRequestQueue().add(new JSONRequest(URL, params, response -> {
            System.out.println("== " + URL + " response ===>>>> " + response.toString());
            listener.onResponse(response);
        }, error -> {
            System.out.println("== " + URL + " error ===>>>> " + error.toString());
            errorListener.onErrorResponse(error);
        }));
    }

}
