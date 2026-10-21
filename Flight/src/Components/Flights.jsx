import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import Works from "../Components/Works";
import Footer from "../Components/Footer";
function Flights(){
    
    const navigate=useNavigate();
    const location = useLocation();
    const flights = location.state?.flights || [];
    const booking = location.state?.booking;

    const selectFlight = (flight) => {
        console.log("SELECTED FLIGHT:", flight);
        console.log("BOOKING:", booking);
        
        navigate("/booking", {
            state: {
                flight: flight,
                booking: booking
            }
        });
    };

    return(
        <>
        <section className="flight-results">

            <h2 data-aos="fade-right">Popular Flights</h2>

            {flights.map((flight) => (
                <div className="flight-card" key={flight.id} data-aos="fade-up">

                    {/* Airline Name */}
                    <div className="airline">
                        <h2>{flight.airline}</h2>

                    <h3>
                        {flight.fromCity} → {flight.toCity}
                    </h3>
                    </div>

                    <p>Departure: {flight.departure}</p>
                    <p>Arrival: {flight.arrival}</p>
                    <p>Price: ₹{flight.price}</p>

                    <button className="select-btn" onClick={() => selectFlight(flight)}>Select</button>

                </div>
            ))}

        </section>

        <Works/>
        <Footer/>
        </>
    );
}

export default Flights;