import React from "react";
import "./Hero.css";
import profile from "../../assets/pro.jpg";
import MyWork from "../MyWork/MyWork";
import Footer from "../Footer/Footer";

const Hero = () => {
  // strings: [
  //     "Fronted Developer",
  //     "Backend Developer",
  //     "Java Developer",
  //     "Web Developer",
  //     "Data Scientist",
  //   ],

  return (
    <section>
      <div className="hero" id="hero" style={{marginTop:'90px'}}>
      <img
        src={profile}
        width={"200px"}
        style={{ borderRadius: "50%" }}
        alt=""
      />
      <h1>It's Me Rohit Mishra</h1>
      <h2>Graphic Designer</h2>
      <h3>+91 9131959986</h3>
      <h3>rohitm1131@gmail.com</h3>
      {/* <p>
      Every project is a puzzle, a chance to tell a story through strategic layouts and stunning imagery.  This creative fire is what keeps me pushing boundaries and producing designs that resonate.
      </p> */}

      <div className="hero-action">
        <a target="_blank" href="https://www.linkedin.com/in/rohit-mishra-5184341a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className='bx bxl-linkedin'></i></a>
        <a target="_blank" href="https://wa.me/9131959986"><i className='bx bxl-whatsapp'></i></a>
      </div>

    </div>
      {/* My Work Component */}
      <MyWork />
    </section>
  );
};

export default Hero;
