import React from "react";
import github from "../../assets/contact/github.png";
import linkedin from "../../assets/contact/linkedin.png";
import insta from "../../assets/contact/instagram.png";
import email from "../../assets/contact/email.png";

export default function Contact() {
  return (
    <div>
      <h1 id="contact" className="section-title">
        Contact Me
      </h1>
        <div className="social">
          <a href="https://github.com/jrob02180">
            <img src={github} alt="github" />
          </a>

          <a href="https://www.linkedin.com/in/jen-roberson-060417276/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/jrob02180">
            <img src={insta} alt="instagram" />
          </a>
          <a href="mailto:jrob02180@gmail.com">
            <img src={email} alt="email" />
          </a>
        </div>
    </div>
  );
}
