import React from "react";
import "./project.scss";

interface Props {
  project: {
    name: string;
    discription: string;
    stack: string[];
    link: string;
    git: string;
    img: string;
  };
}

const Project: React.FC<Props> = ({ project }) => {
  // console.log(project.stack);
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
          <a className="project_link" href={project.git} target="_blank">
            github.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
