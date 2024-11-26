import React from "react";
import "./aboutus.css";
import TaxiImage from "./path-to-main-image.jpg"; // Main image on the right
import BackgroundImage from "./path-to-background-image.jpg"; // Background image
import MissionImage from "./path-to-mission-image.jpg"; // Mission image
import ImpactImage from "./path-to-impact-image.jpg"; // Impact image

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Say goodbye to cash struggles and ride with ease. Asambe is your new,
          hassle-free way to pay for taxis and track your expenses.
        </p>
        <div className="section">
          <img src={BackgroundImage} alt="Background Icon" className="section-image" />
          <div>
            <h3>Background</h3>
            <p>
              We were tired of always having to fight for change and struggling
              to get a taxi in the morning because you are carrying a R50 or R100.
            </p>
          </div>
        </div>
        <div className="section">
          <img src={MissionImage} alt="Mission Icon" className="section-image" />
          <div>
            <h3>Mission</h3>
            <p>
              Making public transport payments easy, transparent, and digital.
              We want you to be able to save your transport money so you don’t
              always have to borrow from mashonisa or makhelwane.
            </p>
          </div>
        </div>
        <div className="section">
          <img src={ImpactImage} alt="Impact Icon" className="section-image" />
          <div>
            <h3>Impact</h3>
            <p>
              Asambe aims to make it safer and easier for people to travel. You
              now no longer have to worry about always carrying cash or stressing
              about change or taxi math.
            </p>
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={TaxiImage} alt="Taxi Driver" />
      </div>
    </div>
  );
};

export default AboutUs;
