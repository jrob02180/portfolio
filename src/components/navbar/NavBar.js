import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
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
    </div>
  );
};

export default NavBar;
