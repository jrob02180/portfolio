import React from "react";
import badge from "../../assets/skills/badge.png";
import 'animate.css'

export default function Resume() {
  return (
    <div>
      <h1 className="section-title" id="skills">
        Skills
      </h1>
      <div className="credentials">
      <a href="https://docs.google.com/document/d/12Lc-1hYkdbZHov4d54WjaWQNIsHOeeBP/edit?usp=sharing&ouid=106045309301998733331&rtpof=true&sd=true" className="resume">
          See my resume
        </a>
        <a href="https://www.credly.com/earner/earned/badge/04a52f8f-be9f-4f08-89ba-b3d24adde113" className="badge animate__rotateIn">
          <img src={badge} alt="badge" />
        </a>
      </div>
      <div className="carousel">
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=react" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">React</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=js" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">JavaScript</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=html" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">HTML</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=css" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">CSS</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=mysql" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">MySql</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=sequelize" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Sequelize</p>
        </div>
        <div className="skills">
          <img
            src="https://skillicons.dev/icons?i=mongodb"
            alt="skillicons" className="skillIcon"/> 
          <p className="skillName">MongoDB</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=nodejs" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Node</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=express" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Express</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=jquery" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">jQuery</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=bootstrap" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Bootstrap</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=regex" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Regex</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=git" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Git</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=github" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Github</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=heroku" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">Heroku</p>
        </div>
        <div className="skills">
          <img src="https://skillicons.dev/icons?i=vscode" alt="skillicons" className="skillIcon"/> 
          <p className="skillName">VS Code</p>
        </div>
      </div>
    </div>
  );
}
