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
      <div className="skillIcons">
        <p>
          {/* <a href=""> */}
          <img
            src="https://skillicons.dev/icons?i=git,react,js,html,css,bootstrap,github,heroku,express,nodejs,mongodb,mysql,sequelize,jquery,regex,vscode, "
            alt="skillicons"
          />
          {/* </a> */}
        </p>
      </div>
    </div>
  );
}
