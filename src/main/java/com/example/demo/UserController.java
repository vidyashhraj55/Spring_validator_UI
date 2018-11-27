package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4201", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {
	
	
	@Autowired
	UserService userservice;
	
	@GetMapping("/users")
	public List GetAllUsers() {
		return userservice.findAll();
		
	}
	@PostMapping("/users/")
	public User AddUser(@RequestBody User user) {
		return userservice.create(user);
		
	}
	@GetMapping("/user/{id}")
	public User GetUser(@PathVariable("id") int id) {
		return userservice.findById(id);
	}
	
	@PutMapping("/user/{id}")
	public User UpadteUser(@PathVariable("id") int id, @RequestBody User user)  {
		System.out.println("edited object is : "+ user);
		return userservice.update(user);
	}
	
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable("id") int id) {
		System.out.print("id is : "+ id + "\n");
    return userservice.delete(id);

}
}
