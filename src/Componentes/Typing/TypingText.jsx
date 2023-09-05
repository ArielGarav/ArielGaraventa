import React from "react";
import TypingComponent from "./TypingComponent/TypingComponent";
import { TypingContainer, TypingTextTitle } from "./TypingTextStyled";
import styled from "styled-components";

import { motion } from "framer-motion";

const AnimatedHeading = styled(motion.h1)`
  text-align: center;
  margin-top: 20px;
  color: white; /* Add your desired text color */
`;

const headingVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const scaledSpanStyle = {
  fontWeight: "600",
  display: "inline-block",
  transition: "transform 0.3s ease-in-out", // Add a smooth transition
  color: "white", // Text color
  // Background color
};

const TypingText = () => {
  return (
    <>
      <AnimatedHeading
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        Hey there,{" "}
        <motion.span
          style={scaledSpanStyle}
          whileHover={{ scale: 1.1 }} // Efecto de escala al hacer hover
        >
          I'm Ariel
        </motion.span>
      </AnimatedHeading>
      <TypingContainer>
        <TypingTextTitle>
          I'm a passionate developer <TypingComponent />
          who excels at crafting exceptional products with cutting-edge
          technology.
        </TypingTextTitle>
      </TypingContainer>
    </>
  );
};

export default TypingText;
