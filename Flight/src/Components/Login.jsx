import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import HeroImg from "../assets/img/Home1-img.png";

import Footer from "../Components/Footer";

function Login(){
    const navigate=useNavigate();

    const[user,setUser]=useState({
        email:"",
        password:""
    });

    const userLogin=async()=>{
        try{
            const result=await axios.post(
                "http://localhost:8080/user/login",
                user
            );
            if(result.data){
                alert("Login Successful");
                localStorage.setItem("isLoggedIn", "true");
                navigate("/");
            }
            else{
                alert("Invalid email or password. Please create your CloudWing account and try again.");
                setUser({
                    email:"",
                    password:""
                });
            }
        }
        catch(error){
            console.log(error);
            alert("Login Failed");
        }
    };
    return(
        <>
        <section
            className="home" 
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
        <div className="login-container" data-aos="zoom-in">
            <div className="login">
                <h2>Welcome Back✈️</h2>
                <h3>Login to your CloudWing account</h3>
                <p className="para1">Enter your details to access your bookings, manage your trips, and continue your journey.</p>

                {/*Email*/}
                <input type="email" 
                placeholder="Enter Email"
                value={user.email}
                onChange={(e)=>setUser({
                    ...user,
                    email:e.target.value
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

                {/*Button*/}
                <button className="login-btn" onClick={userLogin}>Login</button>

                <p className="para2">Don't have an account?
                    <Link to="/register" className="acc">Create an Account</Link>
                </p>

                <h4>Travel smarter. Fly better. <br />Fly with CloudWing.</h4>
            </div>
        </div>
        </section>
        <Footer/>
        </>
    );
}
export default Login;