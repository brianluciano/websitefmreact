import React from "react";
import "./MeSection.css";

function MeSection() {
  return (
    <div className="row_me">
      <div className="side_me">
        <h1>
          <p className="title_me">Hey, I’m Fleur</p>
          <p className="title_me">Mostart.</p>
        </h1>
        <div className="subtitle_me">
        <p>
          IF YOU'RE LOOKING FOR A VERSATILE AND SKILLED COMMUNICATION
          PROFESSIONAL, I'M YOUR WING-WOMAN.
        </p>
        </div>
        <div className="description_me">
        <p>
          In my opinion, I am a unique, detail-oriented, and curious
          communication professional. I have a knack for spotting opportunities
          and I’m eager to share them. While I stay up-to-date with the latest
          trends, I only embrace them if they align with the company’s vision
          and branding.
        </p>
        <br></br>
        <p> 
          I draw inspiration from the most unexpected sources,
          whether it’s images, conversations, or people. This applies to my
          photography as well as concept development. Creating a distinct
          identity is crucial to me, and I’m ready to work with you to uncover
          these unique qualities within your company.
          </p>
        </div>
      </div>
      <div className="main_me">
        <div className="fakeimg"></div>
      </div>
    </div>
  );
}

export default MeSection;
