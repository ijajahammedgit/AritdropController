package com.art.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.art.entity.AdminUser;

@Repository
public interface AdminUserRepository extends JpaRepository<AdminUser, Long> {

	@Query("SELECT t FROM AdminUser t where t.userId = :userId") 
	public AdminUser getUesr(@Param("userId") String userId);
	
	
}
