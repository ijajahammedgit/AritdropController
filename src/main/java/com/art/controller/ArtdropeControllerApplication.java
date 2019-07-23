package com.art.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages="com.art")
@EnableJpaRepositories("com.art.repository") 
@ComponentScan(basePackages = { "com.art.*" })
@EntityScan("com.art.entity")  
public class ArtdropeControllerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArtdropeControllerApplication.class, args);
	}

}
