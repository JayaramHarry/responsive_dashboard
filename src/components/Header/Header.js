
import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import './Header.css'; // Add your styles here

const Header = ({ onToggleMenu }) => {
  return (
    <header className="header">
      <button className="header-hamburger" onClick={onToggleMenu}>
        ☰
      </button>
      <div className="header-content">
        <Link to="/">Dashboard</Link>
        <div className="header-right">
          <DarkModeToggle />
          <div className="profile">User</div>
          <div className="notifications">Notifications</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
