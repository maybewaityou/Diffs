package com.diffs.vendor.http.network;

import com.android.volley.VolleyError;

import java.io.Serializable;

/**
 * package: com.framework.vendors.http.network
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/22 上午10:32
 * desc:
 */

public interface NetworkFailureResult extends Serializable {

    public void onFailure(VolleyError error);

}
