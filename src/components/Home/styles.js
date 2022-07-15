import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 45rem;
        height: 45rem;
        max-width: 75vw;
        max-height: 75vw;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.5);
    }

    p {
        margin-top: 4rem;
        font-size: 8rem;

        :last-child {
            margin-top: 2rem;
            font-size: 3rem;
            color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 425px) {
            font-size: 5rem;

            :last-child {
                font-size: 2rem;
            }
        }
    }
`;
