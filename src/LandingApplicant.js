import React from "react";
import "./Landing.css";
import "./globals.css";

import background from "./img/background.png";
import logo from "./img/logo.png";
import home from "./img/vector.svg";
import plus from "./img/vector-2.svg";
import box from "./img/vector-3.svg";
import track from "./img/image.svg";

export const LandingApplicant = () => {
  return (
    <div className="landing-applicant">
      <div className="overlap-wrapper">
        <div className="overlap">
          {/* Background Image */}
          <img className="image" src={background} alt="Background" />

          {/* Main Heading */}
          <h1 className="readytobuild">
            <span className="readytobuildtxt">Ready to Build </span>
            <span className="span">Credibility?</span>
          </h1>

          {/* Call to Action */}
          <a href="#" className="get-accredited">
            <span className="get-accreditedtxt">Get Accredited</span>
          </a>

          {/* Header/Navbar */}
          <header className="navbar">
            <div className="frame">
              <img className="Logo" src={logo} alt="Logo" />
              <div className="AdnuAccred">
                <p className="adNUaccred">
                  <span className="Adnutxt">AdNU</span>
                  <span className="Accredtxt">Accred</span>
                </p>
              </div>
            </div>

            <nav className="navbartxt">
              <div className="line"></div>
              <div className="navbar-wrapper">
                <div className="navbarPos">
                  {/* Home */}
                  <a href="#" className="HomeP">
                    <img className="home" src={home} alt="Home Icon" />
                    <span className="Hometxt">Home</span>
                  </a>

                  {/* Apply */}
                  <a href="#" className="ApplyP">
                    <div className="ApplyIcon">
                      <img className="ApplyPlus" src={plus} alt="Apply Icon" />
                      <img className="ApplyBox" src={box} alt="Apply Icon 2" />
                    </div>
                    <span className="Applytxt">Apply</span>
                  </a>

                  {/* Track */}
                  <a href="#" className="TrackP">
                    <img className="Track" src={track} alt="Track Icon" />
                    <span className="Tracktxt">Track</span>
                  </a>
                </div>
              </div>
            </nav>

            {/* Logout Button */}
            <button className="button">Logout</button>
          </header>

          {/* Footer */}
          <footer className="FooterWrap">
            <div className="FootertxtP">
              <nav className="FooterP">
                <a href="#" className="discover">
                  <span className="Footertxt">&gt; Discover</span>
                </a>
                <a href="#" className="aboutus">
                  <span className="Footertxt">&gt; About Us</span>
                </a>
                <a href="#" className="howitworks">
                  <span className="Footertxt">&gt; How It Works</span>
                </a>
                <a href="#" className="partner">
                  <span className="Footertxt">&gt; Become A Partner</span>
                </a>
                <a href="#" className="FAQ">
                  <span className="Footertxt">&gt; FAQ's</span>
                </a>
              </nav>

              <div className="AdnuAccredD">
                <p className="p">
                  <span className="Adnutxt">AdNU</span>
                  <span className="Accredtxt">Accred</span>
                </p>
                <div className="Ramtxt">by RAM</div>
              </div>
            </div>

            <div className="copyrightRAMwrapper">
              <p className="copyrightRAM">
                Copyright © 2025 RAM | All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
