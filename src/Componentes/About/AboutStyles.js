import styled from "styled-components";
export const AboutTotalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;
`;
export const AboutContainer = styled.div`
  border: 2px solid #97feed;
  margin: 20px;
  border-radius: 50px;
`;
export const AboutTitle = styled.h1`
  text-align: center;
  margin-top: 50px;
  color: #97feed;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Bebas Neue", sans-serif;
  line-height: 32px;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 1621px) {
    margin-top: 350px;
  }
`;
export const AboutParrafo = styled.p`
  color: white;

  font-size: clamp(16px, 4vw, 22px);
  line-height: 1.5;
  margin: 30px 50px;
`;
