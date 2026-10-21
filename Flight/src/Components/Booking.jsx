import {useLocation} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Icon from "../assets/img/Icon.png";
import {useNavigate} from "react-router-dom";

function Booking(){
    const navigate=useNavigate();
    const location = useLocation();
    const flight = location.state?.flight;
    const booking = location.state?.booking;

     console.log("BOOKING IN BOOKING PAGE:", booking);
    
    //Saving Details
    const[details,setDetails]=useState({
        email:"",
        number:"",
        title:"",
        firstName:"",
        lastName:"",
        dob:"",
        gender:"",
        meal:""
    });

    const saveDetails=async()=>{
        //Check Email
        if(details.email.trim()===""){
            alert("Please Enter Email");
            return;
        }
        //Check Number
        if(details.number.trim()===""){
            alert("Please Enter Mobile Number");
            return;
        }
        //Check Title
        if(details.title.trim() === "") {
            alert("Please Select Title");
            return;
        }
        //Check Name
        if(details.firstName.trim()===""){
            alert("Please Enter First Name");
            return;
        }
        //Check DOB
        if(details.dob.trim()===""){
            alert("Please Enter Date Of Birth");
            return;
        }
        //Check Gender
        if(details.gender.trim()===""){
            alert("Please Select Gender");
            return;
        }
        //Check Meal
        if(details.meal.trim()===""){
            alert("Please Select Meal");
            return;
        }

        const bookingData = {
    ...details,
    flightId: flight.id,
    fromCity: flight.fromCity,
    toCity: flight.toCity,
    airline: flight.airline,
    departure: flight.departure,
    price: flight.price,
    duration: flight.duration,
    departureDate: booking.departureDate,
    travelClass: booking.travelClass
};
        
        try{
        const result=await axios.post(
            "http://localhost:8080/customer/details",
            bookingData
        );
        alert("Confirmed Booking");
        setDetails({
            email:"",
            number:"",
            title:"",
            firstName:"",
            lastName:"",
            dob:"",
            gender:"",
            meal:""
        });
        navigate("/");
    }
    catch(error){
        console.log(error);
        alert("Invalid Details");
    }

    };
    return(
        <>
        <div className="booking-section">
            <nav className="booking-nav">
                <h2 data-aos="fade-right">Flight - Confirm Details</h2>

            </nav>
            </div>

            {flight && (
                <div className="selected-card">
                    
                    <div className="selected-city" data-aos="fade-right">
            <h3>
                {flight.fromCity} → {flight.toCity}
            </h3>

            <p>{flight.departure}</p>
            <p>{flight.duration}</p>

            <button className="refund-btn">Refundable</button>

            <p>Fare Rules</p>
        </div>
        
        <div className="selected-airline" data-aos="fade-left">
            <div className="icon" >
                <img src={Icon} alt="" /><h2>{flight.airline}</h2>
            </div>
            
            <div className="flight-prices">
            <h4>{flight.price}</h4>
            <p className="duration">Price</p>
            </div>

             <p>Departure Date: {booking.departureDate}</p>
             <p>Travel Class: {booking.travelClass}</p>
         </div>

        <div className="note" data-aos="zoom-in">
            <button>Note:</button>
            <p>
                This is a special fare given by the airline.
                Airlines cancellation charges do apply.
            </p>
        </div>

    </div>
)}

        <div className="Traveller-section" data-aos="fade-right">
            <div className="Traveller-details" >
                <h2>Flight Booking Details</h2>

                <div className="contact">
                    <h3>Contact Details</h3>
                    <p>Enter your contact information for booking updates.</p>
                    <label htmlFor="">Email Address *</label><br />
                    <input type="email" name="" id="" placeholder="example@gmail.com" value={details.email}
                    onChange={(e)=>setDetails({
                        ...details,
                        email:e.target.value
                    })
                }
                        /> <br />

                    <label htmlFor="">Mobile Number *</label><br />
                    <input type="number" name="" id="" placeholder="+91 98765 43210" value={details.number}
                    onChange={(e)=>setDetails({
                        ...details,
                        number:e.target.value
                    })
                }/>
                </div>

                <div className="passenger">
                    <h3>Passenger Details</h3>

                    <label htmlFor="">Title *</label><br />
                    <div className="title-options">
                        <label htmlFor="">
                            <input type="radio" name="title" value="Mr" onChange={(e)=>setDetails({
                        ...details,
                         title:e.target.value
                    })
                }/>
                            Mr
                        </label>
                        <label htmlFor="">
                            <input type="radio" name="title" value="Ms"onChange={(e)=>setDetails({
                        ...details,
                        title:e.target.value
                    })
                }/>
                            Ms
                        </label>
                        <label htmlFor="">
                            <input type="radio" name="title" value="Mrs" onChange={(e)=>setDetails({
                        ...details,
                        title:e.target.value
                    })
                }/>
                            Mrs
                        </label>
                    </div>

                    <label htmlFor="">First Name *</label><br />
                    <input type="text" name="" id="" placeholder="Enter first name" value={details.firstName}
                    onChange={(e)=>setDetails({
                        ...details,
                        firstName:e.target.value
                    })
                }/> <br />

                    <label htmlFor="">Last Name *</label><br />
                    <input type="text" name="" id="" placeholder="Enter last name" value={details.lastName}
                    onChange={(e)=>setDetails({
                        ...details,
                        lastName:e.target.value
                    })
                }/> <br />

                    <label htmlFor="">Date of Birth *</label> <br />
                    <input type="date" name="" id="" value={details.dob}
                    onChange={(e)=>setDetails({
                        ...details,
                        dob:e.target.value
                    })
                }/> <br />

                    <label htmlFor="">Gender *</label> <br />
                    <div className="gender-options">
                        <label htmlFor="">
                            <input type="radio" name="gender" value="Male"
                            checked={details.gender === "Male"}
                            onChange={(e) =>setDetails({
                                ...details,
                                gender: e.target.value
                            })
                            }/>
                            Male
                        </label>

                        <label htmlFor="">
                            <input type="radio" name="gender" value="Female" checked={details.gender === "Female"}
                            onChange={(e) =>setDetails({
                                ...details,
                                gender: e.target.value
                            })
                            }/>
                            Female
                        </label>
                    </div>
                </div>

                <div className="meal">
                    <h3>Meal Preference</h3>
                    <select name="" id="" value={details.meal} onChange={(e)=>setDetails({
                        ...details,
                        meal:e.target.value
                    })}>
                        <option value="">Select your Meal</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Fruits Meal">Fruits Meal</option>
                        <option value="No Meal">No Meal</option>
                    </select>
                </div>

                <button className="confirm-btn" onClick={saveDetails}>Confirm Booking</button>
            
            </div>
        </div>
        </>
    );
}
export default Booking;