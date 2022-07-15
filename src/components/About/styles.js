import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        width: 40%;
        font-size: 3rem;
        text-align: center;
        line-height: 1.5;
    }

    @media (max-width: 1024px) {
        p {
            width: 65%;
            font-size: 2.25rem;
            text-align: center;
            line-height: 1.5;
        }
    }
    @media (max-width: 425px) {
        p {
            width: 75%;
        }
    }
`;
