import React from "react";
import "./about.scss";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about_main">
                <div className="about_main_me">
                    <div className="first">
                        <h3 className="section_title">about me</h3>
                        {/* <h3>about me</h3> */}
                        <p>I'm creative and competent Front-End Web Developer offering 3+ years of experience in designing and developing multiple web-based applications and websites incorporating a range of technologies.</p>
                    </div>
                    <div className="second">
                        <p>
                            Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer and hoping to learn more from more experienced colleagues. I primarily focus on building clean, effective and
                            elegant code. Enjoy working closely with team members to ensure workloads are effectively redirected.
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