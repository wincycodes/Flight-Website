package com.booking.flights.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.booking.flights.entity.User;

public interface UserRepository extends JpaRepository<User,Integer>{
    User findByEmail(String email);
}
