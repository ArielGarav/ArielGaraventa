import styled from "styled-components";

// Estilo del contenedor del botón con animación
const SvgWrapper = styled.a`
  position: relative;
  display: inline-block;
  width: 190px;
  height: 60px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: 1s;
`;

// SVG con efecto de trazo animado
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

// Texto dentro del botón
const Text = styled.span`
  font-size: 22px;
  top: -52px;
  position: relative;
  font-weight: 600;
  color: white;
`;

const ButtonComponent = () => {
  const email = "arielgaraventa5@gmail.com";

  return (
    <SvgWrapper href={`mailto:${email}`}>
      <Shape height="60" width="190">
        <rect height="60" width="190" rx="20" ry="20"></rect>
      </Shape>
      <Text>Send an Email</Text>
    </SvgWrapper>
  );
};

export default ButtonComponent;
