package com.booking.flights.repository;
import com.booking.flights.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking,Integer>{
}
