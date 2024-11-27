//Modules
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//Res (Resources)
import logo from "./logo.svg";
import "./css/App.css";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Contact from "./pages/res/Hosting";
import Contact from "./pages/res/Internet";
import Contact from "./pages/res/Partners";
import Contact from "./pages/res/Specialized";
//Component
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

//Content Routes
function App() {
  // Popup visibility state
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  //Routes
  return (
    <Router>
      {/* Navigation */}
      <Navbar />

      {/* Popup Form */}
      {isPopupVisible && (
        <ContactFormPopup onClose={() => setIsPopupVisible(false)} />
      )}

      <Routes>
        {/* Menu Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        {/* Dropdown */}
        <Route path="/specialized" element={<Specialized />} />
        {/* Dropdown Routes */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/internet" element={<Internet />} />
      </Routes>

      {/* Content */}
      <Home />

      {/* Footer */}
      <Footer />
      
    </Router>
  );
}

export default App;
