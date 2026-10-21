package com.booking.flights.service;
import com.booking.flights.entity.Flight;
import com.booking.flights.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FlightService {
    @Autowired
    FlightRepository repository;

    public Flight booking(Flight flight){
        return repository.save(flight);
    }
    public List<Flight> searchFlights(String fromCity, String toCity, String date) {
        return repository.findByFromCityAndToCityAndDate(fromCity, toCity, date);
    }
}
