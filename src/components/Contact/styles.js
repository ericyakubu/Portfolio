import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    padding-top: 10vh;
    justify-content: space-between;

    @media (max-width: 1024px) {
        padding: 0;
    }
    @media (max-width: 425px) {
        padding: 0;
    }
`;

export const ContactInfo = styled(motion.div)`
    display: flex;
    width: 100%;
    bottom: 0;
    align-self: center;
    justify-content: center;
    margin: 6rem 0 3rem;
`;

export const ContactOption = styled(motion.a)`
    text-transform: uppercase;
    display: flex;
    font-size: 2rem;

    :not(:last-child)::after {
        content: "";
        display: block;
        margin: 0 3rem;
        height: calc(100% + 2rem);
        width: 0.2rem;
        transform: translateY(-1rem);
        background-color: rgba(0, 0, 255, 0.5);
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 255, 1);
    }

    @media (max-width: 425px) {
        font-size: 1.4rem;

        :not(:last-child)::after {
            content: "";
            margin: 0 1rem;
            height: calc(100% + 2rem);
            width: 0.1rem;
            transform: translateY(-1rem);
        }
    }
`;

export const ContactForm = styled(motion.form)`
    position: relative;
    width: 150%;
    max-width: 90vw;

    ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 1);
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    .formInput {
        &Small {
            width: 35%;
        }

        &Big,
        &Message {
            width: 100%;
        }
        &Big {
            margin: 5rem 0;
        }

        &Small,
        &Big {
            text-align: center;
            padding-bottom: 0.75rem;
            input {
                width: 100%;
                text-align: center;
                margin-bottom: 1rem;
            }
        }

        &Small,
        &Big,
        &Message {
            input,
            textarea {
                position: relative;
                background: none;
                border: none;
                color: rgba(255, 255, 255, 1);
                font-size: 2rem;

                :focus {
                    outline: none;
                }
            }

            display: flex;
            flex-direction: column;
            align-items: center;

            ::after {
                content: "";
                display: block;
                width: 100%;
                height: 0.1rem;
                background-color: rgba(0, 0, 255, 0.5);
                box-shadow: 0px 0px 19px 1px rgba(0, 0, 255, 1);
            }
        }

        &Message {
            text-align: left;

            textarea {
                width: 100%;
            }
        }
    }

    button {
        display: flex;
        font-size: 2rem;
        padding: 1rem 2rem;
        background-color: rgba(0, 0, 255, 1);
        border: none;
        border-radius: 0.5rem;
        color: rgba(255, 255, 255, 1);
        /* margin-top: 2.5rem;
        margin-left: 86.5%; */

        margin: 2.5rem 0 0 86.5%;
        transition: all 0.2s ease;

        svg {
            margin-left: 1rem;
            transition: all 0.2s ease;
        }

        &:hover {
            cursor: pointer;

            svg {
                margin-left: 3rem;
            }
        }
    }

    @media (max-width: 1024px) {
        max-width: 70vw;
        button {
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            margin: 2.5rem 0 0 83.5%;
        }
    }

    @media (max-width: 425px) {
        .formInput {
            &Small {
                width: 48%;
            }

            &Small,
            &Big,
            &Message {
                input,
                textarea {
                    font-size: 1.75rem;
                }

                ::after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 0.1rem;
                    background-color: rgba(0, 0, 255, 1);
                }
            }
        }

        button {
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            margin: 2.5rem 0 0 70%;
        }
    }
`;

export const ContactEmail = styled(motion.p)`
    font-size: 3rem;
    width: fit-content;
    position: relative;
    margin-top: 3rem;
    text-align: center;

    ::after {
        content: "";
        display: block;
        width: calc(100% + 6rem);
        height: 0.1rem;
        background-color: rgba(0, 0, 255, 0.75);
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 255, 1);

        position: absolute;
        transform: translateX(-3rem);
    }

    @media (max-width: 425px) {
        font-size: 2rem;
    }
`;
