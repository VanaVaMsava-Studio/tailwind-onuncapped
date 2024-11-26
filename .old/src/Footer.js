import React from 'react';
import './Footer.css'; // Make sure to include this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">VENUE LOCATION</h2>
        <div className="footer-details">
          <div className="venue-name">
            <strong>Fallbrook Art Center</strong>
          </div>
          <div className="event-dates">
            <span role="img" aria-label="calendar">📅</span> 17 November - 22 November <br />
            <span>8:00 am - 10:00 pm</span>
          </div>
          <div className="event-address">
            <span role="img" aria-label="location">📍</span> Fallbrook California 92028, USA <br />
            <small>Event Address</small>
          </div>
          <div className="phone-number">
            <span role="img" aria-label="phone">📞</span> 0086578934 <br />
            <small>Phone Number</small>
          </div>
        </div>

        <div className="map-section">
    <div className="gmap-frame">
        <iframe
            title="Onuncapped Office Location"
            width="400"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=400&height=300&hl=en&q=Block%204,%20Fountain%20Grove,%205%202nd%20Rd,%20Hyde%20Park,%20Sandton,%202191+(Onuncapped)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
    </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
