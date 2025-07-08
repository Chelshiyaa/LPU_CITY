import React from 'react';
import './Campus.css';
import camp from '../../assets/camp.png';
import cam1 from '../../assets/cam1.png';
import cam2 from '../../assets/cam2.png';
import cam3 from '../../assets/cam3.png';
import cam4 from '../../assets/cam4.png';
import cam5 from '../../assets/cam5.png';
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={camp} alt="" />
            <img src={cam1} alt="" />
            <img src={cam2} alt="" />
            <img src={cam3} alt="" />
            <img src={cam4} alt="" />
            <img src={cam5} alt="" />
        </div>
        <button className='btn dark-btn'>See more</button>
    </div>
  )
}

export default Campus;