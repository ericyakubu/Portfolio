import React, { useEffect, useState, useRef } from "react";
import { Container, SectionTitle } from "../StyledComponents";
import { Project, ProjectsContainer, SlideBar, SlideBarThumb, Controls } from "./styles";
import WorkContext from "../../ContextAPI";
import { useContext } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { motion } from "framer-motion";
import { homeAnimation, useScroll } from "../Animations";

function Projects() {
    const [element, animatonControls] = useScroll();
    const { worksProvider } = useContext(WorkContext);

    const projects = useRef([]);
    const thumb = useRef();
    const [activeProject, setActiveProject] = useState(0);
    let initial = true;

    const addProject = (e) => {
        if (e && !projects.current.includes(e)) {
            projects.current.push(e);
        }
    };
    const nextProject = () => {
        activeProject < projects.current.length - 1 ? setActiveProject(() => activeProject + 1) : setActiveProject(0);
        console.log(activeProject);
    };
    const prevProject = () => {
        activeProject === 0 ? setActiveProject(projects.current.length - 1) : setActiveProject(() => activeProject - 1);
        console.log(activeProject);
    };

    useEffect(() => {
        if (initial) {
            projects.current.map((project, i) => {
                i !== activeProject ? (project.style.display = "none") : (project.style.display = "flex");
            });
            initial = false;
        }
        thumb.current.style.transform = `translateX(${100 * activeProject}%)`;
    }, [projects, activeProject]);

    return (
        <Container variants={homeAnimation} ref={element} animate={animatonControls} initial="hidden" id="projects">
            <SectionTitle variants={homeAnimation}>Projects</SectionTitle>
            <ProjectsContainer>
                {worksProvider.map((work, i) => (
                    <Project ref={addProject} key={`project ${i}`}>
                        <motion.img variants={homeAnimation} src={work.img} alt={work.img} />
                        <motion.div variants={homeAnimation} className="project">
                            <motion.p variants={homeAnimation} className="projectName">
                                {work.name}
                            </motion.p>
                            <motion.p variants={homeAnimation} className="projectDescription">
                                {work.description}
                            </motion.p>
                            <div className="projectBottom">
                                <div className="projectStackContainer">
                                    <motion.p variants={homeAnimation} className="projectStack">
                                        Stack
                                    </motion.p>
                                    <motion.div variants={homeAnimation} className="projectSkills">
                                        {work.stack.map((skill, i) => (
                                            <div className="projectSkill" key={`${work.name} skill ${skill} ${i}`}>
                                                {skill}
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                <div className="projectLinks">
                                    <a href="#" className="projectLink">
                                        {work.webLink}
                                    </a>
                                    <a href="#" className="projectLink">
                                        {work.gitLink}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </Project>
                ))}
            </ProjectsContainer>
            <SlideBar>
                <SlideBarThumb ref={thumb} />
            </SlideBar>
            <Controls>
                <button onClick={prevProject}>
                    <BsArrowLeftShort />
                </button>
                <button onClick={nextProject}>
                    <BsArrowRightShort />
                </button>
            </Controls>
        </Container>
    );
}

export default Projects;
