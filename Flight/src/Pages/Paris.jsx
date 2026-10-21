import Parisimg from "../assets/img/paris.jpg";
import Eiffel from "../assets/img/Effil-Tower.jpg";
import Louvre from "../assets/img/louvre.webp";
import Cathedral from "../assets/img/Cathedral.jpg";
import Palace from "../assets/img/palace.jpg";

import Footer from "../Components/Footer";
import {useNavigate} from "react-router-dom";

function Paris(){
    const navigate=useNavigate();
    return(
        <>
        <div className="paris-section">
            <div className="paris-content">
                <h1 data-aos="fade-right">Discover Paris</h1>
                <p data-aos="fade-right">The City of Love, Lights & Timeless Beauty</p>
                <div className="paris-btn">
                    <button className="btn-paris" onClick={()=>navigate("/parisflight")}>Search Flights →</button>
                </div>
                </div>

                <div className="paris-about" data-aos="fade-left">
                    <div className="paris-img">
                    <img src={Parisimg} alt="" style={{width:"200px",height:"200px",borderRadius:"50%",marginLeft:"100px"}}/>
                </div>
                    <p>Welcome to Paris, France — a city where romance, art, fashion, and <br />history come together. From the breathtaking Eiffel Tower to <br />charming cafés along cobblestone streets, every corner of Paris <br />has a story to tell.</p>
                </div>

                <div className="paris-visit" data-aos="fade-up">
                    <h2 data-aos="fade-right">Top Attraction</h2>

                    <div className="visit-container-1">

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Eiffel} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Eiffel Tower</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Louvre} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Louvre Museum</p>
                            </div>
                        </div>
                        </div>


                       <div className="visit-container-2" data-aos="zoom-in">
                        <div className="visit-img">
                            <img src={Cathedral} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Notre-Dame Cathedral</p>
                            </div>
                        </div>

                        <div className="visit-img" data-aos="zoom-in">
                            <img src={Palace} alt="" style={{width:"300px",height:"250px",borderRadius:"15px"}}/>
                            <div className="visit">
                                <p>Palace of Versailles</p>
                            </div>
                        </div>
                        </div>

                        
                        </div>

                        

                        <div className="explore-paris">
                            <h2 data-aos="fade-right">Ready to Explore Paris?</h2>
                            <p data-aos="fade-right">Turn your travel dreams into reality. Find the perfect flight and begin your unforgettable journey to the heart of France.</p>
                            
                        </div>
            
        </div>
        <Footer/>
        </>
    );
}
export default Paris;