import React from "react";
import "./About.css";
import aone from "../../assets/aone.png";
import playicon from "../../assets/playicon.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aone} className="about-img"/>
        <img src={playicon} className="play-icon"/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          To undertake impactful research addressing local, national and global
          challenges. To prepare graduates to be lifelong learners with strong
          analytical and leadership skills. To develop global professionals and
          entrepreneurs with innovative spirit, tolerance and desire to make a
          difference to the society.
        </p>
        <p>
          To provide the students with knowledge, skills, values and sensitivity
          to face the challenges in life both in academic field as well as in
          their personal life. To develop the human potential to achieve
          different opportunities in future.
        </p>
        <p>
          We strive to nurture curious minds and foster innovation through
          quality education. Our mission is to empower students with knowledge,
          skills, and values. We prepare them to confidently embark on the
          future and shape a better world.
        </p>
      </div>
    </div>
  );
};

export default About;
