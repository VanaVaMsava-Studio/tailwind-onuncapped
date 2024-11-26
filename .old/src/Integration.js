import React from "react";
import Slider from "react-slick";
import "./Integration.css";

// Placeholder images (replace these with your actual images)
import partner1 from "./assets/zwap drones old logo.jpg";
import partner2 from "./assets/mtn.png";
import partner4 from "./assets/juuz.png";

const integrations = [
  {
    logo: partner1,
    title: "Zwapdrone",
    description: "See when your accounts overlap with your partners’ sales pipelines and customer lists directly in Salesforce. Then use our Custom Overlaps object to send data directly into Salesforce for advanced reporting, workflows, lead routing, and more.",
  },
  {
    logo: partner2,
    title: "MTN",
    description: "Automate your workflows and connect your apps without coding. Save time and streamline operations with Zapier integrations.",
  },
  {
    logo: partner4,
    title: "Juuz",
    description: "Leverage AI-driven automation to engage customers and streamline communication using Conversica.",
  },
];

const IntegrationCarousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="integration-carousel">
      <div className="integration-container">
        <h2 className="integration-title">Featured Partners</h2>
        <Slider {...sliderSettings} className="integration-slider">
          {integrations.map((integration, index) => (
            <div key={index} className="integration-slide">
              <img
                src={integration.logo}
                alt={integration.title}
                className="integration-logo"
              />
              <h3 className="integration-heading">{integration.title}</h3>
              <p className="integration-description">{integration.description}</p>
            </div>
          ))}
        </Slider>
        
      </div>
    </section>
  );
};

export default IntegrationCarousel;
