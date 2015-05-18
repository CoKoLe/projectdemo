package com.learning.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.io.ByteArrayOutputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Created by pengsheng on 15-02-02.
 */
public class StringUtil {

    private static final Log logger = LogFactory.getLog(StringUtil.class);
    private static String hexString = "0123456789ABCDEF";

    /**
     * 将字符串编码成16进制数字,适用于所有字符（包括中文）
     */
    public static String stringToHex(String str) {
        byte[] bytes = str.getBytes();
        StringBuilder sb = new StringBuilder(bytes.length * 2);
        for (int i = 0; i < bytes.length; i++) {
            sb.append(hexString.charAt((bytes[i] & 0xf0) >> 4));
            sb.append(hexString.charAt((bytes[i] & 0x0f) >> 0));
        }
        return sb.toString();
    }

    /**
     * 将16进制数字解码成字符串,适用于所有字符（包括中文）
     */
    public static String hexToString(String bytes) {
        ByteArrayOutputStream baos = new ByteArrayOutputStream(bytes.length() / 2);
        for (int i = 0; i < bytes.length(); i += 2)
            baos.write((hexString.indexOf(bytes.charAt(i)) << 4 | hexString.indexOf(bytes.charAt(i + 1))));
        return new String(baos.toByteArray());
    }

    public static String md5Encode(String str) throws NoSuchAlgorithmException {
        StringBuffer buffer = new StringBuffer();

        MessageDigest messagedigest = MessageDigest.getInstance("MD5");
        byte[] b = messagedigest.digest(str.getBytes());
        for(int i = 0; i < b.length; i++)
            buffer.append(byteToHexString(b[i]));

        return buffer.toString();
    }

    private static String byteToHexString(byte b){

        int n = b;
        if(n < 0)
            n = n + 256;

        int index_1 = ((n & 0xf0) >> 4);
        int index_2 = ((n & 0x0f) >> 0);

        return String.valueOf(hexString.charAt(index_1)) + String.valueOf(hexString.charAt(index_2));
    }

}
