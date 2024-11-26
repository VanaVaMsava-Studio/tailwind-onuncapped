import React, { useState } from "react";
import contactImage from './assets/Screenshot 2024-11-07 002014.png';
import "./Contact.css"; // Import CSS

const ContactForm = () => {
  const questions = [
    {
      type: "select",
      question: "Select your inquiry type",
      options: ["General Inquiry", "Sales", "Other"],
    },
    { type: "text", question: "What is your name?" },
    { type: "email", question: "Enter your email" },
    { type: "tel", question: "Enter your Whatsapp number" },
    { type: "text", question: "Which area are you in?" },
    {
      type: "radio",
      question: "POPIA Act: Details are required to be collected, stored, and updated...",
      options: ["Yes, I accept", "No, I don't agree"],
    },
    { type: "number", question: "Enter your ID number" },
    { type: "text", question: "Enter your connection address" },
    { type: "text", question: "Enter your contact address" },
    {
      type: "radio",
      question: "Location Terms and Conditions: LTE and Fibre packages are subject to area availability...",
      options: ["Yes, I accept", "No, I don't agree"],
    },
    {
      type: "radio",
      question: "All equipment supplied by Onuncapped valued at R3899 remains the property of Onuncapped...",
      options: ["Agreed, I will return at the end or when I cancel my service", "No, I want to keep my router"],
    },
    {
      type: "radio",
      question: "Onuncapped will not be held liable for damage to the router on site...",
      options: ["Agreed, Month-To-Month billing uncapped with Acceptable Fair Use Policy (AUP).", "Option 2"]
    },
    {
      type: "radio",
      question: "Billing Terms: You will be charged pro-rata from the day of installation...",
      options: ["Agreed, service fee totals R349", "No"]
    },
    {
      type: "radio",
      question: "A late fee of R99.95 will be incurred for payments past the invoice date...",
      options: ["Yes, I'm liable to pay the late fee.", "No"]
    },
    {
      type: "radio",
      question: "Bank Statements may not be older than 3 months. ID Verification must be done...",
      options: ["Option 1", "Option 2"]
    },
    {
      type: "radio",
      question: "I agree to the POPIA Act terms and conditions.",
      options: ["Yes, I accept", "No, I don't agree"],
    }
  ];

  const stages = {
    inquiryType: [0],
    initialInfo: [1, 2, 3, 4],
    popia: [5],
    addressInfo: [6, 7, 8],
    terms: [9],
    equipmentTerms: [10, 11], 
    billingTerms: [12, 13], 
    finalAgreement: [14] 
  };

  const [currentStage, setCurrentStage] = useState("inquiryType");
  const [answers, setAnswers] = useState({});
  
  const currentQuestionIndices = stages[currentStage];
  const currentQuestions = currentQuestionIndices.map((index) => questions[index]);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let inputAnswer = {};

    for (const [key, value] of formData.entries()) {
      inputAnswer[key] = value;
    }

    const allAnswered = Object.values(inputAnswer).every(answer => answer.trim() !== "");
    if (!allAnswered) {
      alert("Please provide an answer for all questions.");
      return;
    }

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ...inputAnswer,
    }));

    if (currentStage === "inquiryType") {
      setCurrentStage("initialInfo");
    } else if (currentStage === "initialInfo") {
      setCurrentStage("popia");
    } else if (currentStage === "popia") {
      setCurrentStage("addressInfo");
    } else if (currentStage === "addressInfo") {
      setCurrentStage("terms");
    } else if (currentStage === "terms") {
      setCurrentStage("equipmentTerms");
    } else if (currentStage === "equipmentTerms") {
      setCurrentStage("billingTerms");
    } else if (currentStage === "billingTerms") {
      setCurrentStage("finalAgreement");
    } else if (currentStage === "finalAgreement") {
      console.log("Form submitted:", answers);
      alert("Thank you for completing the form!");
    }
    e.target.reset();
  };

  return (
    <div className="contact-page"> {/* Added the wrapper class here */}
      <div className="form-container">
        <div className="form-image">
          <img src={contactImage} alt="Contact Us" />
        </div>

        <div className="form-content">
          <form onSubmit={handleAnswerSubmit}>
            {currentQuestions.map((question, index) => (
              <div key={index}>
                <h2>{question.question}</h2>
                {question.type === "radio" ? (
                  <div className="radio-group">
                    {question.options.map((option, idx) => (
                      <label key={idx}>
                        <input
                          type="radio"
                          name={`answer-${index}`}
                          value={option}
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ) : question.type === "select" ? (
                  <select name={`answer-${index}`} required>
                    <option value="">Select an option</option>
                    {question.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={question.type}
                    name={`answer-${index}`}
                    placeholder="Your answer"
                    required
                  />
                )}
              </div>
            ))}
            <button type="submit">Next</button>
          </form>
          <p>Stage {Object.keys(stages).indexOf(currentStage) + 1} of {Object.keys(stages).length}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
