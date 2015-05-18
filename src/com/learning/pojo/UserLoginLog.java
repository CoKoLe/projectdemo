package com.learning.pojo;

/**
 * 用户登录系统日志
 * User: pengsheng
 * Date: 15-01-12
 * Time: 15:48
 */
public class UserLoginLog {

    private Integer id;
    private String userid;
    private String logintime;
    private String loginip;
    private String operate;// 操作
    
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getLogintime() {
		return logintime;
	}
	public void setLogintime(String logintime) {
		this.logintime = logintime;
	}
	public String getLoginip() {
		return loginip;
	}
	public void setLoginip(String loginip) {
		this.loginip = loginip;
	}
	public String getOperate() {
		return operate;
	}
	public void setOperate(String operate) {
		this.operate = operate;
	}
    
}
