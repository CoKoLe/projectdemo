/**
 *
 */
package com.learning.service.impl;

import java.util.Hashtable;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import youngfriend.common.util.net.ServiceInvokerUtil;
import youngfriend.common.util.net.exception.ServiceInvokerException;

import com.google.gson.JsonObject;
import com.learning.service.LoginService;

/**
 * User: pengsheng
 * Date: 15-01-09
 * Time: 10:47
 */
@Service
public class LoginServiceImpl implements LoginService {

    private static Log logger = LogFactory.getLog(LoginServiceImpl.class);

    /**
     * 获取短信验证码
     *
     * @param username
     * @param userpass
     * @return
     */
    @Override
    public String getVerifyNum(String username, String userpass) {

        String verifyNum = "";
        Hashtable<String, String> paramE = new Hashtable<String, String>();

        paramE.put("service", "useraccess.cellphonepassword");
        paramE.put("registerName", username);
        paramE.put("registerPsw", userpass);

        try {
            Hashtable<String, String> out = ServiceInvokerUtil.invoker(paramE);
            verifyNum = out.get("result");
            if (verifyNum == null || "".equals(verifyNum))
                verifyNum = out.get("errorMessage");

        } catch (ServiceInvokerException e) {
            logger.error("getVerifyNum : " + e);
            verifyNum = e.getMessage();
        }

        return verifyNum;
    }

    /**
     *  用户登陆
     * @param userName : 用户注册名
     * @param userpass : 用户密码
     * @param verifynum : 短信验证码
     * @param clientIp : 访问机器的Ip
     * @param computerName : 访问的机器名
     * @return
     */
    @Override
    public String userLogin(String userName, String userpass, String verifynum, String clientIp, String computerName) {

        JsonObject jsonObject = new JsonObject();

        Hashtable<String, String> paramE = new Hashtable<String, String>();

        paramE.put("service", "useraccess.login");
        paramE.put("registerName", userName);
        paramE.put("password", userpass);
        paramE.put("ip", clientIp);
        paramE.put("computerName", computerName);
        paramE.put("type", "");
        paramE.put("isnew", "true");
        paramE.put("ptype", "web");
        paramE.put("phonepsw", verifynum);

        try {
            Hashtable<String, String> out = ServiceInvokerUtil.invoker(paramE);

            jsonObject.addProperty("userCNName", out.get("username"));
            jsonObject.addProperty("sysAccessID", out.get("sysAccessID"));
            jsonObject.addProperty("userId", out.get("userId"));
            jsonObject.addProperty("error", out.get("errorMessage") == null ? "" : out.get("errorMessage"));

        } catch (ServiceInvokerException e) {
            logger.error("userLogin : " + e);
            jsonObject.addProperty("error", e.getMessage());
        }

        return jsonObject.toString();
    }

    /**
     *  用户登出
     * @param sysAccessId
     * @return
     */
    @Override
    public String userLogout(String sysAccessId) {

        String userId = "";
        Hashtable<String, String> paramE = new Hashtable<String, String>();

        paramE.put("service", "useraccess.logout");
        paramE.put("sysAccessID", sysAccessId);
        try {

            Hashtable<String, String> out = ServiceInvokerUtil.invoker(paramE);

            userId = out.get("userID");
            userId = userId == null ? "" : userId;

        } catch (ServiceInvokerException e) {
            logger.error("userLogout : " + e);
        }

        return userId;
    }
}
