import React from "react";
import { Container, SectionTitle } from "../StyledComponents";
import { SkillsContainer } from "./styles";
import WorkContext from "../../ContextAPI";
import { useContext } from "react";
import { motion } from "framer-motion";
import { skillsAnimation, useScroll } from "../Animations";

function Skills() {
    const [element, animatonControls] = useScroll();
    const { skillsProvider } = useContext(WorkContext);
    return (
        <Container variants={skillsAnimation} ref={element} animate={animatonControls} initial="hidden" id="skills">
            <SectionTitle variants={skillsAnimation}>Skills</SectionTitle>
            <SkillsContainer>
                {skillsProvider.map((skill, i) => (
                    <motion.div variants={skillsAnimation} className="skill" key={`skill ${i}`}>
                        <img src={skill.img} alt={skill.name} />
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </SkillsContainer>
        </Container>
    );
}

export default Skills;
