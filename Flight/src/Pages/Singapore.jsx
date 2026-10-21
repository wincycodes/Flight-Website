import Footer from "../Components/Footer";
import SingaporeImg from "../assets/img/singapore.jpg";
import Gardens from "../assets/img/Gardens.jpg";
import Island from "../assets/img/Sentosa Island.jpg";
import Studio from "../assets/img/Studio.avif";
import Merlion from "../assets/img/Merlion.jpg";

import {useNavigate} from "react-router-dom";

function Singapore(){
    const navigate=useNavigate();
    return(
        <>
        <div className="paris-section">
            <div className="paris-content">
                <h1 data-aos="fade-right">Discover Singapore</h1>
                <p data-aos="fade-right">The City of Gardens, Innovation & Unforgettable Experiences</p>
                <div className="paris-btn">
                    <button className="btn-paris" onClick={()=>navigate("/singaporeflight")}>Search Flights →</button>
                </div>
                </div>

                <div className="paris-about" data-aos="fade-left">
                    <div className="paris-img">
                    <img src={SingaporeImg} alt="" style={{width:"200px",height:"200px",borderRadius:"50%",marginLeft:"100px"}}/>
                </div>
                    <p>Welcome to Singapore — a vibrant city where futuristic architecture,<br /> lush green gardens, and rich cultural heritage come together. <br />From the breathtaking Marina Bay Sands to the beautiful <br />Gardens by the Bay.</p>
                </div>

                <div className="paris-visit" data-aos="fade-up">
                    <h2 data-aos="fade-right">Top Attraction</h2>

                    <div className="visit-container-1">

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Gardens} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Gardens by the Bay</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Island} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Sentosa Island</p>
                            </div>
                        </div>
                        </div>


                       <div className="visit-container-2" data-aos="zoom-in">
                        <div className="visit-img">
                            
                            <div className="visit">
                                <img src={Studio} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                                <p>Universal Studios Singapore</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            
                            <div className="visit">
                                <img src={Merlion} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                                <p>Merlion Park</p>
                            </div>
                        </div>
                        </div>

                        
                        </div>

                        

                        <div className="explore-paris">
                            <h2 data-aos="fade-right">Ready to Explore Singapore?</h2>
                            <p data-aos="fade-right">Turn your travel dreams into reality with an unforgettable journey to Singapore. Discover beautiful gardens, exciting attractions, delicious cuisine, and a vibrant city waiting to be explored.</p>
                            
                        </div>
            
        </div>
        <Footer/>
        </>
    );
}
export default Singapore;