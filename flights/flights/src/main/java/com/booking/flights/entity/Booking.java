package com.booking.flights.entity;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String fromCity;
    private String toCity;
    private String departureDate;
    private String returnDate;
    private String travellers;
    private String travelClass;

    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }

    public String getFromCity(){
        return fromCity;
    }
    public void setFrom(String fromCity){
        this.fromCity=fromCity;
    }

    public String getToCity(){
        return toCity;
    }
    public void setTo(String toCity){
        this.toCity=toCity;
    }

    public String getDepartureDate(){
        return departureDate;
    }
    public void setDepartureDate(String departureDate){
        this.departureDate=departureDate;
    }

    public String getReturnDate(){
        return returnDate;
    }
    public void setReturnDate(String returnDate){
        this.returnDate=returnDate;
    }

    public String getTravellers(){
        return travellers;
    }
    public void setTravellers(String travellers){
        this.travellers=travellers;
    }

    public String getTravelClass(){
        return travelClass;
    }
    public void setTravelClass(String travelClass){
        this.travelClass=travelClass;
    }
}
