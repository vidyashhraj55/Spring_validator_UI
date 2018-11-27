package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class SpringValidation1Application implements CommandLineRunner {

	@Autowired
	UserService service;
	 
	public static void main(String[] args) {
		SpringApplication.run(SpringValidation1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
	}
}
