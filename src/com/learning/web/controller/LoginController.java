/**
 *
 */
package com.learning.web.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.learning.service.LoginService;
import com.learning.util.webUtil;
import com.learning.web.BaseController;

/**
 * 登陆方法
 * User: pengsheng
 * Date: 15-01-09
 * Time: 10:47
 */
@Controller
public class LoginController extends BaseController {

	@Autowired
    private LoginService loginService;

    @RequestMapping(value = "/user/verify", method = RequestMethod.POST)
    public void getVerifyNum(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String username = request.getParameter("username");
        String userpass = request.getParameter("userpass");

        String verifyNum = loginService.getVerifyNum(username, userpass);

        response.setCharacterEncoding("utf-8");
        response.getWriter().write(verifyNum);
    }

    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public void userLogin(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String userName = request.getParameter("v6usernum");
        String userpass = request.getParameter("v6userpass");
        String verifynum = request.getParameter("smspass");
        String clientIp = webUtil.getIpAddr(request);
        String computerName = request.getRemoteHost();

        String userInfo = loginService.userLogin(userName, userpass, verifynum, clientIp, computerName);
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(userInfo);
    }

    @RequestMapping(value = "/user/logout", method = RequestMethod.POST)
    public void userLogout(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String sysAccessId = request.getParameter("sysAccessId");

        String userId = loginService.userLogout(sysAccessId);
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(userId);
    }
}
