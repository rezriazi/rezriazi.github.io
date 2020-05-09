import React, { useEffect } from "react";
import "./Projects.css";
import M from "materialize-css";
import ProjectItem from "./ProjectItem";
import pillUpPic from "../PicsandVids/maingamepicture.jpg";
import rezsMix from "../PicsandVids/rezzmix.JPG";
import ubcTalent from "../PicsandVids/ubctalentsized.jpg";
import planetpanicPic from "../PicsandVids/Planet_Panic_MainPic.png";
import portraitLogo from "../PicsandVids/portrait_logo_rez(new).png";

const GraphicDesigns = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
    elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
  });

  return (
    <div>
      <div
      // className="center-align section"
      >
        <h2 className="regText">My Designs</h2>
        <div className="container section">
          <div className="row">
            <div className="carousel col s12">
              <ProjectItem logo={rezsMix} modal="#modalRezMix" />
              <ProjectItem logo={ubcTalent} modal="#modalArcade" />
              <ProjectItem logo={planetpanicPic} modal="#modalHQL" />
              <ProjectItem logo={pillUpPic} modal="#modalPillUp" />
              <ProjectItem logo={portraitLogo} modal="#modalHQL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesigns;
