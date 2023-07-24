import React from "react";
// import profilepic from "../../assets/profilepic/profile.jpg";
// import "../../assets/lib/bootstrap.min.css";
// import "../../App.css"
// import "../../assets/lib/animate/animate.min.css"


const NavBar = () => {
  return (
    <div className="">
      <nav className="navbar ">
        <div className="navbar-name">
            Jen Roberson
        </div>
        <div className="nav-sections">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* <div className="">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5"> */}
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
          {/* <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src={profilepic} alt="profilepic"></img>
          </div>
        </div>
      </div>
    </div>
 */}
    </div>
  );
};

export default NavBar;
