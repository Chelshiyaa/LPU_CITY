import React, { useRef, useState } from "react";
import "./About.css";
import playicon from "../../assets/playicon.png";
import sampleVideo from "../../assets/abt.mp4";
import thumbnail from "../../assets/thumbnail.jpeg"; 
const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="about">
      <div className="about-left">
        {!isPlaying && (
          <div className="video-preview" onClick={handlePlayClick}>
            <img src={thumbnail} alt="Video Thumbnail" className="video-thumbnail" />
            <img src={playicon} alt="Play" className="play-icon" />
          </div>
        )}
        <video
          ref={videoRef}
          className={`about-video ${isPlaying ? "show" : "hide"}`}
          controls
        >
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          To undertake impactful research addressing local, national and global
          challenges...
        </p>
        <p>
          To provide the students with knowledge, skills, values and sensitivity...
        </p>
        <p>
          We strive to nurture curious minds and foster innovation through
          quality education...
        </p>
      </div>
    </div>
  );
};

export default About;
