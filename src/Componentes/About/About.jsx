import React from "react";
import {
  AboutParrafo,
  AboutTitle,
  AboutContainer,
  AboutTotalContainer,
} from "./AboutStyles";

const AboutMe = () => {
  return (
    <AboutTotalContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutContainer>
        <AboutParrafo>
          I'm Ariel Garaventa, a 23-year-old Full Stack Web Developer with a year of experience in building dynamic and responsive web applications. I specialize in React, Node.js, and MongoDB, and have extensive experience with WordPress and WooCommerce for creating and optimizing e-commerce platforms. Recently, I earned the Microsoft Certified: Azure Fundamentals (AZ-900) certification, expanding my expertise into cloud computing.
        </AboutParrafo>
        <AboutParrafo>
          I am available for full-time work and eager to learn, with no issues in training for any areas where I need improvement. My goal is to continue growing professionally in the tech field, contributing to innovative projects while deepening my skills in cloud infrastructure, web development, and e-commerce solutions. I’m passionate about learning, solving problems, and constantly evolving to meet new challenges.
        </AboutParrafo>
      </AboutContainer>
    </AboutTotalContainer>
  );
};

export default AboutMe;
