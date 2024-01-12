import React from "react";
import "../App.css";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="row_about">
      <div className="side_about">
        <div className="fakeimg"></div>
        
      </div>
      <div className="main_about">
        <h1 className="title">
          <span> What </span>
          <br></br>
          <span> I</span>
          <br></br>
          <span>Do.</span>
        </h1>
        <p className="description">
          FM Communications is a dynamic and creative company that can handle
          all of your online communication needs. As a communication
          professional, I lead my clients step by step. From outlining an
          effective communication policy to fostering increased interaction with
          the target group to writing compelling website copy. I’m specialize in
          content creation, photography and social media management. We all have
          our strengths. I've honed mine so that you can focus on yours. Get in
          touch to explore how we can complement each other.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
