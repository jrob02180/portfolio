import React from "react";
import profilepic from "../../assets/profilepic/profile.jpg";
import 'animate.css';

const About = () => {
  return (
    <div className="">
          <div id="about">
            <h1 className="about section-title ff-secondary">
              About Me
            </h1>
          </div>
        <div className="aboutme">
            <p className="animate__slideInLeft" style={{ fontSize: 30 }}>
              I'm a full stack web developer with a background in medical
              coding, management and revenue cycle management. I have a
              passion for learning, problem solving, and helping others. I'm a
              team player and I'm excited to bring my skills to a company that
              values collaboration and innovation.
            </p>
          <div className="animate__slideInRight">
            <img className="img-fluid profilepic" src={profilepic} alt="profilepic"></img>
          </div>
        </div>
    </div>
  );
};

export default About;
