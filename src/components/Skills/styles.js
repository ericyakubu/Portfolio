import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    grid-row-gap: 15rem;
    grid-column-gap: 2rem;
    width: 80vw;

    .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        img {
            width: 17.5vw;
            max-width: 150px;
        }

        p {
            position: absolute;
            width: fit-content;
            text-align: center;
            bottom: -1.5rem;
            font-size: 4rem;
            transform: translateY(100%);
        }
    }

    @media (max-width: 1440px) {
        grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
        width: 80vw;
        grid-row-gap: 10rem;
        grid-column-gap: 0;

        .skill {
            img {
                width: 17.5vw;
                max-width: 125px;
            }
            p {
                font-size: 2.5rem;
            }
        }
    }
    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
        width: 80vw;
        grid-row-gap: 7.5rem;
        grid-column-gap: 0;

        .skill {
            img {
                width: 17.5vw;
                max-width: 100px;
            }
            p {
                font-size: 2rem;
            }
        }
    }
    @media (max-width: 425px) {
        width: 100vw;

        .skill {
            img {
                width: 17.5vw;
                max-width: 150px;
            }
        }
    }
`;
