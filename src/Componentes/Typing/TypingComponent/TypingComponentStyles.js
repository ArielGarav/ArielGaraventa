import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypingText = styled.span`
  display: inline-block;
  border-right: 0.1em solid;
  animation: blink-caret 0.75s step-end infinite;
  font-size: 20px;
  font-family: "Inter";
  font-weight: 600;
  line-height: 50px;
  color: #97feed;
  border-radius: 8px;
  margin: 5px;

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #000;
    }
  }
`;

export const blinkCursor = keyframes`
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const Cursor = styled.span`
  animation: ${blinkCursor} 0.5s step-end infinite;
  font-size: 40px;
`;
