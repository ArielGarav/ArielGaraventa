import React from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ContainerTotal = styled.div`
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const TotalCardContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #97feed;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #97feed;
  }
`;

const CardSVG = styled.img`
  width: 100%;
  height: 100%;
  background-color: transparent;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  ${CardContainer}:hover & {
    transform: rotateX(0deg);
  }
`;

const CardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkIconCard = styled.a`
  color: black;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: black; /* Puedes cambiar el color al pasar el cursor si lo deseas */
  }
`;

const CardDescription = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
`;
const LanguagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;
const Languages = styled.p`
  color: black;
  font-size: 14px;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LanguagesImg = styled(motion.img)`
  width: 35px;
  height: 35px;
`;

const TextProyects = styled.h2`
  font-size: 50px;
`;
const ContainerTextProyects = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProyectsCards = () => {
  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <ContainerTotal>
        <ContainerTextProyects>
          <TextProyects>Proyects</TextProyects>
        </ContainerTextProyects>
        <TotalCardContainer
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <CardContainer>
            <CardSVG
              src="https://user-images.githubusercontent.com/103472285/183324364-cba4bb8d-5263-43c5-a01d-87ad87c7c24d.jpg"
              alt="Card Image"
            />
            <CardContent>
              <CardTitle>
                Bank Oink
                <LinkIconCard href="https://oinkbankapp.vercel.app/">
                  <FiArrowUpRight />
                </LinkIconCard>
              </CardTitle>

              <CardDescription>
                Página oficial de Bank Oink. Desarrollada junto con mi equipo y
                emprendimiento .
              </CardDescription>
              <LanguagesContainer>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452228/html-5.svg"
                    alt=""
                  />
                </Languages>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452185/css-3.svg"
                    alt=""
                  />
                </Languages>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452045/js.svg"
                    alt=""
                  />
                </Languages>
              </LanguagesContainer>
            </CardContent>
          </CardContainer>
          <CardContainer>
            <CardSVG
              src="https://proyecto-integrador-navy.vercel.app/assets/nav_logo/MANIAC-removebg-preview.png"
              alt="Card Image"
            />
            <CardContent>
              <CardTitle>
                Crazy Fishing
                <LinkIconCard href="https://proyecto-integrador-navy.vercel.app/">
                  <FiArrowUpRight />
                </LinkIconCard>
              </CardTitle>

              <CardDescription>
                Página oficial de Crazy Fishing. Desarrollada Por mi como
                entrega final del modulo Css
              </CardDescription>
              <LanguagesContainer>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452228/html-5.svg"
                    alt=""
                  />
                </Languages>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452185/css-3.svg"
                    alt=""
                  />
                </Languages>
              </LanguagesContainer>
            </CardContent>
          </CardContainer>
          <CardContainer>
            <CardSVG
              src="https://res.cloudinary.com/debcgjfr8/image/upload/v1686131091/Logo%20Styled%20Shoes/lcyezftq07oazsfbgwot.png"
              alt="image Styled Shoes"
            />
            <CardContent>
              <CardTitle>
                Styled Shoes
                <LinkIconCard href="https://integrador-react-olive.vercel.app/">
                  <FiArrowUpRight />
                </LinkIconCard>
              </CardTitle>

              <CardDescription>
                Página oficial de Styled Shoes. Desarrollada Por mi como entrega
                final del modulo React
              </CardDescription>
              <LanguagesContainer>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/303232/mongodb-logo.svg"
                    alt=""
                    style={{ background: "white", borderRadius: "50%" }}
                  />
                </Languages>
                <Languages>
                  <LanguagesImg
                    src="https://www.styled-components.com/atom.png"
                    alt=""
                  />
                </Languages>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                    alt=""
                    style={{ background: "black", borderRadius: "50%" }}
                  />
                </Languages>
              </LanguagesContainer>
            </CardContent>
          </CardContainer>
          <CardContainer>
            <CardSVG src="https://static.vecteezy.com/system/resources/previews/016/314/366/non_2x/language-translation-icon-free-png.png" />
            <CardContent>
              <CardTitle>
                Translate Api
                <LinkIconCard href="https://traductor-con-6mhcl5dtk-arielgarav.vercel.app">
                  <FiArrowUpRight />
                </LinkIconCard>
              </CardTitle>

              <CardDescription>
                Página oficial de Translate Api. Desarrollada Por mi como
                Practica de Api`S
              </CardDescription>
              <LanguagesContainer>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452228/html-5.svg"
                    alt=""
                  />
                </Languages>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452185/css-3.svg"
                    alt=""
                  />
                </Languages>
                <Languages>
                  <LanguagesImg
                    src="https://www.svgrepo.com/show/452045/js.svg"
                    alt=""
                  />
                </Languages>
              </LanguagesContainer>
            </CardContent>
          </CardContainer>
        </TotalCardContainer>
      </ContainerTotal>
    </>
  );
};

export default ProyectsCards;
