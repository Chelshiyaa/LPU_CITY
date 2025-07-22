import React from 'react';
import './Campus.css';
import { useNavigate } from 'react-router-dom';

import camp from '../../assets/camp.png';
import cam1 from '../../assets/cam1.png';
import cam2 from '../../assets/cam2.png';
import cam3 from '../../assets/cam3.png';
import cam4 from '../../assets/cam4.png';
import cam5 from '../../assets/cam5.png';

const Campus = () => {
  const navigate = useNavigate();

  return (
    <div className='campus'>
      <div className="gallery">
        <img src={camp} alt="camp" />
        <img src={cam1} alt="cam1" />
        <img src={cam2} alt="cam2" />
        <img src={cam3} alt="cam3" />
        <img src={cam4} alt="cam4" />
        <img src={cam5} alt="cam5" />
      </div>
      <button className='btn dark-btn' onClick={() => navigate('/campus-gallery')}>
        See more
      </button>
    </div>
  );
};

export default Campus;
