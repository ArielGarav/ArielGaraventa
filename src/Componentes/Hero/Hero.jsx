import styled from "styled-components";
import ProfileImage from "../ProfileImage/ProfileImage";
import TypingComponent from "../Typing/TypingComponent/TypingComponent";
import { keyframes } from "styled-components";
import Languages from "../Languages/Languages";
import { socialLinks } from "../UI/SocialLinks/socialLinks";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4rem;
  flex-wrap: wrap;
  height: 90vh;
`;

const HeroPic = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #5a988e;
  box-shadow: 5px 7px 25px rgba(0, 0, 0, 5);
  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
  }
`;
const ContainerTypComponent = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 20px;
    color: white;
  }
`;

const HeroText = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 20px;
    color: white;
  }
  @media (max-width: 500px) {
    width: 100%;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 16px;
      text-align: center;
    }
    padding: 7px;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  height: 70px;
  width: 270px;
  gap: 15px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
const SocialLinksWrapper = styled.div`
  display: flex;
  width: 380px;
  gap: 15px;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
    padding-top: 100px;
  }
`;
const bounceAnimation = keyframes`
  40% {
    transform: scale(1.4);
  }
  60% {
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const SocialLinkBase = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-size: 28px;
  text-decoration: none;
  transition: 0.25s;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    animation: ${bounceAnimation} 0.8s linear;
  }
`;

const SocialLink1 = styled(SocialLinkBase)`
  background-color: #1a1e22;
  color: whitesmoke;
`;

const SocialLink2 = styled(SocialLinkBase)`
  background-color: #0a66c2;
  color: whitesmoke;
`;

const SvgWrapper = styled.div`
  position: relative;
  width: 190px;
  height: 60px;
  text-align: center;
  cursor: pointer;

  transition: 1s;

  &:hover {
    background-color: transparent;
  }
`;

const Shape = styled.svg`
  stroke-dasharray: 100 300;
  stroke-dashoffset: -297;
  fill: transparent;
  stroke: #97feed;
  stroke-width: 5px;
  transition:
    stroke-width 1s,
    stroke-dashoffset 1s,
    stroke-dasharray 1s;

  ${SvgWrapper}:hover & {
    stroke-width: 2px;
    stroke-dashoffset: 0;
    stroke-dasharray: 760;
  }
`;

const Text = styled.div`
  font-size: 22px;
  top: -52px;
  position: relative;
  font-weight: 600;
  color: white;
`;
const Hero = () => {
  return (
    <>
      <Container>
        <HeroPic>
          <ProfileImage />
        </HeroPic>
        <HeroText>
          <ContainerTypComponent>
            <p>Hi I&apos;m Web Developer</p>
            <TypingComponent />
          </ContainerTypComponent>

          <h1>Ariel Garaventa</h1>
          <p>
            Creator and builder of Solutions, navigating the waters of Web
            Technologies.
          </p>
          <ButtonGroup>
            <a href={socialLinks.Cv} target="_blank" rel="noopener noreferrer">
              <SvgWrapper>
                <Shape height="60" width="190">
                  <rect height="60" width="190"></rect>
                </Shape>
                <Text>Download CV</Text>
              </SvgWrapper>
            </a>
            <Link to="/Contact">
              <SvgWrapper>
                <Shape height="60" width="190">
                  <rect height="60" width="190"></rect>
                </Shape>
                <Text>Contact</Text>
              </SvgWrapper>
            </Link>
          </ButtonGroup>
          <SocialLinksWrapper>
            <SocialLink1
              href={socialLinks.Github}
              target="_blank"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                height="1em"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </SocialLink1>
            <SocialLink2
              href={socialLinks.Linkedin}
              target="_blank"
              aria-label="Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="#fff"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </SocialLink2>
          </SocialLinksWrapper>
        </HeroText>
      </Container>
      <Languages />
    </>
  );
};

export default Hero;
