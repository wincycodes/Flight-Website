
import Subscribe from "../assets/img/subscribe-bg.png";

function Newsletter() {
    return (
        <div 
            className="newsletter-section"
            style={{ backgroundImage: `url(${Subscribe})` }}
        >
            <div className="newsletter-content" >
                <h2>Stay Updated <br /><span>with</span> CloudWing</h2>

                <p>
                    Get the latest flight deals, travel inspiration, <br />
                    and exclusive offers directly in your inbox.
                </p>

                <div className="subscribe-box">
                    <input
                        type="email"
                        placeholder="Enter your Email Address"
                    />
                    <button className="subscribe-btn">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;