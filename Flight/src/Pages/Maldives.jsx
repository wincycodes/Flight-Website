import Footer from "../Components/Footer";
import MaldivesImg from "../assets/img/maldives.jpg";
import Whitesand from "../assets/img/White-sand.avif";
import Sunset from "../assets/img/Sunset.avif";
import Coral from "../assets/img/Coral.jpg";
import Turquoisewaters  from "../assets/img/Turquoisewaters.avif";

import {useNavigate} from "react-router-dom";

function Maldives(){
    const navigate=useNavigate();
    return(
        <>
        <div className="paris-section">
            <div className="paris-content">
                <h1 data-aos="fade-right">Discover Maldives</h1>
                <p data-aos="fade-right">The Paradise of Turquoise Waters, White Sands & Tropical Luxury</p>
                <div className="paris-btn">
                    <button className="btn-paris" onClick={()=>navigate("/maldivesflight")}>Search Flights →</button>
                </div>
                </div>

                <div className="paris-about" data-aos="fade-left">
                    <div className="paris-img">
                    <img src={MaldivesImg} alt="" style={{width:"200px",height:"200px",borderRadius:"50%",marginLeft:"100px"}}/>
                </div>
                    <p>Welcome to the Maldives — a tropical paradise where <br />crystal-clear waters, pristine white-sand beaches, <br />and luxurious overwater villas create an unforgettable <br />escape. The Maldives is the perfect destination for <br />relaxation and adventure.</p>
                </div>

                <div className="paris-visit" data-aos="fade-up">
                    <h2 data-aos="fade-right">Top Attraction</h2>

                    <div className="visit-container-1">

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Whitesand} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>White-sand beaches</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Sunset} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Tropical sunsets</p>
                            </div>
                        </div>
                        </div>


                       <div className="visit-container-2" data-aos="zoom-in">
                        <div className="visit-img">
                           <img src={Coral} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Coral reefs through snorkelling</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Turquoisewaters} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Turquoise waters</p>
                            </div>
                        </div>
                        </div>

                        
                        </div>

                        

                        <div className="explore-paris">
                            <h2 data-aos="fade-right">Ready to Explore Maldives?</h2>
                            <p data-aos="fade-right">Escape to a tropical paradise and make unforgettable memories in the Maldives. Discover beautiful islands, enjoy crystal-clear waters, and experience the perfect getaway. Find your ideal flight and begin your dream vacation.</p>
                            
                        </div>
            
        </div>
        <Footer/>
        </>
    );
}
export default Maldives;