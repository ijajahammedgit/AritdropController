package com.art.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.art.dto.AdminUserDto;
import com.art.entity.AdminUser;
import com.art.repository.AdminUserRepository;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin
public class RestController {

	@Autowired
	AdminUserRepository adminRepo;

	@RequestMapping(method = RequestMethod.POST, path = "/register", consumes = "application/json")
	public String registerUser(@RequestBody AdminUserDto adminUserDto) {
	
		AdminUser adminUser = new AdminUser();
		adminUser.setUserId(adminUserDto.getUserId());
		adminUser.setFirstName(adminUserDto.getFirstName());
		adminUser.setPassword(adminUserDto.getPassword());
		adminUser.setLastName(adminUserDto.getLastName());
		adminUser.setAddress(adminUserDto.getAddress());
		try {
			adminRepo.save(adminUser);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return "unable to register";
		}
		return "Registration done";
	}

	@RequestMapping(method = RequestMethod.GET, path = "/getAllUser")
	public List<AdminUserDto> getUser() {
		List<AdminUserDto> adminUserDtos = new ArrayList<AdminUserDto>();
		try {
			List<AdminUser> abc = adminRepo.findAll();
			for (AdminUser adminUser : abc) {
				AdminUserDto adminUserDto = new AdminUserDto();
				adminUserDto.setId(adminUser.getId());
				adminUserDto.setUserId(adminUser.getUserId());
				adminUserDto.setFirstName(adminUser.getFirstName());
				adminUserDto.setPassword(adminUser.getPassword());
				adminUserDto.setLastName(adminUser.getLastName());
				adminUserDto.setAddress(adminUser.getAddress());
				adminUserDtos.add(adminUserDto);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return adminUserDtos;
	}

	@RequestMapping(method = RequestMethod.GET, path = "/userLogin")
	public boolean login(@PathVariable String userId, @PathVariable String password) {
		try {
			AdminUser adminUser = adminRepo.getUesr(userId);
			if (adminUser == null) {
				System.out.println("Login fail- user id wrong");
				return false;
			} else {
				if (adminUser.getPassword().equals(password)) {
					System.out.println("login succesfull");
					return true;
				} else {
					System.out.println("Login fail- user id wrong");
					return false;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Login fail- user id or password wrong");
			return false;
		}
	}
	@RequestMapping(method = RequestMethod.GET, path = "/getUser")
	public AdminUserDto getUserByUserId(@PathVariable String userId) {
		try {
			AdminUser adminUser = adminRepo.getUesr(userId);
			AdminUserDto adminUserDto = new AdminUserDto();
			adminUserDto.setId(adminUser.getId());
			adminUserDto.setUserId(adminUser.getUserId());
			adminUserDto.setFirstName(adminUser.getFirstName());
			adminUserDto.setPassword(adminUser.getPassword());
			adminUserDto.setLastName(adminUser.getLastName());
			adminUserDto.setAddress(adminUser.getAddress());
			return adminUserDto;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

}
