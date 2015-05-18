/**
 * 
 */
package com.learning.service;


/**
 * User: pengsheng
 * Date: 15-01-09
 * Time: 10:47
 */
public interface LoginService {

	public String getVerifyNum(String username, String userpass);

	public String userLogin(String userName, String userpass, String verifynum, String clientIp, String computerName);

	public String userLogout(String sysAccessId);
}
