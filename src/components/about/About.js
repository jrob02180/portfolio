import React from "react";
import profilepic from "../../assets/profilepic/profile.jpg";

const About = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="slideInLeft text-primary">
              About Me
            </h1>
            <p className="slideInLeft" style={{ fontSize: 30 }}>
              I'm a full stack web developer with a background in medical
              coding, management and revenue cycle management. I have a
              passion for learning, problem solving, and helping others. I'm a
              team player and I'm excited to bring my skills to a company that
              values collaboration and innovation.
            </p>
          </div>
          {/* <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src={profilepic} alt="profilepic"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
