import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/img/Home1-img.png";

import Footer from "../Components/Footer";

function Registration(){
    const navigate = useNavigate();
    const [agreeTerms, setAgreeTerms] = useState(false);
    const[user,setUser]=useState({
        name:"",
        email:"",
        number:"",
        password:""
    });

    const registerUser=async()=>{
        //Check Name
        if(user.name.trim()===""){
            alert("Please Enter Name");
            return;
        }

        //Check Email
        if(user.email.trim()===""){
            alert("Please Enter Email");
            return;
        }

        //Check Number
        if(user.number.trim()===""){
            alert("Enter Phone Number");
            return;
        }

        //Check Password
        if(user.password.trim()===""){
            alert("Enter Password");
            return;
        }

        // Check Terms & Conditions
        if (!agreeTerms) {
            alert("Please agree to the Terms & Conditions");
            return;
        }

        try{
            await axios.post(
                "http://localhost:8080/user/register",
                user
            );
            alert("Registration Successful");
            navigate("/login");

            setUser({
                name:"",
                email:"",
                number:"",
                password:""
            });
        }
        catch(error){
            console.log(error);
            alert("Invalid Details");
        }
        
    };
    return(
        <>
        <section
            className="home" 
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
        <div className="register-container" data-aos="zoom-in">
            <div className="register">
                <h2>✈️Create Your CloudWing Account</h2>

                {/*Name*/}
                <input type="text" 
                placeholder="Enter Name"
                value={user.name}
                onChange={(e)=>setUser({
                    ...user,
                    name:e.target.value
                })}
                /> <br />

                {/*Email*/}
                <input type="email" 
                placeholder="Enter Email"
                value={user.email}
                onChange={(e)=>setUser({
                    ...user,
                    email:e.target.value
                })}
                /> <br />

                {/*Number*/}
                <input type="text" 
                placeholder="Enter Number"
                value={user.number}
                onChange={(e)=>setUser({
                    ...user,
                    number:e.target.value
                })}
                /> <br />

                {/*Password*/}
                <input type="password" 
                placeholder="Enter Password"
                value={user.password}
                onChange={(e)=>setUser({
                    ...user,
                    password:e.target.value
                })}
                /> <br /> 

                <div className="terms">
                    <input type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}/>
                    <label htmlFor="terms">
                        I agree to the Terms & Conditions
                        </label>
                        </div>

               <button className="register-btn" onClick={registerUser} >Create Account</button>
            </div>
        </div>
        </section>
        <Footer/>
        </>
    );
}
export default Registration;