import React from "react";
import Skill from "../Skill";
import "./skills.scss";
import { skillsArray } from "../../constants";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="skills">
      <h3 className="section_title">skills</h3>
      <p>
        I’m a developer with experience in different languages, frameworks and
        technologies and always looking for a new challenges to tackle.
      </p>
      <div className="skills_first">
        {skillsArray.map((skill, i) =>
          i < skillsArray.length - 3 ? (
            <Skill
              key={`skill ${i}`}
              name={skill[0] as string}
              image={skill[1] as JSX.Element}
            />
          ) : null
        )}
      </div>
      <div className="line_break" />
      <div className="skills_second">
        {skillsArray.map((skill, i) =>
          i >= skillsArray.length - 3 ? (
            <Skill
              key={`skill ${i}`}
              name={skill[0] as string}
              image={skill[1] as JSX.Element}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Skills;
