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
import { socialLinks } from "../UI/SocialLinks/socialLinks";
import { useLocation } from "react-router-dom";

const SocialIcon = ({ href, icon, isGithub = false, alt = "" }) => {
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
        textDecoration: "none",
        transition: "transform 0.1s",
      }}
      whileHover={{ scale: 1.3 }}
    >
      {isGithub ? <img src={icon} alt={alt} /> : icon}
    </motion.a>
  );
};

const Contact = () => {
  const location = useLocation();

  const isContactRoute = location.pathname === "/Contact";

  return (
    <>
      <TotalContactContainer
        style={{ height: isContactRoute ? "70vh" : "40vh" }}
      >
        <GetInTouchText>Get in touch.</GetInTouchText>
        <CreateIdeasText>
          Let me create your ideas on a web page
        </CreateIdeasText>
        <ButtonComponent />
        <ContactContainer>
          <SocialIcon
            href={socialLinks.Twitter}
            alt="Twitter"
            icon={<AiOutlineTwitter />}
          />
          <SocialIcon
            href={socialLinks.Github}
            icon={<AiOutlineGithub />}
            isGithub={true}
            alt="GitHub"
          />
          <SocialIcon
            href={socialLinks.Linkedin}
            icon={<AiOutlineLinkedin />}
            alt="LinkedIn"
          />
        </ContactContainer>
      </TotalContactContainer>
    </>
  );
};

export default Contact;
