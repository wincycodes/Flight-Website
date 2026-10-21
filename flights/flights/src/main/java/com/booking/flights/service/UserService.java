package com.booking.flights.service;
import com.booking.flights.entity.User;
import com.booking.flights.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository repository;

    //Registration
    public User register(User user){
        return repository.save(user);
    }

    //Login
    public User login(String email, String password){
        User user=repository.findByEmail(email);
        if(user!=null && user.getPassword().equals(password)){
            return user;
        }
        return null;
    }
}
