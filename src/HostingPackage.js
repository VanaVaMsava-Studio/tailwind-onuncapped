import React, { useState } from 'react';
import './HostingPackages.css'; // Custom CSS file for the combined component
import cloudvideo from './assets/cloudbackground.mp4';
import fullyManagedIcon from './assets/wifi_logo.jpg';
import analyticsIcon from './assets/data_logo.jpg';
import securityIcon from './assets/web_logo.jpg';
import hostedEmailIcon from './assets/phone_logo.jpg';
import fastLoadingIcon from './assets/web_hosting.jpg';

const packages = [
  {
    name: 'OnStarter',
    price: 'R49/PM',
    storage: '5GB SSD Storage',
    email: 'Unlimited Email Accounts',
    webmail: 'Webmail Access',
    backup: 'Daily Backups',
    backgroundVideo: cloudvideo,
  },
  {
    name: 'OnGo',
    price: 'R109/PM',
    storage: '10GB SSD Storage',
    email: 'Unlimited Email Accounts',
    webmail: 'Webmail Access',
    backup: 'Daily Backups',
    backgroundVideo: cloudvideo,
  },
  {
    name: 'OnLite',
    price: 'R249/PM',
    storage: '25GB SSD Storage',
    email: 'Unlimited Email Accounts',
    webmail: 'Webmail Access',
    backup: 'Daily Backup',
    bestSeller: true,
    backgroundVideo: cloudvideo,
  },
  {
    name: 'OnPrime',
    price: 'R449/PM',
    storage: '50GB SSD Storage',
    email: 'Unlimited Email Accounts',
    webmail: 'Webmail Access',
    backup: 'Daily Backups',
    backgroundVideo: cloudvideo,
  },
  {
    name: 'OnSupreme',
    price: 'R809/PM',
    storage: '100GB SSD Storage',
    email: 'Unlimited Email Accounts',
    webmail: 'Webmail Access',
    backup: 'Daily Backups',
    backgroundVideo: cloudvideo,
  },
];

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
      'Ensure your data is always secure with our reliable Data Management and Recovery service, offering seamless organization and swift restoration when you need it most.',
  },
  {
    icon: securityIcon,
    title: 'Web Design, Development & Maintenance',
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

function HostingPackages() {
  const [showAllHosting, setShowAllHosting] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <div className="combined-services-container">
      <div className="service-container">
        {packages
          .filter((_, index) => showAllHosting || index === 0) // Show only the first card by default
          .map((pkg, index) => (
            <div key={index} className={`service-card ${pkg.backgroundColor || ''}`}>
              {pkg.backgroundVideo && (
                <video
                  className="background-video"
                  src={pkg.backgroundVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}

              {pkg.bestSeller && <span className="best-seller">BEST SELLER</span>}

              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>
              <p className="package-speed">{pkg.storage}</p>
              <p className="package-devices">{pkg.email}</p>
            </div>
          ))}

        {!showAllHosting && (
          <button
            className="learn-more-btn bg-blue-500 text-white px-4 py-2 rounded mt-6"
            onClick={() => setShowAllHosting(true)}
          >
            Learn More (Hosting Packages)
          </button>
        )}

        {showAllHosting && (
          <button
            className="back-btn bg-gray-500 text-white px-4 py-2 rounded mt-6"
            onClick={() => setShowAllHosting(false)}
          >
            Back to First Package
          </button>
        )}
      </div>

      <div className="services-section">
        <h2>Our Specialised Services</h2>
        <div className="services-container">
          {services
            .filter((_, index) => showAllServices || index === 0) // Show only the first service card initially
            .map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}

          {!showAllServices && (
            <button
              className="learn-more-btn bg-blue-500 text-white px-4 py-2 rounded mt-6"
              onClick={() => setShowAllServices(true)}
            >
              Learn More (Specialised Services)
            </button>
          )}

          {showAllServices && (
            <button
              className="back-btn bg-gray-500 text-white px-4 py-2 rounded mt-6"
              onClick={() => setShowAllServices(false)}
            >
              Back to First Service
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HostingPackages;
