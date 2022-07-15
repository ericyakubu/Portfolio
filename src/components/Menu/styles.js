import styled from "styled-components";

export const MenuBtnContainer = styled.div`
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 101;

    .menuBtn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transition: all 0.3s ease;
        /* border: 1px solid white; */

        :hover {
            box-shadow: 0 0px 5px blue;
        }
    }

    .menuBtn.open {
        .menuBtnBurger {
            transform: translateX(-100%);
            background: none;
            box-shadow: none;

            :before {
                transform: translate(100%, 0px) rotate(45deg);
            }
            :after {
                transform: translate(100%, 0px) rotate(-45deg);
            }
        }
    }

    .menuBtnBurger {
        width: 25px;
        height: 2px;
        background: white;
        border-radius: 5px;
        /* box-shadow: 0 2px 5px orange; */
        transition: all 0.5s ease;

        :before,
        :after {
            content: "";
            position: absolute;
            width: 25px;
            height: 2px;
            background: white;
            border-radius: 5px;
            /* box-shadow: 0 2px 5px rgba(255, 0, 0, 0.4); */
            transition: all 0.5s ease;
        }

        :before {
            transform: translateY(-8px);
        }
        :after {
            transform: translateY(8px);
        }
    }
`;

export const MenuContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.75s ease;

    div {
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        a {
            font-size: 5rem;
            display: flex;
            align-items: center;
            transition: all 0.5s ease;

            :after,
            :before {
                content: "";
                display: block;
                width: 3rem;
                height: 2px;
                background-color: blue;
                transition: all 0.5s ease;
                opacity: 0;
            }
            :after {
                margin: 0 0 0 5.5rem;
            }
            :before {
                margin: 0 5.5rem 0 0;
            }

            :hover {
                color: rgba(0, 0, 255, 1);
                :after {
                    margin: 0 0 0 1.5rem;
                    opacity: 1;
                }
                :before {
                    margin: 0 1.5rem 0 0;
                    opacity: 1;
                }
            }
        }
    }
`;
