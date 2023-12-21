import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LanguagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LanguagesImagesContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LanguagesImages = styled(motion.img)`
  width: 80px;
  height: 80px;
`;
const AnimatedH2 = styled(motion.h2)`
  font-size: 32px;
  text-align: center;
  padding-bottom: 40px;
  @media (max-width: 800px) {
    margin-top: 50px;
  }
  @media (max-width: 500px) {
    margin-top: 150px;
  }
`;
const Languages = () => {
  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <>
      <AnimatedH2>My Tech-Stack</AnimatedH2>
      <LanguagesContainer>
        <LanguagesImagesContainer
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 1, type: "spring", stiffness: 40 }}
        >
          <LanguagesImages
            src="https://www.svgrepo.com/show/452228/html-5.svg"
            alt="Logo HTML5"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 40 }}
            whileHover={{ scale: 1.3 }}
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/452185/css-3.svg"
            whileHover={{ scale: 1.3 }}
            alt="Logo CSS"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/452045/js.svg"
            whileHover={{ scale: 1.3 }}
            alt="Logo JavaScript"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/374146/typescript-official.svg"
            whileHover={{ scale: 1.3 }}
            alt="Logo Typescript"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
            whileHover={{ scale: 1.3 }}
            alt="Logo React"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/376337/node-js.svg"
            whileHover={{ scale: 1.3 }}
            style={{ background: "white", borderRadius: "50%" }}
            alt="Logo Node JS"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/303232/mongodb-logo.svg"
            whileHover={{ scale: 1.3 }}
            style={{
              background: "white",
              borderRadius: "50%",
              padding: "4px",
            }}
            alt="Logo Mongo DB"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
            whileHover={{ scale: 1.3 }}
            style={{ background: "white", borderRadius: "50%" }}
            alt="Logo My SQL"
          />
          <LanguagesImages
            src="https://res.cloudinary.com/debcgjfr8/image/upload/f_auto,q_auto/v1/PortFolio/Languages/vmqkb4orpdskduw3krhk"
            whileHover={{ scale: 1.3 }}
            alt="Logo Styled Components"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/452136/wordpress.svg"
            whileHover={{ scale: 1.3 }}
            alt="Logo Wordpress"
          />
          <LanguagesImages
            src="https://www.svgrepo.com/show/506497/github.svg"
            whileHover={{ scale: 1.3 }}
            style={{ background: "white", borderRadius: "50%" }}
            alt="Logo Github"
          />
        </LanguagesImagesContainer>
      </LanguagesContainer>
    </>
  );
};

export default Languages;
