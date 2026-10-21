package com.booking.flights.service;
import com.booking.flights.entity.Details;
import com.booking.flights.repository.DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailsService {
    @Autowired
    DetailsRepository repository;

    public Details submit(Details details){
        return repository.save(details);
    }
}
