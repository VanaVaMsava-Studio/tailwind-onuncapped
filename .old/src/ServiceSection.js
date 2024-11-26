import React from 'react';
import ServiceCard from './ServiceCard';
import designImage from './assets/10914717.jpg';
import seoImage from './assets/10215531.jpg';
import socialMediaImage from './assets/iot.jpg';

import './ServiceSection.css';

const services = [
  {
    image: designImage,
    title: 'Internet Packages & VolP',
    description: 'Experience blazing-fast, reliable internet with affordable plans tailored to your needs. Stay connected effortlessly with 24/7 support and hassle-free installation!',
  },
  {
    image: seoImage,
    title: 'Web App & Hosting Packages',
    description: 'Get secure, high-performance hosting packages with 99.9% uptime, easy setup, and expert support—perfect for your growing online presence!',
  },
  {
    image: socialMediaImage,
    title: 'IOT Devices',
    description: 'Our IoT devices offer smart, connected solutions that optimize  energy efficiency, and automation in homes and businesses , empower a smarter future with Onuncapped! ',
  }
];

const ServiceSection = () => {
  return (
    <div className="service-section">
      <h2>Services</h2>
      <div className="service-cards-container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
