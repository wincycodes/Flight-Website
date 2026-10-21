import HeroImg from "../assets/img/Home1-img.png";

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate();

    const [flights, setFlights] = useState([]);
    const[booking,setBooking]=useState({
        fromCity:"",
        toCity:"",
        departureDate:"",
        returnDate:"",
        travellers:"",
        travelClass:""
    });

    const flightBooking = async () => {
        console.log("Search button clicked");

    if(booking.fromCity.trim() === ""){
        alert("Please Select City");
        return;
    }

    if(booking.toCity.trim() === ""){
        alert("Please Select City");
        return;
    }

    if(booking.departureDate.trim() === ""){
        alert("Please Select Departure Date");
        return;
    }

    if(booking.travellers.trim() === ""){
        alert("Please Select Travellers");
        return;
    }

    if(booking.travelClass.trim() === ""){
        alert("Please Select Travel Class");
        return;
    }

    try {
    const response = await axios.get(
        "http://localhost:8080/search/flights",
        {
            params: {
                fromCity: booking.fromCity,
                toCity: booking.toCity,
                date: booking.departureDate
            }
        }
    );

    if(response.data.length === 0){
        alert("No Flights Available");

        setBooking({
            fromCity: "",
            toCity: "",
            departureDate: "",
            returnDate: "",
            travellers: "",
            travelClass: ""
        });

        setFlights([]);

        return;
    }

    navigate("/flights", {
        state: {
            flights: response.data,
            booking: booking

        }
    });

}
catch(error){
    console.log(error);
    alert("Error In Searching Flights");
}
};
    return (
        <>
        <section  
            className="home" 
            style={{ backgroundImage: `url(${HeroImg})` }}
        >  
        <div className="home-overlay"></div>
            <div className="home-content" data-aos="fade-right">
                <h1>Fly Beyond Expectations</h1>
                <p>Book your journey with CloudWing✈️</p>
                <button onClick={()=>navigate("/flight")}>Search Flights <i className="fa-solid fa-plane"></i></button>
            </div>

            <div className="flight-search" data-aos="fade-up">
                {/*From*/}
                <div className="place">
                    <label htmlFor="">FROM</label> <br />
                    <select name="" id="" value={booking.fromCity} onChange={(e)=>setBooking({
                        ...booking,
                        fromCity:e.target.value
                    })}>
                        <option value="">Select City</option>
                        <option value="Chennai (MAA)">Chennai (MAA)</option>
                        <option value="Bangalore (BLR)">Bengaluru (BLR)</option>
                        <option value="Mumbai (BOM)">Mumbai (BOM)</option>
                        <option value="Delhi (DEL)">Delhi (DEL)</option>
                        <option value="Hyderabad (HYD)">Hyderabad (HYD)</option>
                        <option value="Kochi (COK)">Kochi (COK)</option>
                        <option value="Madurai (IXM)">Madurai (IXM)</option>
                        <option value="Kolkata (CCU)">Kolkata (CCU)</option>
                        <option value="Pune (PNQ)">Pune (PNQ)</option>
                        <option value="Tiruchirappalli (TRZ)">Tiruchirappalli (TRZ)</option>
                    </select>
                </div>

                {/*To*/}
                <div  className="place">
                    <label htmlFor="">TO</label> <br />
                    <select name="" id="" value={booking.toCity} onChange={(e)=>setBooking({
                        ...booking,
                        toCity:e.target.value
                    })}>
                        <option value="">Select City</option>
                        <option value="Madurai (IXM)">Madurai (IXM)</option>
                        <option value="Tiruchirappalli (TRZ)">Tiruchirappalli (TRZ)</option>
                        <option>Chennai (MAA)</option>
                        <option value="Bangalore (BLR)">Bengaluru (BLR)</option>
                        <option>Mumbai (BOM)</option>
                        <option>Delhi (DEL)</option>
                        <option>Hyderabad (HYD)</option>
                        <option>Kochi (COK)</option>
                        <option>Kolkata (CCU)</option>
                        <option>Pune (PNQ)</option>
                    </select>
                </div>

                {/*Depature Date*/}
                <div  className="place">
                    <label htmlFor="">DEPARTURE DATE</label> <br />
                    <input type="date" value={booking.departureDate} onChange={(e)=>setBooking({
                        ...booking,
                        departureDate:e.target.value
                    })}/>
                </div>

                {/*Return Date*/}
                <div  className="place">
                    <label htmlFor="">RETURN DATE</label> <br />
                    <input type="date" value={booking.returnDate} onChange={(e)=>setBooking({
                        ...booking,
                        returnDate:e.target.value
                    })}/>
                </div>

                {/*Travellers*/}
                <div  className="place">
                    <label htmlFor="">TRAVELLERS</label><br />
                    <select name="" id="" value={booking.travellers} onChange={(e)=>setBooking({
                        ...booking,
                        travellers:e.target.value
                    })}>
                        <option value="">Select Traveller</option>
                        <option value="1">1 Traveller</option>
                        <option value="2">2 Travellers</option>
                        <option value="3">3 Travellers</option>
                        <option value="4">4 Travellers</option>
                        <option value="5">5+ Travellers</option>
                    </select>
                </div>

                {/*Class*/}
                <div  className="place">
                    <label htmlFor="">CLASS</label> <br />
                    <select value={booking.travelClass}
                    onChange={(e) => setBooking({
                        ...booking,
                        travelClass: e.target.value
                        })}>
                            <option value="">Select Class</option>
                            <option value="Economy">Economy</option>
                            <option value="Premium Economy">Premium Economy</option>
                            <option value="Business">Business</option>
                           <option value="First Class">First Class</option>
                           </select>
                </div>
                <div>
                <button className="book-btn" onClick={flightBooking}>Search Flight<i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </section>

            </>
    );
}

export default Home;