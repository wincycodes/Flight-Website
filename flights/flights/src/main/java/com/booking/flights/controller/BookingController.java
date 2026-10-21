package com.booking.flights.controller;
import com.booking.flights.entity.Booking;
import com.booking.flights.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingService service;

    @PostMapping("/flight")
    public Booking flight(@RequestBody Booking booking){
        return service.flight(booking);
    }
}
