import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-image" />
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <button className="read-more-button">Read More</button>
    </div>
  );
};

export default ServiceCard;
