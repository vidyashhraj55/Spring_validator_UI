package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService{

    @Autowired
    private UserRepository repository;

    public User create(User user) {
        return repository.save(user);
    }

    public boolean delete(int id) {
        User user = findById(id);
        
        if(user != null){
            repository.delete(user);
            return true;
        }
        else {
        	return false;
        }
        
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public User findById(int id) {
        return repository.getOne(id);
    }

    public User update(User user) {
    	System.out.println(" service edited is:"+ user);
        return repository.save(user);
    }
}