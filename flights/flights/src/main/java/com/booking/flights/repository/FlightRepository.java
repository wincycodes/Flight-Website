package com.booking.flights.repository;
import com.booking.flights.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FlightRepository extends JpaRepository<Flight, Integer> {
    List<Flight> findByFromCityAndToCityAndDate(
            String fromCity,
            String toCity,
            String date
    );
}