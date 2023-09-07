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
} from "./ContactStyles";
import ButtonComponent from "../UI/buttonEmail/buttonEmail";

const SocialIcon = ({ href, icon, isGithub = false }) => {
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
      transition={{ duration: 0.1, ease: "easeInOut" }}
      style={{
        fontSize: "40px",
        fontWeight: "bold",
        color: isGithub ? "#ffffff" : "#97FEED",
        textAlign: "center",
        textDecoration: "none", // Agregar otros estilos si es necesario
        transition: "transform 0.1s", // Reducir la duración de la transición
      }}
      // Aplicar escala en hover
      whileHover={{ scale: 1.3 }}
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
        <ContactContainer>
          <SocialIcon
            href="https://twitter.com/Arielgarav?t=-nwmYYRkZZP7rK7knXtMoA&s=08"
            icon={<AiOutlineTwitter />}
          />
          <SocialIcon
            href="https://github.com/ArielGarav"
            icon={<AiOutlineGithub />}
            isGithub={true}
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
