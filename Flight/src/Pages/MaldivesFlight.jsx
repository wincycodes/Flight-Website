import PlaneImg from "../assets/img/PlaneLogo.png";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import Destination from "../Components//Destination";
import Footer from "../Components/Footer";

function MaldivesFlight(){
    const maldivesflight=[
        {
            id: 1,
            airline: "Indigo",
            fromCity: "Chennai",
            toCity: "Maldives",
            departure: "06:30 AM",
            duration: "2h 00m",
            price: 15999
        },
        {
            id: 2,
            airline: "Air India Express",
            fromCity: "Bengaluru",
            toCity: "Maldives",
            departure: "08:45 AM",
            duration: "2h 15m",
            price: 17499
        },
        {
            id: 3,
            airline: "Indigo",
            fromCity: "Kochi",
            toCity: "Maldives",
            departure: "11:30 AM",
            duration: "1h 35m",
            price: 18999
        }
    ];

    const navigate = useNavigate();
    const location = useLocation();

    const booking = location.state?.booking;

    // Separate date for each flight
    const [departureDates, setDepartureDates] = useState({});

    // Separate class for each flight
    const [travelClasses, setTravelClasses] = useState({});

    const flights = location.state?.flights?.length
        ? location.state.flights
        : maldivesflight;


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
        <div className="parisflight">

                <div className="parisflight-content">
                    <h2>Flights to Maldives</h2>
                    <p>Find the perfect flight to France</p>
                </div>


                <div className="paris-des" data-aos="zoom-in">

                    {flights.map((flight) => (

                        <div
                            className="parisflight-container"
                            key={flight.id}
                        >

                            {/* Place */}
                            <div className="parisflight-place">
                                <h3>
                                    {flight.fromCity} → {flight.toCity}
                                </h3>
                            </div>


                            {/* Airlines */}
                            <div className="paris-airline">

                                <img
                                    src={PlaneImg}
                                    alt=""
                                    style={{
                                        width: "20px",
                                        height: "20px"
                                    }}
                                />

                                <h2>{flight.airline}</h2>

                            </div>


                            {/* Date */}
                            <div className="paris-date">

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


                            {/* Time */}
                            <div className="paris-time">

                                <p>
                                    🕐{flight.departure}
                                </p>

                                <p>
                                    ⏱{flight.duration}
                                </p>

                            </div>


                            {/* Travel Class */}
                            <div className="paris-class">

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


                            {/* Price */}
                            <div className="paris-button">

                                <p>
                                    From: ₹{flight.price}
                                </p>

                                <button
                                    className="button-paris"
                                    onClick={() => selectFlight(flight)}
                                >
                                    Select →
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        
        <Destination/>
        <Footer/>
        </>
    );
}
export default MaldivesFlight;