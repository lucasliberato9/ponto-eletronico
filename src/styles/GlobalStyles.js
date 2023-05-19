import { createGlobalStyle } from "styled-components";
import LatoRegular from "../fonts/LatoRegular.ttf"
import LatoBold from "../fonts/LatoBold.ttf"
import LatoBlack from "../fonts/LatoBlack.ttf"

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'latoRegular';
        src: url(${LatoRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;   
    }
    @font-face {
        font-family: 'latoBold';
        src: url(${LatoBold}) format('truetype');
        font-weight: normal;
        font-style: normal;   
    }
    @font-face {
        font-family: 'latoBlack';
        src: url(${LatoBlack}) format('truetype');
        font-weight: normal;
        font-style: normal;   
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'latoRegular', sans-serif;
        font-size: 1.4rem;
    
        background: #0E0707;
        color: #D9D9D9;
    
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    html,
    body,
    #root {
        height: 100%;
    }
    html {
        scroll-behavior: smooth;
        @media (prefers-reduced-motion: reduce) {
            scroll-behavior:auto;
        }
    }
`;

export default GlobalStyles;