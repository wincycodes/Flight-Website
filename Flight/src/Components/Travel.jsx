import Adventure from "../assets/img/adventure.avif";
import Beach from "../assets/img/beach.jpg";
import City from "../assets/img/city-adventure.jpg";
import Gem from "../assets/img/Hidden-gem.jpg";

function Travel(){
    return(
        <div className="travel-section">
            <div className="travel" data-aos="fade-right">
                <h2>Explore Beyond the Ordinary</h2>
                <p>Discover inspiring places, unforgettable experiences, and new adventures waiting for you.</p>
            </div>

            <div className="travel-content-1" data-aos="fade-up">

                <div className="travel-card-1">
                    <img src={Adventure} alt="" style={{width:"350px",height:"250px"}}/>
                    <div className="travel-desc">
                        <h3>Adventure Awaits</h3>
                        <p>Discover breathtaking landscapes and <br />exciting experiences around the world.</p>
                    </div>
                </div>

                
                <div className="travel-card-1">
                    <img src={Beach} alt="" style={{width:"350px",height:"250px"}}/>
                    <div className="travel-desc">
                        <h3>Beach Escapes</h3>
                        <p>Relax by crystal-clear waters and <br />enjoy the perfect tropical gateway.</p>
                    </div>
                </div>
            </div>

                
                <div className="travel-content-2" data-aos="fade-up">
                <div className="travel-card-2">
                    <img src={City} alt="" style={{width:"350px",height:"250px"}}/>
                    <div className="travel-desc">
                        <h3>City Adventures</h3>
                        <p>Experience vibrant cities, iconic <br />landmarks, culture, and local flavors.</p>
                    </div>
                </div>

                
                <div className="travel-card-2">
                    <img src={Gem} alt="" style={{width:"350px",height:"250px"}}/>
                    <div className="travel-desc">
                        <h3>Hidden Gems</h3>
                        <p>Find beautiful destinations away <br />from the usual tourist paths.</p>
                    </div>
                </div>
            </div>

            
        </div>
    );
}
export default Travel;