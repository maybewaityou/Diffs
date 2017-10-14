package com.diffs.vendor.http.request;

import com.android.volley.AuthFailureError;
import com.android.volley.DefaultRetryPolicy;
import com.android.volley.NetworkResponse;
import com.android.volley.Response;
import com.android.volley.toolbox.JsonObjectRequest;
import com.diffs.constant.Constant;

import org.json.JSONObject;

import java.util.Map;

/**
 * package: com.framework.vendors.http.request
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/21 上午7:16
 * desc:
 */

public class JSONRequest extends JsonObjectRequest {

    public JSONRequest(int method, String url, JSONObject jsonRequest, Response.Listener<JSONObject> listener, Response.ErrorListener errorListener) {
        super(method, url, jsonRequest, listener, errorListener);
        int maxNumRetries = -1;
        if (Constant.RETRYABLE) {
            maxNumRetries = Constant.MAX_NUM_RETRIES;
        }
        setRetryPolicy(new DefaultRetryPolicy(Constant.DEFAULT_NETWORK_TIMEOUT, maxNumRetries, 1.0f));
    }

    public JSONRequest(String url, JSONObject jsonRequest, Response.Listener<JSONObject> listener, Response.ErrorListener errorListener) {
        super(url, jsonRequest, listener, errorListener);
        int maxNumRetries = -1;
        if (Constant.RETRYABLE) {
            maxNumRetries = Constant.MAX_NUM_RETRIES;
        }
        setRetryPolicy(new DefaultRetryPolicy(Constant.DEFAULT_NETWORK_TIMEOUT, maxNumRetries, 1.0f));
    }

    @Override
    public Map<String, String> getHeaders() throws AuthFailureError {
        return super.getHeaders();
    }

    @Override
    protected Response<JSONObject> parseNetworkResponse(NetworkResponse response) {
        return super.parseNetworkResponse(response);
    }

}
