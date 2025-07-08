import React, { useEffect, useState } from 'react';
import './Navbar.css';
import lpulogo from '../../assets/lpulogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={lpulogo} alt="logo" className="logo" />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-220} duration={500}>Courses</Link></li>
        <li><Link to='about' smooth={true} offset={-120} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-230} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-220} duration={500}>Testimonials</Link></li>
        <li>
          <Link to='contact' smooth={true} offset={-220} duration={500}>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
