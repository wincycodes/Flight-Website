import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Destination from "./Components/Destination";
import Choose from "./Components/Choose";
import Flights from "./Components/Flights";
import Offer from "./Components/Offer";
import Works from "./Components/Works";
import Booking from "./Components/Booking";
import Travel from "./Components/Travel";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import Flight from "./Pages/Flight";
import Destinations from "./Pages/Destinations"
import ScrollToTop from "./Components/ScrollToTop";
import Paris from "./Pages/Paris";
import Dubai from "./Pages/Dubai";
import Singapore from "./Pages/Singapore";
import Maldives from "./Pages/Maldives";
import ParisFlight from "./Pages/ParisFlight";
import DubaiFlight from "./Pages/DubaiFlight";
import SingaporeFlight from "./Pages/SingaporeFlight";
import MaldivesFlight from "./Pages/MaldivesFlight";

import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home/>
              <Destination/>
              <Choose/>
              <Offer/>
              <Works/>
              <Travel/>
              <Newsletter/>
              <Footer/>
            </>
          }
        />

        {/* Registration Page */}
        <Route path="/register" element={<Registration/>} />

        {/* Login Page */}
        <Route path="/login" element={<Login/>} />

        {/* Flights Page */}
        <Route path="/flights" element={<Flights/>} />

        {/*Booking Page*/}
        <Route path="/booking" element={<Booking/>}/>

        {/*Flights Page*/}
        <Route path="/flight" element={<Flight/>}/>

        {/*Destinations Page*/}
        <Route path="/destinations" element={<Destinations/>}/>

        <Route path="/paris" element={<Paris/>}/>
        <Route path="/dubai" element={<Dubai/>}/>
        <Route path="/singapore" element={<Singapore/>}/>
        <Route path="/maldives" element={<Maldives/>}/>

        <Route path="/parisflight" element={<ParisFlight/>}/>
        <Route path="/dubaiflight" element={<DubaiFlight/>}/>
        <Route path="/singaporeflight" element={<SingaporeFlight/>}/>
        <Route path="/maldivesflight" element={<MaldivesFlight/>}/>
  
      </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;