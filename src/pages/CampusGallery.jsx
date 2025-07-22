import React from 'react';
import './CampusGallery.css';

import camp from '../assets/camp.png';
import cam1 from '../assets/cam1.png';
import cam2 from '../assets/cam2.png';
import cam3 from '../assets/cam3.png';
import cam4 from '../assets/cam4.png';
import cam5 from '../assets/cam5.png';
import cam6 from '../assets/incamp1.jpeg';
import cam7 from '../assets/incamp2.jpeg';
import cam8 from '../assets/incamp3.jpeg';
import cam9 from '../assets/incamp4.jpeg';
import cam10 from '../assets/incamp5.jpeg';
import cam11 from '../assets/incamp6.jpeg';
import cam12 from '../assets/incamp7.jpeg';
const images = [camp, cam1, cam2, cam3, cam4, cam5,cam6, cam7, cam8, cam9, cam10, cam11, cam12];

const CampusGallery = () => {
  return (
    <div className="campus-gallery">
      <h2>Explore More Campus Moments</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img src={img} key={index} alt={`Campus ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CampusGallery;
