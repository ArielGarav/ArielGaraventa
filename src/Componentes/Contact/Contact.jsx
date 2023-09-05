import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  TotalContactContainer,
  ContactContainer,
  CreateIdeasText,
  GetInTouchText,
  StyledHr,
} from "./ContactStyles";
import ButtonComponent from "../UI/buttonEmail/buttonEmail";

const SocialIcon = ({ href, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        fontSize: "40px",
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        textDecoration: "none", // Agregar otros estilos si es necesario
      }}
    >
      {icon}
    </motion.a>
  );
};

const Contact = () => {
  return (
    <>
      <TotalContactContainer>
        <GetInTouchText>Get in touch.</GetInTouchText>
        <CreateIdeasText>
          Let me create your ideas on a web page
        </CreateIdeasText>
        <ButtonComponent />
        <StyledHr />
        <ContactContainer>
          <SocialIcon
            href="https://twitter.com/Arielgarav?t=-nwmYYRkZZP7rK7knXtMoA&s=08"
            icon={<AiOutlineTwitter />}
          />
          <SocialIcon
            href="https://github.com/ArielGarav"
            icon={<AiOutlineGithub />}
          />

          <SocialIcon
            href="https://www.linkedin.com/in/ariel-garaventa-349361274/"
            icon={<AiOutlineLinkedin />}
          />
        </ContactContainer>
      </TotalContactContainer>
    </>
  );
};

export default Contact;
