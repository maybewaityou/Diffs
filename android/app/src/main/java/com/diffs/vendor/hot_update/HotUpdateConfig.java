package com.diffs.vendor.hot_update;

import java.io.File;

/**
 * Created by MeePwn on 2017/10/13.
 */

public class HotUpdateConfig {

    /**
     * 标识是否是第一次下载更新包
     */
    private String firstUpdateKey;

    /**
     * zip的文件名
     */
    private String zipName;

    /**
     * bundle文件名
     */
    private String jsBundleLocalFileName;

    /**
     * 第一次解压zip后的文件目录
     */
    private String jsPatchLocalFolder;

    private String localFolder;
    private String xhDrawablePath;
    private String drawablePath;

    /**
     * 除第一次外，未来解压zip后的文件目录
     */
    private String futureJSPatchLocalFolder;
    private String futureXHDrawablePath;
    private String futureDrawablePath;
    private String futurePatPath;

    /**
     * zip文件
     */
    private String jsPatchLocalPath;

    /**
     * 合并后的bundle文件保存路径
     */
    private String jsBundleLocalPath;

    /**
     * .pat文件
     */
    private String jsPatchLocalFile;

    /**
     * 下载URL
     */
    private String jsBundleRemoteURL;

    public HotUpdateConfig(Builder builder) {
        this.firstUpdateKey = builder.firstUpdateKey;
        this.zipName = builder.zipName;
        this.jsBundleLocalFileName = builder.jsBundleLocalFileName;
        this.jsPatchLocalFolder = builder.jsPatchLocalFolder;

        this.localFolder = this.jsPatchLocalFolder + File.separator + this.zipName;
        this.xhDrawablePath = this.localFolder + File.separator + "drawable-xhdpi" + File.separator;
        this.drawablePath = this.localFolder + File.separator + "drawable-mdpi" + File.separator;
        
        this.futureJSPatchLocalFolder = this.jsPatchLocalFolder + File.separator + "future";
        this.futureXHDrawablePath = this.futureJSPatchLocalFolder + File.separator + this.zipName + File.separator + "drawable-xhdpi" + File.separator;
        this.futureDrawablePath = this.futureJSPatchLocalFolder + File.separator + this.zipName + File.separator + "drawable-mdpi" + File.separator;
        this.futurePatPath = this.futureJSPatchLocalFolder + File.separator + this.zipName + File.separator + "bundle.pat";

        this.jsPatchLocalPath = this.jsPatchLocalFolder + File.separator + this.zipName + ".zip";

        this.jsBundleLocalPath = this.jsPatchLocalFolder + File.separator + this.zipName + File.separator + this.jsBundleLocalFileName;
        this.jsPatchLocalFile = this.jsPatchLocalFolder + File.separator + this.zipName + File.separator + "bundle.pat";

        this.jsBundleRemoteURL = builder.jsBundleRemoteURL;
    }

    public static class Builder {

        private String firstUpdateKey;
        private String zipName = "bundle";
        private String jsBundleLocalFileName = "index.bundle";
        private String jsPatchLocalFolder;
        private String jsBundleRemoteURL;

        public Builder setFirstUpdateKey(String firstUpdateKey) {
            this.firstUpdateKey = firstUpdateKey;
            return this;
        }

        public Builder setZipName(String zipName) {
            this.zipName = zipName;
            return this;
        }

        public Builder setJsBundleLocalFileName(String jsBundleLocalFileName) {
            this.jsBundleLocalFileName = jsBundleLocalFileName;
            return this;
        }

        public Builder setJsPatchLocalFolder(String jsPatchLocalFolder) {
            this.jsPatchLocalFolder = jsPatchLocalFolder;
            return this;
        }

        public Builder setJsBundleRemoteURL(String jsBundleRemoteURL) {
            this.jsBundleRemoteURL = jsBundleRemoteURL;
            return this;
        }

        public HotUpdateConfig build() {
            return new HotUpdateConfig(this);
        }

    }

    public String getFirstUpdateKey() {
        return firstUpdateKey;
    }

    public String getZipName() {
        return zipName;
    }

    public String getJsBundleLocalFileName() {
        return jsBundleLocalFileName;
    }

    public String getJsPatchLocalFolder() {
        return jsPatchLocalFolder;
    }

    public String getLocalFolder() {
        return localFolder;
    }

    public String getXhDrawablePath() {
        return xhDrawablePath;
    }

    public String getDrawablePath() {
        return drawablePath;
    }

    public String getFutureJSPatchLocalFolder() {
        return futureJSPatchLocalFolder;
    }

    public String getFutureXHDrawablePath() {
        return futureXHDrawablePath;
    }

    public String getFutureDrawablePath() {
        return futureDrawablePath;
    }

    public String getFuturePatPath() {
        return futurePatPath;
    }

    public String getJsPatchLocalPath() {
        return jsPatchLocalPath;
    }

    public String getJsBundleLocalPath() {
        return jsBundleLocalPath;
    }

    public String getJsPatchLocalFile() {
        return jsPatchLocalFile;
    }

    public String getJsBundleRemoteURL() {
        return jsBundleRemoteURL;
    }

    @Override
    public String toString() {
        return "HotUpdateConfig{" +
                "firstUpdateKey='" + firstUpdateKey + '\'' +
                ", zipName='" + zipName + '\'' +
                ", jsBundleLocalFileName='" + jsBundleLocalFileName + '\'' +
                ", jsPatchLocalFolder='" + jsPatchLocalFolder + '\'' +
                ", localFolder='" + localFolder + '\'' +
                ", xhDrawablePath='" + xhDrawablePath + '\'' +
                ", drawablePath='" + drawablePath + '\'' +
                ", futureJSPatchLocalFolder='" + futureJSPatchLocalFolder + '\'' +
                ", futureXHDrawablePath='" + futureXHDrawablePath + '\'' +
                ", futureDrawablePath='" + futureDrawablePath + '\'' +
                ", futurePatPath='" + futurePatPath + '\'' +
                ", jsPatchLocalPath='" + jsPatchLocalPath + '\'' +
                ", jsBundleLocalPath='" + jsBundleLocalPath + '\'' +
                ", jsPatchLocalFile='" + jsPatchLocalFile + '\'' +
                ", jsBundleRemoteURL='" + jsBundleRemoteURL + '\'' +
                '}';
    }
}
