package com.booking.flights.controller;
import com.booking.flights.entity.Flight;
import com.booking.flights.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/search")
public class FlightController {
    @Autowired
    FlightService service;

    @PostMapping("/flights")
    public Flight booking(@RequestBody Flight flight){
        return service.booking(flight);
    }

    @GetMapping("/flights")
    public List<Flight> searchFlights(
            @RequestParam String fromCity,
            @RequestParam String toCity,
            @RequestParam String date) {

        return service.searchFlights(fromCity, toCity, date);
    }
}

