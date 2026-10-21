package com.booking.flights.service;
import com.booking.flights.entity.Booking;
import com.booking.flights.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    @Autowired
    BookingRepository repository;

    public Booking flight(Booking booking){
        return repository.save(booking);
    }
}
