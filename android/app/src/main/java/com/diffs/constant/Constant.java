package com.diffs.constant;

/**
 * Created by MeePwn on 2017/10/14.
 */

public class Constant {

    /* update URL */
    public static final String UPDATE_URL = "http://192.168.1.117/api/checkForUpdates";
    /* 请求超时时间 */
    public static int DEFAULT_NETWORK_TIMEOUT = 1000 * 60 * 2;
    /* 超时后, 是否允许重发 */
    public static boolean RETRYABLE = false;
    /* 超时后, 重发次数(RETRYABLE = true时, 起作用, 默认为-1) */
    public static int MAX_NUM_RETRIES = 1;

}
