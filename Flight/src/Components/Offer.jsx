import Offers from "../assets/img/Offer.png";

import {useNavigate} from "react-router-dom";
function Offer(){
    const navigate=useNavigate();
    return(
        <div className="offer-section" style={{ backgroundImage: `url(${Offers})` }} data-aos="fade-up">
            <div className="offer-content">
                <h2 data-aos="fade-right">Special Flight Deals<i className="fa-solid fa-plane"></i></h2>
                <h4 data-aos="fade-right">Fly More, Save More</h4>
                <p data-aos="fade-left">Get up to 30% OFF on selected flights</p>
                <button className="offer-btn" data-aos="fade-left" onClick={()=>navigate("/flight")}>Explore Deals →</button>
            </div>
        </div>
    );
}
export default Offer;