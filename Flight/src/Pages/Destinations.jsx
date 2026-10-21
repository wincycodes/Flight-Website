import PlaneImg from "../assets/img/PlaneLogo.png";

import Newyork from "../assets/img/Newyork.jpg";
import Zurich from "../assets/img/zurich.jpg";
import London from "../assets/img/London.jpg";
import Bangkok from "../assets/img/bangkok.jpg";
import Seoul from "../assets/img/seoul.avif";
import Newyork1 from "../assets/img/Newyork-1.avif";
import Zurich1 from "../assets/img/zurich-1.jpg";
import London1 from "../assets/img/london1.avif";
import Bangkok1 from "../assets/img/bangkok1.jpg";
import Seoul1 from "../assets/img/seoul1.jpg";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import Destination from "../Components/Destination";
import Travel from "../Components/Travel";
import Footer from "../Components/Footer";

function Destinations(){
    const destination=[
        {
            id: 1,
            airline: "Air India",
            fromCity: "Chennai",
            toCity: "New York",
            image: Newyork,
            departure: "01:15 AM",
            duration: "3h 5m",
            price: 58999
        },
        {
            id: 2,
            airline: "Lufthansa",
            fromCity: "Chennai",
            toCity: "Zurich",
            image: Zurich,
            departure: "01:50 AM",
            duration: "1h 00m",
            price: 49999
        },
        {
            id: 3,
            airline: "British Airways",
            fromCity: "Chennai",
            toCity: "London",
            image: London,
            departure: "01:25 AM",
            duration: "10h 45m",
            price: 44999
        },
        {
            id: 4,
            airline: "Thai Airways",
            fromCity: "Bengaluru",
            toCity: "Bangkok",
            image: Bangkok,
            departure: "11:15 PM",
            duration: "4h 5m",
            price: 17499
        },
        {
            id: 5,
            airline: "Korean Air",
            fromCity: "Chennai",
            toCity: "Seoul",
            image: Seoul,
            departure: "11:50 PM",
            duration: "8h 15m",
            price: 42499
        },
        {
            id: 6,
            airline: "Emirates",
            fromCity: "Mumbai",
            toCity: "New York",
            image: Newyork1,
            departure: "03:40 AM",
            duration: "8h 10m",
            price: 62499
        },
        
        {
            id: 7,
            airline: "Virgin Atlantic",
            fromCity: "Mumbai",
            toCity: "London",
            image: London1,
            departure: "02:10 AM",
            duration: "10h 5m",
            price: 42999
        },
        {
            id: 8,
            airline: "Virgin Atlantic",
            fromCity: "Kolkata",
            toCity: "Bangkok",
            image: Bangkok1,
            departure: "09:30 PM",
            duration: "2h 45m",
            price: 14999
        },
        {
            id: 9,
            airline: "Korean Air",
            fromCity: "Delhi",
            toCity: "Seoul",
            image: Seoul1,
            departure: "11:35 PM",
            duration: "7h 15m",
            price: 38999
        }
    ];

    const navigate = useNavigate();
    const location = useLocation();

    const booking = location.state?.booking;

    // Separate date for each flight
    const [departureDates, setDepartureDates] = useState({});

    // Separate class for each flight
    const [travelClasses, setTravelClasses] = useState({});

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
    return(
        <>
        <div className="des-flight">
            <div className="desflight-content">
                <h2 data-aos="fade-right">Explore the World, One Destination at a Time</h2>
                <p data-aos="fade-left">Discover breathtaking destinations, explore new cultures, and find your perfect flight for your next adventure.</p>
            </div>
             
             <div className="destination">
            {destination.map((flight)=>(
                <div className="destination-container" key={flight.id} data-aos="fade-up">

                    {/*Img*/}
                    <div className="des-img">
                        <img src={flight.image} alt="" style={{width:"200px",height:"150px"}}/>
                    </div>

                    
                    {/*Place*/}
                    <div className="destination-place">
                        <h3>{flight.fromCity} → {flight.toCity}</h3>
                    </div> 

                    {/*Airlines*/}
                    <div className="destination-airline">
                        <img src={PlaneImg} alt="" style={{width:"25px",height:"25px"}}/>
                        <h2>{flight.airline}</h2>
                    </div> 
                    

                    {/*Date*/}
                    <div className="destination-date">

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
                    <div className="destination-time">
                        <p>🕐{flight.departure}</p>
                        <p>⏱{flight.duration}</p>
                    </div>

                    {/*Travel Class*/}
                    <div className="destination-class">
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
                    <div className="destination-btn">
                        <p>From: ₹{flight.price}</p>
                        <button className="button-des" onClick={() => selectFlight(flight)}>Select →</button>
                    </div>
                </div>
                
            ))}
            </div>
        </div>

        <Destination/>
        <Travel/>
        <Footer/>
        </>
    );
}
export default Destinations;