import React, { useState } from "react";
// Import the CSS file
import "./ADNUAccreditationPage.css";
// TODO: Import icons from your chosen icon library (e.g., React Icons, Material UI Icons, or custom SVGs)
// Example: 
// import { FaHome, FaArrowRight, FaSearch, FaFileAlt, FaBuilding, FaCheckCircle, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import LogoHeader from './../assets/icons/logo_header.svg';
import HomeIcon from './../assets/icons/home_header.svg';
import ApplyIcon from './../assets/icons/apply_header.svg';
import SearchIcon from './../assets/icons/search_header.svg';
import ApplicationIcon from './../assets/icons/application.svg';
import BuildingIcon from './../assets/icons/building.svg';
import CheckCircleIcon from './../assets/icons/check_circle.svg';

// Main App Component
const ADNUAccreditationPage = () => {
  // State for button hover effects
  const [hoveredButton, setHoveredButton] = useState(null);
  
  // Handler for button clicks
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
    // In a real app, this could show modals, change states, etc.
  };

  // Handler for down arrow click
  const handleDownArrowClick = (e) => {
    e.preventDefault();
    const guideSection = document.querySelector('.guide-section');
    if (guideSection) {
      guideSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Header/Navigation Bar */}
      <header className="header">
        <div className="header-container">
          {/* Logo and Title */}
          <div className="logo-container">
            <div className="logo">
              <img src={LogoHeader} alt="AdNU Logo" className="logo-a" />
              <div className="logo-triangle"></div>
              <span className="logo-adnu">ADNU</span>
              <span className="logo-accred">Accred</span>
            </div>
            <span className="divider">|</span>
            <span className="app-title">Application</span>
          </div>
          
          {/* Navigation Menu */}
          <nav className="nav-menu">
            <button 
              className="nav-button home"
              onClick={() => handleButtonClick("Home")}
              onMouseEnter={() => setHoveredButton("home")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="button-content">
                <img src={HomeIcon} alt="Home" className="icon" />
                <span>Home</span>
              </div>
            </button>
            
            <button 
              className="nav-button apply"
              onClick={() => handleButtonClick("Apply")}
              onMouseEnter={() => setHoveredButton("apply")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="button-content">
                <img src={ApplyIcon} alt="Apply" className="icon" />
                <span>Apply</span>
              </div>
            </button>
            
            <button 
              className="nav-button track"
              onClick={() => handleButtonClick("Track")}
              onMouseEnter={() => setHoveredButton("track")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="button-content">
                <img src={SearchIcon} alt="Track" className="icon" />
                <span>Track</span>
              </div>
            </button>
            
            <button 
              className="logout-button"
              onClick={() => handleButtonClick("Logout")}
              onMouseEnter={() => setHoveredButton("logout")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Let's Get Your Dorm <span className="highlight">Accredited!</span>
          </h1>
          <p className="hero-subtitle">Elevate Your Dorm with ADNU Accreditation.</p>
          <button 
            className="cta-button"
            onClick={() => handleButtonClick("Apply Now")}
            onMouseEnter={() => setHoveredButton("applyNow")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Apply
          </button>
        </div>
        
        {/* Down Arrow */}
        <a 
          href="#guide"
          className="down-arrow"
          onClick={handleDownArrowClick}
        >
          <i className="icon-chevron-down"></i>
        </a>
      </section>

      {/* Guide Title */}
      <div className="guide-title">
        STEP-BY-STEP GUIDE
      </div>

      {/* Guide Description */}
      <p className="guide-description">
        Follow These Simple Steps To Complete Your Dorm Accreditation And Unlock More 
        Opportunities For Growth And Trust.
      </p>

      {/* Step-by-Step Guide Section */}
      <section id="guide" className="guide-section">
        <div className="container">
          {/* Steps */}
          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-item">
              <div className="step-icon">
                <img src={ApplicationIcon} alt="Application" className="step-icon" />
              </div>
              <div className="step-content">
                <h3 className="step-title">STEP 1:</h3>
                <p className="step-description">Complete Application</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="step-item">
              <div className="step-icon">
                <img src={BuildingIcon} alt="Building" className="step-icon" />
              </div>
              <div className="step-content">
                <h3 className="step-title">STEP 2:</h3>
                <p className="step-description">Onsite Inspection</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="step-item">
              <div className="step-icon">
                <img src={SearchIcon} alt="Search" className="step-icon" />
              </div>
              <div className="step-content">
                <h3 className="step-title">STEP 3:</h3>
                <p className="step-description">Review & Verification</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="step-item">
              <div className="step-icon">
                <img src={CheckCircleIcon} alt="Check Circle" className="step-icon" />
              </div>
              <div className="step-content">
                <h3 className="step-title">STEP 4:</h3>
                <p className="step-description">Get Accredited!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <button 
            className="start-button"
            onClick={() => handleButtonClick("Start Application")}
            onMouseEnter={() => setHoveredButton("startApplication")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Start Application
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Footer Logo */}
            <div className="footer-logo">
              <span className="footer-adnu">ADNU</span>
              <span className="footer-accred">Accred</span>
              <div className="footer-subtitle">by RAM</div>
            </div>
            
            {/* Footer Links */}
            <div className="footer-links">
              <button className="footer-link" onClick={() => handleButtonClick("Discover")}>
                <i className="icon-chevron-right"></i>
                <span>Discover</span>
              </button>
              <button className="footer-link" onClick={() => handleButtonClick("About Us")}>
                <i className="icon-chevron-right"></i>
                <span>About Us</span>
              </button>
              <button className="footer-link" onClick={() => handleButtonClick("Become A Partner")}>
                <i className="icon-chevron-right"></i>
                <span>Become A Partner</span>
              </button>
              <button className="footer-link" onClick={() => handleButtonClick("How It Works")}>
                <i className="icon-chevron-right"></i>
                <span>How It Works</span>
              </button>
              <button className="footer-link" onClick={() => handleButtonClick("FAQ's")}>
                <i className="icon-chevron-right"></i>
                <span>FAQ's</span>
              </button>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="copyright">
            Copyright © 2025 RAM | All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ADNUAccreditationPage;