import React from "react";
import "./project.scss";
import { Projects } from "../../types";

interface Props {
  project: Projects;
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className="project">
      <img className="project_img" src={project.img} alt={project.name} />
      <div className="project_main">
        <h3>{project.name}</h3>
        <p className="project_discr">
          {project.discription}
          <br />
          <br />
          Stack: {project.stack.join(", ")}
        </p>
        <div className="project_links">
          <a className="project_link" href={project.link} target="_blank">
            link.
          </a>
          {project.git.length > 1 ? (
            project.git.map((proj, i) => (
              <a className="project_link" key={i} href={proj} target="_blank">
                {i === 0 ? "frontend." : "backend."}
              </a>
            ))
          ) : (
            <a className="project_link" href={project.git[0]} target="_blank">
              github.
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
