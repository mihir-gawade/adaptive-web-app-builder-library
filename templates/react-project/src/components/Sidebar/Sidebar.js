import React, { useState, useEffect } from 'react'; 
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); 
  };

  useEffect(() => {
    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      <ul className="sidebar-links">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/">Profile</a></li>
        <li><a href="/">Tasks</a></li>
        <li><a href="/">Reports</a></li>
        <li><a href="/">FAQs</a></li>
      </ul>

      {isMobile && (
        <ul className="navbar-links sidebar-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Help Center</a></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
