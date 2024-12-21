// src/components/LandingPage.jsx
import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="hero-section">
        <h1 className="hero-heading">Welcome to the Real-Time Collaboration App</h1>
        <p className="hero-description">
          Collaborate with your team in real-time, effortlessly. Share ideas, track progress, and communicate seamlessly to drive your team's success.
        </p>
        <div className="cta-buttons">
          <a href="/login" className="btn btn-primary btn-cta">Login</a>
          <a href="/register" className="btn btn-secondary btn-cta">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
