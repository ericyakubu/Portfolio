import styled from "styled-components";
import { motion } from "framer-motion";

const slideBarWidth = 65;
const numberOfProjects = slideBarWidth / 2;

export const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
`;

export const Project = styled.div`
    display: flex;

    img {
        width: 95rem;
        /* max-width: 80vw; */
        height: 70rem;
        /* max-height: 70rem; */
        object-fit: cover;

        @media (max-width: 1440px) {
            width: 75rem;
            /* max-width: 50vw; */
            height: 56.25rem;
        }
        @media (max-width: 1024px) {
            max-width: 75vw;
            max-height: 40vh;
        }
        @media (max-width: 425px) {
            width: 50rem;
            max-width: 90vw;
            height: 36.25rem;
            max-height: 65.25vw;
        }
    }

    .project {
        width: 60rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-height: 100%;

        @media (max-width: 1440px) {
            width: 32.5vw;
        }
        @media (max-width: 1024px) {
            width: 70vw;
        }
        @media (max-width: 425px) {
            width: 90vw;
        }

        &Name {
            margin: 0 0 0 3rem;
            font-size: 5rem;
            text-transform: capitalize;

            ::after {
                content: "";
                display: block;
                width: 35rem;
                max-width: 55vw;
                height: 0.4rem;
                background-color: rgba(0, 0, 255, 0.5);
                box-shadow: 0px 0px 19px 1px rgba(0, 0, 255, 1);
            }

            @media (max-width: 1440px) {
                font-size: 4rem;

                ::after {
                    height: 0.2rem;
                    transform: translateX(-5%);
                    margin: 0 0 2rem;
                }
            }
            @media (max-width: 1024px) {
                margin: 0;
                font-size: 3rem;
            }
            @media (max-width: 425px) {
                font-size: 3rem;
            }
        }

        &Description {
            margin: 0 0 0 3rem;
            font-size: 2.5rem;
            height: 39.5rem;
            max-height: 39.5rem;
            overflow-y: auto;
            overflow-x: hidden;

            ::-webkit-scrollbar {
                width: 0.5rem;

                &-button {
                    display: none;
                }
                &-thumb {
                    background-color: rgba(255, 255, 255, 0.6);
                    border-radius: 0.4rem;
                }
                &-track {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 0.4rem;
                }
            }

            @media (max-width: 1440px) {
                font-size: 2.25rem;
                max-height: 19.5vh;
            }
            @media (max-width: 1024px) {
                margin: 0;
                font-size: 1.75rem;
                max-height: 12.5vh;
            }
            @media (max-width: 425px) {
                max-height: 25vh;
            }
        }

        &Bottom {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        &StackContainer {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            @media (max-width: 1024px) {
                font-size: 2rem;
                margin: 1rem 0 0;
            }
            @media (max-width: 425px) {
                width: 100vw;
                font-size: 2rem;
                /* margin: 1rem 0 0 0; */
            }
        }

        &Stack {
            font-size: 3rem;
            width: fit-content;
            position: relative;
            margin: 0 0 3rem;
            text-align: center;

            ::after {
                content: "";
                display: block;
                width: calc(100% + 6rem);
                height: 0.1rem;
                background-color: rgba(0, 0, 255, 0.5);
                box-shadow: 0px 0px 10px 1px rgba(0, 0, 255, 1);

                position: absolute;
                transform: translateX(-3rem);
            }

            @media (max-width: 1440px) {
                font-size: 2.25rem;
                margin: 0 0 1rem;
            }
            @media (max-width: 1024px) {
                font-size: 2rem;
            }
            @media (max-width: 425px) {
                font-size: 2rem;
            }
        }

        &Skills {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            position: relative;
            justify-content: center;
        }

        &Skill {
            padding: 1rem 2.5rem;
            border-radius: 2.5rem;
            margin: 1rem 1rem 0;
            line-height: 1;
            width: fit-content;
            font-size: 2rem;
            color: rgba(255, 255, 255, 1);
            background-color: grey;
            text-transform: capitalize;

            @media (max-width: 1440px) {
                padding: 0.75rem 2rem;
                font-size: 1.85rem;
            }
            @media (max-width: 1024px) {
                padding: 0.75rem 2rem;
                font-size: 1.5rem;
            }
            @media (max-width: 425px) {
                padding: 0.75rem 2rem;
                font-size: 1.5rem;
            }
        }

        &Links {
            display: flex;
            width: 100%;
            bottom: 0;
            align-self: center;
            justify-content: center;
            margin: 5rem 0 0;

            @media (max-width: 1024px) {
                margin: 2rem 0 0;
            }
            @media (max-width: 425px) {
                margin: 2rem 0 0;
            }
        }

        &Link {
            text-transform: uppercase;
            display: flex;
            font-size: 2rem;

            :first-child::after {
                content: "";
                display: block;
                margin: 0 3rem;
                height: calc(100% + 2rem);
                width: 0.2rem;
                transform: translateY(-1rem);
                background-color: rgba(0, 0, 255, 0.5);
                box-shadow: 0px 0px 10px 1px rgba(0, 0, 255, 1);
            }

            @media (max-width: 1024px) {
                font-size: 1.5rem;

                :first-child::after {
                    margin: 0 3rem;
                    height: calc(100% + 1rem);
                    width: 0.1rem;
                    transform: translateY(-0.5rem);
                }
            }
            @media (max-width: 425px) {
                font-size: 1.5rem;

                :first-child::after {
                    margin: 0 3rem;
                    height: calc(100% + 1rem);
                    width: 0.1rem;
                    transform: translateY(-0.5rem);
                }
            }
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 75vh;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 75vh;
    }
`;

export const SlideBar = styled.div`
    position: absolute;
    /* bottom: 15%; */
    bottom: 7%;
    width: ${`${slideBarWidth}vw`};
    height: 0.1rem;
    border-radius: 0.2rem;
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 10;

    transform: translate(0, -50%);

    @media (max-width: 1024px) {
        bottom: 5%;
    }
    @media (max-width: 425px) {
        bottom: 9%;
    }
`;
export const SlideBarThumb = styled.div`
    width: ${`${numberOfProjects}vw`};
    height: 100%;
    border-radius: 0.2rem;
    background-color: rgba(0, 0, 255, 0.7);
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;

    box-shadow: 0px 0px 19px 1.5px rgba(0, 0, 255, 1);
`;

export const Controls = styled.div`
    position: absolute;
    bottom: 7%;
    display: flex;
    justify-content: center;
    align-items: center;

    transform: translate(0, 55%);

    button {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background: none;
        border: none;
        font-size: 4.5rem;
        color: rgba(255, 255, 255, 0.5);

        transition: all 0.3s ease;

        :hover {
            cursor: pointer;
            color: rgba(0, 0, 255, 1);
        }

        :hover:last-child {
            transform: translateX(10%);
        }
        :hover:first-child {
            transform: translateX(-10%);
        }

        :not(:last-child) {
            margin-right: 70vw;
        }

        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1024px) {
        bottom: 5%;

        button {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            font-size: 3.5rem;

            :not(:last-child) {
                margin-right: 70vw;
            }
        }
    }
    @media (max-width: 425px) {
        bottom: 9%;
    }
`;
