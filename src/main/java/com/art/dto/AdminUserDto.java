/**
 * 
 */
package com.art.dto;

import java.io.Serializable;

/**
 * @author Ijaj Ahammed
 *
 */

public class AdminUserDto implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private String userId;
	
	private String password;
	
	private String firstName;
	
	private String lastName;
	
	private String address;
	
	
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}	

}
