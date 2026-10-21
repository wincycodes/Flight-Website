import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Plane from "../assets/img/PlaneLogo.png";

import Footer from "../Components/Footer";

function Flight() {

    const navigate = useNavigate();
    const location = useLocation();

    const booking = location.state?.booking;

    // Separate date for each flight
    const [departureDates, setDepartureDates] = useState({});

    // Separate class for each flight
    const [travelClasses, setTravelClasses] = useState({});

    const popularFlights = [
        {
            id: 1,
            airline: "IndiGo",
            fromCity: "Chennai",
            toCity: "Bangalore",
            departure: "06:30 AM",
            duration: "2h 00m",
            price: 3500
        },
        {
            id: 2,
            airline: "Air India",
            fromCity: "Chennai",
            toCity: "Mumbai",
            departure: "09:15 AM",
            duration: "2h 20m",
            price: 5200
        },
        {
            id: 3,
            airline: "Akasa Air",
            fromCity: "Chennai",
            toCity: "Delhi",
            departure: "10:00 AM",
            duration: "2h 45m",
            price: 6500
        },
        {
            id: 4,
            airline: "IndiGo",
            fromCity: "Bangalore",
            toCity: "Hyderabad",
            departure: "02:30 PM",
            duration: "4h 5m",
            price: 2800
        },
        {
            id: 5,
            airline: "Air India Express",
            fromCity: "Mumbai",
            toCity: "Goa",
            departure: "04:00 PM",
            duration: "1h 10m",
            price: 3200
        },
        {
            id: 6,
            airline: "IndiGo",
            fromCity: "Delhi",
            toCity: "Kolkata",
            departure: "06:00 PM",
            duration: "2h 10m",
            price: 4800
        }
    ];

    const flights = location.state?.flights?.length
        ? location.state.flights
        : popularFlights;


    const selectFlight = (flight) => {

        const selectedDate = departureDates[flight.id];
        const selectedClass = travelClasses[flight.id];

        // Check Departure Date
        if (!selectedDate) {
            alert("Please Select Departure Date");
            return;
        }

        // Check Travel Class
        if (!selectedClass) {
            alert("Please Select Travel Class");
            return;
        }

        navigate("/booking", {
            state: {
                flight: flight,

                booking: {
                    ...(booking || {}),
                    fromCity: flight.fromCity,
                    toCity: flight.toCity,
                    departureDate: selectedDate,
                    travelClass: selectedClass
                }
            }
        });
    };


    return (
        <>
        <section className="flightpage-results">
            
            <div className="flight-heading">
            <h2 data-aos="fade-right" className="popular">
                Popular Flights
            </h2>
            </div>

            

       <div className="popular-des">
            {flights.map((flight)=>(
                <div className="popularflight-container" key={flight.id} data-aos="zoom-in">

                    
                    {/*Place*/}
                    <div className="popularflight-place" >
                        <h3>{flight.fromCity} → {flight.toCity}</h3>
                    </div> 

                    {/*Airlines*/}
                    <div className="popular-airline">
                        <img src={Plane} alt="" style={{width:"20px",height:"20px"}}/>
                        <h2>{flight.airline}</h2>
                    </div> 
                    

                    {/*Date*/}
                    <div className="popular-date">

                        <label>
                            📅Departure :
                        </label>

                        <input
                                    type="date"
                                    value={departureDates[flight.id] || ""}
                                    onChange={(e) =>
                                        setDepartureDates({
                                            ...departureDates,
                                            [flight.id]: e.target.value
                                        })
                                    }
                                />

                    </div>

                    {/*Time*/}
                    <div className="popular-time">
                        <p>🕐{flight.departure}</p>
                        <p>⏱{flight.duration}</p>
                    </div>

                    {/*Travel Class*/}
                    <div className="popular-class">
                        <label>
                            🎫Travel Class:
                        </label>

                        <select
                                    value={travelClasses[flight.id] || ""}
                                    onChange={(e) =>
                                        setTravelClasses({
                                            ...travelClasses,
                                            [flight.id]: e.target.value
                                        })
                                    }
                                >

                            <option value="">
                                Select Class
                            </option>

                            <option value="Economy">
                                Economy
                            </option>

                            <option value="Premium Economy">
                                Premium Economy
                            </option>

                            <option value="Business">
                                Business
                            </option>

                            <option value="First Class">
                                First Class
                            </option>

                        </select>
                    </div>

                    {/*Price*/}
                    <div className="popular-button">
                        <p>From: ₹{flight.price}</p>
                        <button className="button-popular" onClick={() => selectFlight(flight)}>Select →</button>
                    </div>
                </div>
                
            ))}
            </div>

        </section>
        <Footer/>
        </>
    );
}

export default Flight;