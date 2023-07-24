import React from "react";
// import resume from "../assets/images/Resume.pdf";
import badge from "../../assets/badge/badge.png";
import 'animate.css'

export default function Resume() {
  return (
    <div>
      <h1 className="section-title" id="skills">
        Skills
      </h1>
      <div className="credentials">
        <div className="badge animate__rotateIn">
          <img src={badge} alt="badge" />
        </div>
      </div>
      <div className="skillIcons">
        {/* <a href={ resume } style={{ fontSize: 50 }} download>Download my resume</a> */}
        <p align="center">
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
