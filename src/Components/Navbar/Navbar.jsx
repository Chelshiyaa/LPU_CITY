import React from 'react';
import './Navbar.css';
import lpulogo from '../../assets/lpulogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-dark">
      <img src={lpulogo} alt="logo" className="logo" />
      <ul>
        <li onClick={() => handleNavigation('hero')}>Home</li>
        <li onClick={() => handleNavigation('program')}>Courses</li>
        <li onClick={() => handleNavigation('about')}>About Us</li>
        <li onClick={() => handleNavigation('campus')}>Campus</li>
        <li onClick={() => handleNavigation('testimonials')}>Testimonials</li>
        <li onClick={() => handleNavigation('contact')}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
