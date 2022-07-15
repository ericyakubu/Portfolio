import React from "react";
import { Container } from "../StyledComponents";
import { HomeContainer } from "./styles";
import { motion } from "framer-motion";
import { homeAnimation, useScroll } from "../Animations";

function Home() {
    const [element, animatonControls] = useScroll();
    return (
        <Container id="home">
            <HomeContainer variants={homeAnimation} ref={element} animate={animatonControls} initial="hidden">
                <motion.img variants={homeAnimation} src="./img/rick.webp" alt="rick" />
                <motion.p variants={homeAnimation} id="name">
                    Eric Yakubu
                </motion.p>
                <motion.p variants={homeAnimation} id="job">
                    Junior Front-End Web Developer
                </motion.p>
            </HomeContainer>
        </Container>
    );
}

export default Home;
