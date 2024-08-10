// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Add your styles here

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer-content">
        <h2 className="footer-title">Your App Name</h2>
        <p className="footer-description">
          This is a brief description of the application. It provides users with a quick overview of what the app is about and its purpose.
        </p>
        <div className="footer-info">
          <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
