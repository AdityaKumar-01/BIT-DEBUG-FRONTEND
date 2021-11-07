import React, { useState } from "react";
import UseAnimations from "react-useanimations";

import github from "react-useanimations/lib/github";
import insta from "react-useanimations/lib/instagram";
import linkdin from "react-useanimations/lib/linkedin";
import logo from "../../assets/logoFull.png";
import scrum from "../../assets/scrum.png";
import focus from "../../assets/focus.png";
import list from "../../assets/list.png";
import progress from "../../assets/progress.png";
import sign from "../../assets/sign.png";
import "./HomePage.css";
import SignUp from "./../../Component/SignUp/SignUp.component";
import SignIn from "./../../Component/SignIn/SignIn.component";

const HomePage = () => {
  const [showUp, setShowUp] = useState(true);
  const handleOptionClick = () => {
    setShowUp(!showUp);
  };
  return (
    <div className="home-wrapper" id="home">
      <div className="home-navbar">
        <span>
          <img src={logo} alt="logo" className="nav-logo" />
        </span>
        <span className="home-nav-link">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="nav-btn get-btn">
            <a href="#form-section">Get Started</a>
          </span>
        </span>
      </div>
      <div className="home-content">
        <div className="hero-text">
          <p className="display-text">
            Your one solution for tracking every{" "}
            <span style={{ color: "#f54748" }}>#BYTE </span>of your project
          </p>
          <span className="nav-btn">
            <a href="#form-section">Get Started</a>
          </span>
        </div>
        <div className="home-img">
          <img src={scrum} alt="scrum" />
        </div>
      </div>
      <div className="about-wrapper" id="about">
        <div className="about-header header">We Provide</div>
        <div className="feature-row">
          <div className="feature-card">
            <div className="feature-img img1">
              <img src={focus} alt="img" />
            </div>
            <div className="feature-desc">
              <span className="feature-desc-title">All at one place</span>
              <span className="feature-desc-sub-title">
                Get your all projects detail and task assigned to you at one
                place
              </span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-img img2">
              <img src={progress} alt="img" />
            </div>
            <div className="feature-desc">
              <span className="feature-desc-title">Easy to keep track</span>
              <span className="feature-desc-sub-title">
                Track every bit of your project and visualize its progress
              </span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-img img3">
              <img
                src={list}
                alt="img"
                style={{ width: "400px", height: "300px" }}
              />
            </div>
            <div className="feature-desc">
              <span className="feature-desc-title">
                Create multiple project and manage
              </span>
              <span className="feature-desc-sub-title">
                An organised board for all the task related to a project at one
                place
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="form-wrapper" id="form-section">
        <div className="form-header header">Get Started</div>
        <div className="form-content">
          <div className="form-img">
            <img src={sign} alt="sign" />
          </div>
          <div className="form-body">
            <div className="form-option">
              <span
                className={showUp ? "showUp" : "showDown"}
                onClick={handleOptionClick}
              >
                Sign Up
              </span>
              <span
                className={!showUp ? "showUp" : "showDown"}
                onClick={handleOptionClick}
              >
                Sign In
              </span>
            </div>
            <div className="form-component">
              {showUp ? <SignUp /> : <SignIn />}
            </div>
          </div>
        </div>
      </div>

      <div className="footer" id="contact">
        <div className="footer-row">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/AdityaKumar-01/BYTE-TRACKER-FRONTEND"
              target="_blank"
            >
              <UseAnimations
                animation={github}
                size={50}
                strokeColor={"#f54748"}
              />
            </a>
            <a href="https://www.instagram.com/jerry_7318/" target="_blank">
              <UseAnimations
                animation={insta}
                size={50}
                strokeColor={"#f54748"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumar-2a7bb81b6/"
              target="_blank"
            >
              <UseAnimations
                animation={linkdin}
                size={50}
                strokeColor={"#f54748"}
              />
            </a>
          </div>
        </div>
        <div className="footer-row maker">
          <p>
            Made by<span className="mine">Aditya</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
