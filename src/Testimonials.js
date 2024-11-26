import React from 'react';
import './Testimonials.css'; // Assuming you have a CSS file for styling
import image1 from './assets/profile-user.png';
import image2 from './assets/profile-user.png';
import image3 from './assets/profile-user.png';

const testimonials = [
  {
    company: 'Onuncapped',
    text: 'Exceptional coverage and speed. No more dead zones in my house!',
    name: 'Nikhil ',
    image: image1
  },
  {
    company: 'Onuncapped',
    text: 'Customer support is top-notch, and the setup was seamless. Great service',
    name: ' Anantraman',
    image: image2
  },
  {
    company: 'Onncapped',
    text: 'Best Wi-Fi provider in town. Fast, stable, and worth every cent!',
    name: ',Maria',
    image: image3
  }
];

const TestimonialCard = ({ company, text, name, title, image }) => (
  <div className="testimonial-card">
    <h3>{company}</h3>
    <p>{text}</p>
    <div className="profile">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="testimonials-section">
    <h2>THEY TRUSTED US</h2>
    <p>We are very happy because we have happy customers.</p>
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
