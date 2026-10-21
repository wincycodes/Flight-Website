import Logo from "../assets/img/Logo.png";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={Logo} alt="Logo" data-aos="zoom-in"/>

            <div className="nav">
                <Link to="/"><i className="fa-solid fa-house"></i>Home</Link>
                <Link to="/flight"><i className="fa-solid fa-plane"></i>Flights</Link>
                <Link to="/destinations"><i className="fa-solid fa-calendar"></i>Destination</Link>
                <Link to="/register"><i className="fa-solid fa-user"></i>Register</Link>
                <Link to="/login"><i className="fa-solid fa-heart"></i>Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;