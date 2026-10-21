function Footer(){
    return(
        <div className="footer-section">
            <div className="footer-content">

                <div className="footer-about">
                    <h2 data-aos="fade-right">CloudWing <i className="fa-solid fa-plane"></i></h2>
                    <p data-aos="fade-right">Your journey begins with CloudWing. 
                       Discover destinations, find great flights, 
                       and travel with confidence.</p>

                       <div className="social-icons" data-aos="fade-left">
                           <i className="fa-brands fa-facebook"></i>
                           <i className="fa-brands fa-instagram"></i>
                           <i className="fa-brands fa-twitter"></i>
                           <i className="fa-brands fa-linkedin"></i>
                        </div>
                </div>
                

                <div className="footer-links" data-aos="zoom-in">
                    <h3>Explore</h3>
                    <a href="#">Home</a>
                    <a href="#">Destinations</a>
                    <a href="#">Flights</a>
                    <a href="#">Offers</a>
                </div>

                <div className="footer-links" data-aos="zoom-in">
                    <h3>Support</h3>
                    <a href="#">Help Center</a>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Travel Guide</a>
                </div>


                <div className="footer-links" data-aos="zoom-in">
                    <h3>Contact</h3>
                    <p>
                        <i className="fa-solid fa-envelope"></i>
                       support@cloudwing.com
                    </p>

                    <p>
                        <i className="fa-solid fa-phone"></i>
                        +91 98765 43210
                    </p>

                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                         Tamil Nadu, India
                    </p>
                </div>

                 
                 <div className="footer-bottom">
                    <p>© 2026 CloudWing. All rights reserved.</p>

                <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            </div>
            </div>


            </div>
        </div>
    );
}
export default Footer;