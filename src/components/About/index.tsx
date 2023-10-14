import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about_main">
        <div className="about_main_me">
          <div className="first">
            <h4 className="section_title">about me</h4>
            <p>
              I'm a creative and competent Front-End Web Developer offering 3+
              years of experience designing and developing multiple web-based
              applications and websites incorporating various technologies.
            </p>
          </div>
          <div className="second">
            <p>
              I aspire to combine my broad background with strong technical
              skills to excel as a Front-End Developer and hope to learn more
              from more experienced colleagues. I primarily focus on building
              clean, practical, and elegant code. Enjoy working closely with
              team members to ensure workloads are effectively redirected for
              better results.
            </p>
          </div>

          <a className="button button_dark" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="about_main_img" />
      </div>
    </div>
  );
};

export default About;
