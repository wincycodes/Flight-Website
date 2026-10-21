import Paris from "../assets/img/paris.jpg";
import Dubai from "../assets/img/dubai.jpg";
import Singapore from "../assets/img/singapore.jpg";
import Maldives from "../assets/img/maldives.jpg";

import { useNavigate } from "react-router-dom";

function Destination(){
    const navigate=useNavigate();
    return(
        <section className="destinations">
    <div className="section-title" >
        <h2 data-aos="fade-right">Popular Destinations</h2>
        <p data-aos="fade-right">Explore the world's most amazing places with CloudWing</p>
    </div>

    <div className="destination-cards" >

        <div className="destination-card" data-aos="zoom-in">
            <img src={Paris} alt="Paris" style={{width:"270px",height:"200px"}}/>
            <div className="destination-info">
                <h3>Paris</h3>
                <p>France</p>
                <span>From ₹45,999</span><br />
                <button onClick={()=>navigate("/paris")}>Explore Flights →</button>
            </div>
        </div>

        <div className="destination-card" data-aos="zoom-in">
            <img src={Dubai} alt="Dubai" style={{width:"270px",height:"200px"}}/>
            <div className="destination-info">
                <h3>Dubai</h3>
                <p>UAE</p>
                <span>From ₹18,499</span><br />
                <button onClick={()=>navigate("/dubai")}>Explore Flights →</button>
            </div>
        </div>

        <div className="destination-card" data-aos="zoom-in">
            <img src={Singapore} alt="Singapore" style={{width:"270px",height:"200px"}}/>
            <div className="destination-info">
                <h3>Singapore</h3>
                <p>Singapore</p>
                <span>From ₹22,999</span><br />
                <button onClick={()=>navigate("/singapore")}>Explore Flights →</button>
            </div>
        </div>

        <div className="destination-card" data-aos="zoom-in">
            <img src={Maldives} alt="Maldives" style={{width:"270px",height:"200px"}}/>
            <div className="destination-info">
                <h3>Maldives</h3>
                <p>Maldives</p>
                <span>From ₹15,999</span><br />
                <button onClick={()=>navigate("/maldives")}>Explore Flights →</button>
            </div>
        </div>
        

    </div>
    
</section>
    );
}
export default Destination;