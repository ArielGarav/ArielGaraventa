import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.51 "Rubik";
  font-size: 100%;
  line-height: 19.2px;
  --background-color-rgba: 30, 32, 44;
  --background-shadow-rgba: 0, 0, 0;
  --white-rgba: 255, 255, 255;
  --black-rgba: 0, 0, 0;
  --tooltip-color-rgba: 30, 32, 44;
  --background-color: #1e202c !important;
  --background-hover: #000000 !important;
  --primary-color: #bb86fc !important;
  --secondary-color: #03dac6 !important;
  --on-primary: #000000 !important;
  --on-secondary: #000000 !important;
  --on-background: #ffffff !important;
  --text: #2c3e50 !important;
  --text-light: #b6b6b6 !important;
  --text-lighter: #b8cdd1 !important;
  --white: #ffffff !important;
  --black: #000000 !important;
  --yellow: #ffc800 !important;
  --orange: #f4615a !important;
  --blue: #24b4fb !important;
  --green: #44e3bb !important;
  --purple: #8e58b8 !important;
  --bl-color1: #b290fc;
  --bl-color2: #ececec;
  --bl-color3: #f1fa8c;
  --bl-color4: #ff79c6;
  --bl-color5: #ffb86c;
  --bl-color6: #f99393;
  --bl-color7: #ececec;
  --bl-color-faded: #605c7b;
  font-family: "Rubik";
  word-wrap: break-word;
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt";
  box-sizing: inherit;
  background-color: transparent;
  outline-width: 0;
  text-decoration: underline;
  border: 1px solid rgb(233, 237, 239);
  padding: 1em;
  font-weight: normal;
  color: rgb(233, 237, 239);
`;

const ButtonComponent = () => {
  const email = "arielgaraventa5@gmail.com";

  return (
    <StyledButton href={`mailto:${email}`}>
      <span>Send an Email</span>
    </StyledButton>
  );
};

export default ButtonComponent;
