import React from "react";
import Skill from "../../components/Skill/Skill";
import "./skills.scss";

import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript, SiNodedotjs, SiReact, SiSass, SiMaterialui, SiBootstrap, SiAdobephotoshop, SiAdobexd, SiFigma, SiRedux } from "react-icons/si";

const skillsArray: (string | JSX.Element)[][] = [
  ["HTML 5", <AiFillHtml5 />],
  ["CSS 3", <SiCss3 />],
  ["JavaScript", <SiJavascript />],
  ["NodeJS", <SiNodedotjs />],
  ["React", <SiReact />],
  ["Redux Toolkit", <SiRedux />],
  ["SCSS", <SiSass />],
  ["Material UI", <SiMaterialui />],
  ["Bootstrap", <SiBootstrap />],
  ["Photoshop", <SiAdobephotoshop />],
  ["Adobe XD", <SiAdobexd />],
  ["Figma", <SiFigma />],
];

const Skills: React.FC = () => {
  return (
    <div id="skills" className="skills">
      <h3 className="section_title">skills</h3>
      <p>I’m a developer with experience in different languages, frameworks and technologies. I’m always looking for a new challenges to tackle.</p>
      <div className="skills_first">
        {skillsArray.map((skill, i) => (
          <>{i < skillsArray.length - 3 ? <Skill key={`skill ${i}`} name={skill[0] as string} image={skill[1] as JSX.Element} /> : null}</>
        ))}
      </div>
      <div className="line_break" />
      <div className="skills_second">
        {skillsArray.map((skill, i) => (
          <>{i >= skillsArray.length - 3 ? <Skill key={`skill ${i}`} name={skill[0] as string} image={skill[1] as JSX.Element} /> : null}</>
        ))}
      </div>
    </div>
  );
};

export default Skills;
