package com.booking.flights.controller;
import com.booking.flights.entity.Details;
import com.booking.flights.service.DetailsService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/customer")
public class DetailsController {
    @Autowired
    DetailsService service;

    @PostMapping("/details")

    public Details submit(@RequestBody Details details){
        return service.submit(details);
    }
}
