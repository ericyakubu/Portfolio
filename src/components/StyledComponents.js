import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SectionTitle = styled(motion.h1)`
    position: absolute;
    left: 15%;
    top: 10%;
    color: rgba(255, 255, 255, 1);
    font-size: 6.5rem;
    font-weight: 900;

    &::after {
        content: "";
        display: block;
        width: 55rem;
        max-width: 75vw;
        transform: translateX(-5%);
        height: 0.3rem;
        border-radius: 0.25rem;
        margin-top: 0.5rem;

        background-color: rgba(0, 0, 255, 0.5);
        box-shadow: 0px 0px 19px 1px rgba(0, 0, 255, 1);
    }

    @media (max-width: 1024px) {
        left: 15%;
        top: 3%;
        font-size: 5rem;
    }
    @media (max-width: 425px) {
        left: 10%;
    }
`;
