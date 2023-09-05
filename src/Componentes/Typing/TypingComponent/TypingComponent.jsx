import React, { useState, useEffect } from "react";
import { Container, Cursor, TypingText } from "./TypingComponentStyles";

const TypingComponent = () => {
  const [text, setText] = useState("");
  const words = ["Front End", "Back End"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex =
        currentWordIndex + 1 === words.length ? 0 : currentWordIndex + 1;
      setCurrentWordIndex(currentIndex);
      setLetterIndex(0);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentWordIndex, words.length]);

  useEffect(() => {
    const word = words[currentWordIndex];

    let currentText = "";

    if (letterIndex < 2) {
      currentText = word.slice(0, letterIndex + 1);
    } else {
      currentText = word;
    }

    setText(currentText);

    const interval = setInterval(() => {
      if (letterIndex < 2) {
        setLetterIndex(letterIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          eraseText();
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [currentWordIndex, words, letterIndex]);

  const eraseText = () => {
    let currentIndex = text.length;

    const interval = setInterval(() => {
      setText(text.slice(0, currentIndex));
      currentIndex--;

      if (currentIndex === -1) {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <Container>
      <TypingText>{text}</TypingText>
      <Cursor>|</Cursor>
    </Container>
  );
};

export default TypingComponent;
