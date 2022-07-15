import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 50%;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        background-color: #000;
        color: #fff;
        overflow-x: hidden;
        
        /* font-family: 'Gloria Hallelujah', cursive; */
        /* font-family: 'Kalam', cursive; */
        /* font-family: 'Kaushan Script', cursive; */
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`;

export default GlobalStyles;
