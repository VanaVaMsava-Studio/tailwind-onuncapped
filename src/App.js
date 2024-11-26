import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Partners from "./Partners";
import HostingPackage from "./HostingPackage";
import Specialised from "./Specialised";
import InternetPackage from "./InternetPackage";
import ServiceSection from "./ServiceSection";
import ContactFormPopup from "./ContactFormPopup";
import "./ContactFormPopup.css";

const App = () => {
  // Popup visibility state
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  return (
    <Router>
      <Navbar />
      
      {/* Popup Form */}
      {isPopupVisible && (
        <ContactFormPopup onClose={() => setIsPopupVisible(false)} />
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/services/internet" element={<InternetPackage />} />
        <Route path="/services/hosting" element={<HostingPackage />} />
        <Route path="/services/specialised" element={<Specialised />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        
      </Routes>
    </Router>
  );
};

export default App;
