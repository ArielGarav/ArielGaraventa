import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Bebas Neue', sans-serif;    font-weight: 400;
    line-height: 32px;
  }
  
  body {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    line-height: 32px;
    color: #97FEED;
    width: 100%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/debcgjfr8/image/upload/v1693457262/PortFolio/BackGrounds/wssnui19tgbacluejzhd.svg');
    background-size: cover;
    background-repeat: no-repeat;
     }

`;
export default GlobalStyle;
