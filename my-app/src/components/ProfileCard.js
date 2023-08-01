
import React, { useState, useEffect } from "react";
import "../styles/ProfileCard.css";
import logo from "./profile.png";
const greetings = ["hello", "ciao", "χαῖρε", "salve"];
const characterDelay = 100; // Adjust the duration between characters (in milliseconds) here
const wordPauseDelay = 100; // Adjust the pause duration after each word (in milliseconds) here

export default function ProfileCard() {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  useEffect(() => {
    const animateText = () => {
      if (currentCharacterIndex === greetings[currentGreetingIndex].length) {
        // Word finished animating, set a pause before moving to the next word
        setTimeout(() => {
          setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
          setCurrentCharacterIndex(0);
        }, wordPauseDelay);
      } else {
        // Display next character
        setTimeout(() => {
          setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
        }, characterDelay);
      }
    };

    const animationInterval = setInterval(animateText, characterDelay + wordPauseDelay);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(animateText);
    };
  }, [currentGreetingIndex, currentCharacterIndex]);

  return (
    <>
      <div className="intro-card-wrapper">
        <div id="profile">
          <img src={logo} alt="Logo" />
        </div>
        <div id="text-wrapper">
          <div id="intro-card-text">{`${greetings[currentGreetingIndex].slice(0, currentCharacterIndex)}`}</div>
          {/* <div className="cursor"></div> */}
          <div id="im-alex-text"> Alexander J. Pieroni</div>
        </div>
      </div>
      <div className="intro-buttons">
        <button id="linkedin">LinkedIn</button>
        <button id="github">GitHub</button>
        <button id="resume">Resume</button>
      </div>
    </>
  );
}
