import React, { useEffect } from "react";
import "./MyWork.css";

import { Link } from "react-router-dom";

import vid1 from "../../assets/Projects/Liugong Graphics/Liugong reel.mp4";
import vid2 from "../../assets/Projects/Clothing Industry Post & Reels/2.mp4";
import vid3 from "../../assets/Projects/Clothing Industry Post & Reels/3.mp4";
import vid4 from "../../assets/Projects/Clothing Industry Post & Reels/4.mp4";

const ReelsC = () => {

  // slide to top function
  useEffect(() => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    goToTop();
}, []);

  return (
    <div className="mywork" id="work">
        
      <h3>Reels</h3>
      <div className="mywork-container">
        <div className="img-btn-con">
          <video
            src={vid1}
            width="200px"
            autoPlay={false}
            controls={true}
          ></video>
        </div>
        <div className="img-btn-con">
          <video
            src={vid2}
            width="200px"
            autoPlay={false}
            controls={true}
          ></video>
        </div>
      </div>

      <div className="mywork-container">
        <div className="img-btn-con">
          <video
            src={vid4}
            width="300px"
            autoPlay={false}
            controls={true}
          ></video>
        </div>
        <div className="img-btn-con">
          <video
            src={vid3}
            width="300px"
            autoPlay={false}
            controls={true}
          ></video>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ReelsC;
