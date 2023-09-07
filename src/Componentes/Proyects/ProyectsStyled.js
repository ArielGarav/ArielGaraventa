import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 5px;
  @media (max-width: 640px) {
    margin-top: 60px;
  }
`;
export const TitleProyects = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2rem;
`;
export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const CardLink = styled.a`
  text-decoration: none; /* Quita la decoración de enlace */
  color: inherit; /* Hereda el color del texto del contenedor */
  cursor: pointer; /* Cambia el cursor a una mano para indicar que es un enlace */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02); /* Efecto de escala al pasar el cursor */
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 450px;
  background-color: #0b0a0b;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: white;
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export const LinkIconCard = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgb(151, 254, 237);
  }
`;
