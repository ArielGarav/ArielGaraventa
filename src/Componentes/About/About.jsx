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
          I am Ariel Garaventa, recently graduated from the Nucba Full Stack Web
          Development academy, 22 years old. My exciting journey in the world of
          programming began in the middle of the pandemic. What was initially a
          casual interest transformed into a passion for creating and solving
          technological challenges.
        </AboutParrafo>
        <AboutParrafo>
          My focus has been on building robust and user-friendly web
          applications. I have a strong foundation in React and Node.js,
          allowing me to develop dynamic and responsive front-end interfaces as
          well as server-side functionalities.
        </AboutParrafo>
        <AboutParrafo>
          For data storage, I often turn to MongoDB due to its flexibility, but
          I'm also familiar with MySQL for more structured data needs. My GitHub
          profile showcases a variety of projects that reflect my coding style
          and passion for creating impactful solutions.
        </AboutParrafo>
        <AboutParrafo>
          While JavaScript remains my go-to language, I'm also intrigued by
          UI/UX design and information architecture. When I'm not writing code,
          I enjoy exploring the latest trends in design and user experience,
          always aiming to improve the visual and interactive aspects of my
          projects.
        </AboutParrafo>
        <AboutParrafo>
          Although my professional experience is in its early stages, I'm eager
          to contribute my skills and dedication in a full-time role. Outside of
          coding, I enjoy troubleshooting PCs and mobile devices, playing
          volleyball, and spending quality time with friends.
        </AboutParrafo>
        <AboutParrafo>
          I'm open to new opportunities and challenges, and I'm confident that
          my drive to learn and grow will be an asset to any team. Thank you for
          considering me as a potential candidate!
        </AboutParrafo>
      </AboutContainer>
    </AboutTotalContainer>
  );
};

export default AboutMe;
