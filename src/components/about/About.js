import React from "react";
import profilepic3 from "../../assets/profilepic/profile3.jpg";
import "animate.css";

const About = () => {
  return (
    <div >
      <div id="about">
        <h1 className="about section-title">About Me</h1>
      </div>
      <div className="aboutme">
        <p className="animate__slideInLeft" style={{ fontSize: 30 }}>
          Hello and welcome to my page! I'm a full stack web developer with a
          background in medical coding, management and revenue cycle management.
          I have a passion for learning, problem solving, and helping others.
          I'm a team player and I'm excited to bring my skills to a company that
          values collaboration and innovation.
        </p>
        <div className="animate__slideInRight profile">
          <img className="profilepic" src={profilepic3} alt="profilepic"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
