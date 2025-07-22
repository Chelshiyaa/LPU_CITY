import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>Join us in revolutionizing education for the next generation</p>
        <Link to="program" smooth={true} duration={500} offset={-80}>
          <button className='btn'>Explore more</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
