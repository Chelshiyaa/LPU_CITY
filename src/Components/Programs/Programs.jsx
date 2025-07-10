import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';
import program1 from '../../assets/pro1.png';
import program2 from '../../assets/pro2.png';
import program3 from '../../assets/pro3.png';
import grad1 from '../../assets/grad1.png';
import grad2 from '../../assets/grad2.png';
import grad3 from '../../assets/grad3.png';

const Programs = () => {
  return (
    <div className='programs'>
      <Link to="/graduation" className='program'>
        <img className="program-img" src={program1} alt="Program 1" />
        <div className="caption">
          <img src={grad1} alt="Graduation" />
          <p>Graduation Degree</p>
        </div>
      </Link>

      <Link to="/masters" className='program'>
        <img className="program-img" src={program2} alt="Program 2" />
        <div className="caption">
          <img src={grad2} alt="Graduation" />
          <p>Master's Degree</p>
        </div>
      </Link>

      <Link to="/postgraduation" className='program'>
        <img className="program-img" src={program3} alt="Program 3" />
        <div className="caption">
          <img src={grad3} alt="Graduation" />
          <p>Post Graduation Degree</p>
        </div>
      </Link>
    </div>
  );
};

export default Programs;
