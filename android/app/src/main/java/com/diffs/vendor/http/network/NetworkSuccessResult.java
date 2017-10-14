package com.diffs.vendor.http.network;

import java.io.Serializable;

/**
 * package: com.framework.vendors.http
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/20 上午11:01
 * desc:
 */

public interface NetworkSuccessResult extends Serializable {

    public void onSuccess(String responseString);

}
