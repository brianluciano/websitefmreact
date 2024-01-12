import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/home.mov" autoPlay loop muted />
      <div className="LogoHome">
        <img src="/logoHome.png" className="logo" />
      </div>
    </div>
  );
}

export default HeroSection;
