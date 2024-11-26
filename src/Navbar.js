import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa'; // Importing the icon
import './Navbar.css';

// Import the logo image

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesHover = (isOpen) => {
    setServicesOpen(isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use the imported logo */}
        
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Services Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => handleServicesHover(true)}
          onMouseLeave={() => handleServicesHover(false)}
        >
          <Link to="/services" className="dropdown-link">
            Services <FaCaretDown className="dropdown-icon" />
          </Link>
          {servicesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/internet">Internet Package & VolP</Link></li>
              <li><Link to="/services/hosting">Hosting & Web Packages </Link></li>
              <li><Link to="/services/specialised">IOT</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
