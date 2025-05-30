import styled from "styled-components";
export const TotalContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  height: 40vh;
  width: 100%;
  margin-top: 100px;
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  @media (width <560px) {
    gap: 25px;
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
