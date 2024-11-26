import React, { useState } from "react";
import Slider from "react-slick";
import Integration from "./Integration"; // Adjust the path if necessary
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

// Import images
import wifiImage from "./wifi_homepage.png";
import cloudImage from "./cloud2.jpg";
import webDevImage from "./web_dev.jpg";

const App = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      title: "Internet Packages",
      description: "Our Products",
      buttonText: "Learn More",
      imageUrl: wifiImage,
    },
    {
      title: "Cloud Packages",
      description: "Our Products",
      buttonText: "Learn More",
      imageUrl: cloudImage,
    },
    {
      title: "Web Services",
      description: "Our Products",
      buttonText: "Learn More",
      imageUrl: webDevImage,
    },
  ];

  // State for step-by-step form
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    otp: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Navigation for form steps
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="app-container">
      {/* Slider Section */}
      <section className="slider-section w-full">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide relative w-full h-screen flex items-center justify-center"
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="overlay absolute inset-0 bg-black opacity-50"></div>
              <div className="content absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="text-lg font-semibold text-blue-300 mb-2">{slide.description}</p>
                <h2 className="text-5xl font-bold text-white mb-4">{slide.title}</h2>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* About Us Section */}
      <section className="about-us-section w-full py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="aboutUsTitle text-4xl font-bold text-blue-800 mb-6">About Us</h1>
          <p className="aboutUsDescription text-gray-700 leading-7">
            OnUncapped Networks specializes in cloud storage, bandwidth security management, and ICT consulting services tailored for both commercial and residential customers.
          </p>
          <div className="whyChooseUs mt-8">
            <h3 className="whyChooseTitle text-2xl font-semibold text-blue-600 mb-4">Why Choose Us?</h3>
            <ul className="whyChooseList list-disc pl-6 text-gray-600">
              <li>Reliable Speeds for Streaming & Gaming</li>
              <li>Best Coverage in South Africa</li>
              <li>Reduced Latency</li>
              <li>Uncapped 4G Experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <Integration />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form Section */}
      <section className="contact-form-section w-full py-16 bg-white">
        <div className="container mx-auto px-6">
          <form>
            <h2 className="text-center text-2xl font-bold mb-6">Enter Your Details</h2>
            {step === 1 && (
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="block w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="block w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            )}
            {/* More steps go here */}
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
