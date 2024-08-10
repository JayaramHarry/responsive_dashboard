// src/components/DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css'; // Add your styles here

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') === 'dark';
    setDarkMode(currentTheme);
    document.body.classList.toggle('dark-mode', currentTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
