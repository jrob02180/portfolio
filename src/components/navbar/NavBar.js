import React from "react";
import profilepic from "../../assets/profilepic/profile.jpg";
// import "../../assets/lib/bootstrap.min.css";
// import "../../App.css"
// import "../../assets/lib/animate/animate.min.css"


const NavBar = () => {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <nav className="navbar ">
        <div className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa me-3"></i>Jen Roberson
          </h1>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <a href="#aboutme">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact Me</a>
        </div>
      </nav>

      <div className="">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          {/* <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft">
              About Me
            </h1>
            <p className="text-white animated slideInLeft mb-4 pb-2">
              I'm a full stack web developer with a background in medical
              coding, billing, management, and alternative medicine. I have a
              passion for learning, problem solving, and helping others. I'm a
              team player and I'm excited to bring my skills to a company that
              values collaboration and innovation.
            </p>
          </div> */}
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src={profilepic} alt="profilepic"></img>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default NavBar;
