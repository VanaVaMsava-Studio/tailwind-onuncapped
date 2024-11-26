import React from 'react';
import './Specialised.css'; // Import CSS file
import fullyManagedIcon from './assets/wifi_logo.jpg';
import analyticsIcon from './assets/data_logo.jpg';
import securityIcon from './assets/web_logo.jpg';
import hostedEmailIcon from './assets/phone_logo.jpg';
import fastLoadingIcon from './assets/web_hosting.jpg';

const services = [
  {
    icon: fullyManagedIcon,
    title: 'Mobile Broadband & eSignatures',
    description:
      'Stay connected on the go with seamless Mobile Broadband and simplify paperwork with secure, legally binding eSignatures—all in one convenient service.',
  },
  {
    icon: analyticsIcon,
    title: 'Data Management and Recovery',
    description:
      'Ensure your data is always secure with our reliable Data Management and Recovery service, offering seamless organization and swift restoration when you need it most..',
  },
  {
    icon: securityIcon,
    title: 'Web Design , Development & Maintenance',
    description:
      'Bring your ideas to life with our Web Design, Development & Maintenance service, delivering stunning, functional, and well-maintained websites tailored to your needs.',
  },
  {
    icon: hostedEmailIcon,
    title: 'Mobile App Development & Support',
    description:
      'Transform your vision into reality with our Mobile App Development & Support, creating intuitive apps backed by reliable assistance every step of the way.',
  },
  {
    icon: fastLoadingIcon,
    title: 'Secured Web & Email Hosting Solutions',
    description:
      'Protect your online presence with our Secured Web & Email Hosting Solutions, offering reliable performance, advanced security, and seamless connectivity.',
  },
];

function ServicesPage() {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ServicesPage;
