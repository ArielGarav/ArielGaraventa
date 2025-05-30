import {
  AboutParrafo,
  AboutTitle,
  AboutContainer,
  AboutTotalContainer,
} from "./AboutStyles";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const AboutMe = () => {
  return (
    <AboutTotalContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AboutParrafo as={motion.p} variants={paragraphVariants}>
          Tech professional with hands-on experience in IT Support, Cloud
          Administration, and Web Development. I&apos;ve worked in corporate
          environments managing Microsoft 365, Entra ID (formerly Azure AD),
          MFA, and user access for distributed teams, while also supporting
          infrastructure across multiple sites.
        </AboutParrafo>
        <AboutParrafo as={motion.p} variants={paragraphVariants}>
          With a strong foundation in Full Stack Web Development (MERN), I bring
          a versatile skill set that bridges systems and applications. I&apos;m
          certified in Microsoft Azure Fundamentals (AZ-900) and passionate
          about growing into cloud and cybersecurity roles.
        </AboutParrafo>
        <AboutParrafo as={motion.p} variants={paragraphVariants}>
          I thrive in dynamic environments, solving technical challenges,
          documenting infrastructure, and helping teams run efficiently.
          Currently, I&apos;m looking for new full-time opportunities to
          continue building my career in Cloud Infrastructure, SysAdmin, or IT
          Operations—while always learning and pushing myself forward.
        </AboutParrafo>
      </AboutContainer>
    </AboutTotalContainer>
  );
};

export default AboutMe;
