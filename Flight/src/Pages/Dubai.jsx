import Footer from "../Components/Footer";
import DubaiImg from "../assets/img/dubai.jpg";
import Mall from "../assets/img/Mall.webp";
import Jumeirah from "../assets/img/Jumeirah Beach.webp";
import Dessert from "../assets/img/Dessert.jpg";
import Marina from "../assets/img/Dubai Marina.jpg";

import {useNavigate} from "react-router-dom";

function Dubai(){
    const navigate=useNavigate();
    return(
        <>
        <div className="paris-section">
            <div className="paris-content">
                <h1 data-aos="fade-right">Discover Dubai</h1>
                <p data-aos="fade-right">The City of Luxury, Adventure & Endless Possibilities</p>
                <div className="paris-btn">
                    <button className="btn-paris" onClick={()=>navigate("/dubaiflight")}>Search Flights →</button>
                </div>
                </div>

                <div className="paris-about" data-aos="fade-left">
                    <div className="paris-img">
                        <img src={DubaiImg} alt="" style={{width:"200px",height:"200px",borderRadius:"50%",marginLeft:"100px"}}/>
                </div>
                    <p>Welcome to Dubai, UAE — a dazzling city where modern architecture, <br />luxurious experiences, and Arabian traditions come together. From <br />the magnificent Burj Khalifa to the golden desert dunes, Dubai <br />offers an unforgettable travel experience.</p>
                </div>

                <div className="paris-visit" data-aos="fade-up">
                    <h2 data-aos="fade-right">Top Attraction</h2>

                    <div className="visit-container-1">

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Mall} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Luxurious Dubai Mall</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Jumeirah} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Jumeirah Beach</p>
                            </div>
                        </div>
                        </div>


                       <div className="visit-container-2" data-aos="zoom-in">
                        <div className="visit-img">
                            <img src={Dessert} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Desert safaris</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Marina} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Dubai Marina</p>
                            </div>
                        </div>
                        </div>

                        
                        </div>

                        

                        <div className="explore-paris">
                            <h2 data-aos="fade-right">Ready to Explore Dubai?</h2>
                            <p data-aos="fade-right">Make your travel dreams come true with an unforgettable journey to Dubai. Discover breathtaking attractions, experience Arabian hospitality, and find the perfect flight for your next adventure.</p>
                            
                        </div>
            
        </div>
        <Footer/>
        </>
    );
}
export default Dubai;