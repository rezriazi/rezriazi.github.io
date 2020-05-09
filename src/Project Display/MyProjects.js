import React, { useEffect } from "react";
import "./Projects.css";
import M from "materialize-css";
import pillUpPic from "../PicsandVids/maingamepicture.jpg";
import planetpanicPic from "../PicsandVids/Planet_Panic_MainPic.png";
import pillupVid from "../PicsandVids/PillUpDemo.mp4";
import planetpanicVid from "../PicsandVids/PlanetPanicDemo.mp4";
import ProjectItem from "./ProjectItem";
import ProjectModal from "./ProjectModal";
// import toDoList from url"https://cdn4.iconfinder.com/data/icons/education-3-22/66/121-512.png";

const Projects = (props) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
    elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems, {});
    var vid = document.getElementById("myVideo");
  });

  return (
    <div>
      <div className="center-align section" id="projects">
        <div className="container section">
          <div className="row">
            <div className="carousel col s12" id="navigationText">
              <ProjectItem
                logo={pillUpPic}
                title="Pill Up"
                modal="#PillUpModal"
              />
              <ProjectItem
                logo={planetpanicPic}
                title="Planet Panic"
                modal="#PlanetPanicModal"
              />
              <ProjectItem
                logo={
                  <img
                    src={
                      "https://cdn4.iconfinder.com/data/icons/education-3-22/66/121-512.png"
                    }
                  />
                }
                title="To-Do List"
                modal="#modalTD"
                alt="To Do Picture"
              />
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        className="regText"
        id="PillUpModal"
        title="Pill Up - Interactive Arcade Game"
        content={
          <>
            <p>
              Fun and addictive game made using Java in IntelliJ with JavaFX.
              The objective of the game is to survive as long as possible, by
              avoiding spikes, aging pills, and growth pills. This was a team
              project, and in addition to coding, I was responsible for the User
              Interface, User Experience Design, creating the graphics (made on
              Krita), and debugging. This was made at the 48-hour BC Game Jam.
            </p>
            <p>
              Use Left/Right/Up/Down arrows to move & SPACE bar to pause game
            </p>

            <p>
              Source code:
              <a
                href="https://github.com/rezriazi/pillup"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </p>
            <div className="row">
              <video
                src={pillupVid}
                className="responsive-vid"
                alt="Game Demo"
              />
            </div>
          </>
        }
      />

      <ProjectModal
        id="PlanetPanicModal"
        title="Planet Panic - Educational Kids Game"
        content={
          <>
            <p>
              At the Hacking For Humanity Hackathon hosted by Girls in Tech, I
              made the game “Planet-Panic”. The objective of the game is to
              collect different pieces of garbage and put it in the bin it
              belongs to, which educates kids about waste. I created all of the
              graphics and User Interface Design using photoshop environment,
              and the game was implemented in Python.
            </p>
            <div className="row">
              <video
                src={planetpanicVid}
                className="responsive-vid"
                alt="Game Demo"
              />
            </div>
          </>
        }
      />
    </div>
  );
};

export default Projects;
