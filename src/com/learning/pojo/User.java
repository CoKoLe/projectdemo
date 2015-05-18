/**
 *
 */
package com.learning.pojo;

import java.io.Serializable;

/**
 * 注册用户信息
 * User: pengsheng
 * Date: 15-01-09
 * Time: 10:47
 */
public class User implements Serializable {

    private Integer id;
    private String username;
    private String password;
    private String mobilenum;
    private String phonenum;
    private String birthday;
    private String registerDate;
    private String sex;
    private Integer age;
    private String country;
    private String province;
    private String city;
    private String moreaddrinfo;
    
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhonenum() {
		return phonenum;
	}
	public void setPhonenum(String phonenum) {
		this.phonenum = phonenum;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(String registerDate) {
		this.registerDate = registerDate;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getMoreaddrinfo() {
		return moreaddrinfo;
	}
	public void setMoreaddrinfo(String moreaddrinfo) {
		this.moreaddrinfo = moreaddrinfo;
	}
	public String getMobilenum() {
		return mobilenum;
	}
	public void setMobilenum(String mobilenum) {
		this.mobilenum = mobilenum;
	}
    
    
    
}
