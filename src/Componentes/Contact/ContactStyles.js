import styled from "styled-components";
export const TotalContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  height: 50vh;
  width: 100%;
  @media (max-width: 600px) {
    margin-top: 140px;
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  @media (width <560px) {
    gap: 15px;
    flex-direction: column;
  }
`;
export const GetInTouchText = styled.h3`
  color: rgb(233, 237, 239);
  font-size: 50px;
`;
export const CreateIdeasText = styled.p`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.00667rem;
  font-size: 24px;
`;
export const StyledHr = styled.hr`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const LinksStlyedRedes = styled.a`
  font-size: 40px;
  color: #fff;
  text-align: center;
  font-family: "Inter", sans-serif;

  /* Agregar estilos específicos para el enlace */
  &:hover {
    /* Agregar los estilos que quieras al pasar el mouse por encima */
  }

  @media (max-width: 560px) {
    /* Agregar estilos específicos para dispositivos móviles */
  }
`;
