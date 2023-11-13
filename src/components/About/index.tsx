import React from "react";
import "./about.scss";
import { aboutMe } from "../../constants";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__main">
        <div className="about__main__me">
          <div className="first">
            <h4 className="section_title">about me</h4>
            <p>{aboutMe.first}</p>
          </div>
          <div className="second">
            <p>{aboutMe.second}</p>
          </div>

          <a className="button button__dark" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="about__main_img" />
      </div>
    </div>
  );
};

export default About;
