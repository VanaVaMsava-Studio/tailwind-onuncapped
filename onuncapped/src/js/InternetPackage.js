import React, { useState } from 'react';
import './InternetPackage.css'; 
import wifivideo from './assets/wifibackground.mp4';

const packages = [
  {
    name: 'OnBasic',
    price: 'R299/PM',
    speed: '10MB Unlimited Internet',
    devices: 'Up to 8 devices',
    backgroundVideo: wifivideo,
  },
  {
    name: 'OnBizPak',
    price: 'R389/PM',
    speed: '20MB Unlimited Internet',
    devices: 'Up to 16 devices',
    bestSeller: true,
    backgroundVideo: wifivideo,
  },
  {
    name: 'OnPro',
    price: 'R549/PM',
    speed: '50MB Unlimited Internet',
    devices: 'Up to 32 devices',
    backgroundVideo: wifivideo,
  },
  {
    name: 'OnEdge',
    price: 'R849/PM',
    speed: '100MB Unlimited Internet',
    devices: 'Up to 64 devices',
    backgroundVideo: wifivideo,
  },
];

export default function InternetPackagesListing() {
  const [showAllPackages, setShowAllPackages] = useState(false);

  return (
    <section className={`service-listing ${showAllPackages ? 'all-packages' : 'single-package'}`}>
      <div className="service-container">
        {/* Render packages based on state */}
        {(!showAllPackages ? [packages[0]] : packages).map((pkg, index) => (
          <div
            key={index}
            className={`service-card ${showAllPackages ? 'small-card' : 'large-card'}`}
          >
            {/* Background Video */}
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
            {/* BEST SELLER Badge */}
            {pkg.bestSeller && <span className="best-seller">BEST SELLER</span>}
            <div className="content">
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>
              <p className="package-speed">{pkg.speed}</p>
              <p className="package-devices">{pkg.devices}</p>

            </div>
          </div>
        ))}
      </div>

      {/* Buttons for navigation */}
      <div className="button-container">
        {!showAllPackages ? (
          <button className="learn-more-btn" onClick={() => setShowAllPackages(true)}>
            Learn More
          </button>
        ) : (
          <button className="back-btn" onClick={() => setShowAllPackages(false)}>
            Back
          </button>
        )}
      </div>
    </section>
  );
}
