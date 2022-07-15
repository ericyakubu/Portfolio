import styled from "styled-components";

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    top: 50%;
    left: 4%;
    transform: translate(-50%, -50%);

    height: 90vh;
    width: 0.05rem;

    background-color: rgba(255, 255, 255, 0.2);
    z-index: 11;

    @media (max-width: 425px) {
        display: none;
    }
`;
export const Bullet = styled.div`
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
`;
export const NavLink = styled.a`
    font-size: 1.75rem;
    transition: all 1s ease;
    display: flex;
    align-items: center;

    .bullet {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 1);
    }

    .linkInfo {
        display: flex;
        align-items: center;
        position: absolute;

        transform: translateX(2.5rem);

        h2 {
            transition: all 0.5s ease;
            &:nth-child(2) {
                margin-left: 5rem;
                color: rgba(255, 255, 255, 0);
            }
        }

        :hover {
            h2 {
                transform: translateX(-7.5rem);

                &:nth-child(2) {
                    margin-left: 5rem;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }

    @media (max-width: 1024px) {
        font-size: 1.15rem;

        .bullet {
            width: 0.5rem;
            height: 0.5rem;
        }

        .linkInfo {
            display: flex;
            align-items: center;
            position: absolute;

            transform: translateX(2.5rem);

            h2 {
                transition: all 0.5s ease;
                &:nth-child(2) {
                    margin-left: 5rem;
                    color: rgba(255, 255, 255, 0);
                }
            }

            :hover {
                h2 {
                    transform: translateX(-6.5rem);

                    &:nth-child(2) {
                        margin-left: 4rem;
                        color: rgba(255, 255, 255, 1);
                    }
                }
            }
        }
    }
`;
