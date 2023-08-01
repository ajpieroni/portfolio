import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import React, { useState, useEffect } from "react";
import "../styles/Landing.css"; // Assuming you have a CSS file for the Landing component

function Landing() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Delay the animation to give time for the component to render first
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="landing-wrapper">
      <Header />
      <ProfileCard />
    </div>
  );
}

export default Landing;