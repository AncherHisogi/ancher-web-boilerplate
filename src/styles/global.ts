import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Crimson Text', serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        color: #333;
        background: #fff;
        scroll-behavior: smooth;
    }


    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    } 

    h1, h2, h3, h4, h5, span, p {
        margin: 0;
        padding: 0;
    }
`;
