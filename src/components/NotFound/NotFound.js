import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go to Home</Link>
    </div>
  );
};

export default NotFound;
