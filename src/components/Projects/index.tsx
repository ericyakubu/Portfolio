import React from "react";
import Project from "../Project";
import "./projects.scss";
import { projects } from "../../constants";

const Projects: React.FC = () => {
  return (
    <div id="projects" className="projects">
      <h3 className="section_title">Projects</h3>
      <p className="projects_p">
        A small gallery of recent projects chosen by me.
      </p>

      <div className="projects_main">
        {projects.map((p, i) => (
          <Project project={p} key={`project ${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
