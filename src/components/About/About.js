import React from "react";
import { Container, SectionTitle } from "../StyledComponents";
import { AboutContainer } from "./styles";
import { motion } from "framer-motion";
import { homeAnimation, useScroll } from "../Animations";

function About() {
    const [element, animatonControls] = useScroll();
    return (
        <Container variants={homeAnimation} ref={element} animate={animatonControls} initial="hidden" id="about">
            <SectionTitle variants={homeAnimation}>About</SectionTitle>
            <AboutContainer variants={homeAnimation}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </AboutContainer>
        </Container>
    );
}

export default About;
