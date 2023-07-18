import React from "react";
// import resume from "../assets/images/Resume.pdf";

export default function Resume() {
  return (
    <div>
      <div className="row resume text-center">
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
