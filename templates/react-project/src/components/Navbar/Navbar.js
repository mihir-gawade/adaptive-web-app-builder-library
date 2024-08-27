import React from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg" alt="Rockwell Automation" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Help Center</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="/search"><i className="fa fa-search"></i></a>
        <a href="/login"><i className="fa fa-user"></i></a>
      </div>
      <Sidebar />
    </nav>
  );
}

export default Navbar;
