import React, { Component } from "react";
import "./components.css";
import ModalX from "../Actions/Modal.js";
// import 'DOMContentLoaded' from "materialize-css";
// import function from "materialize-css";
import Projects from "../Project Display/MyProjects";
import { fadeInUp } from "react-animations";
import styled, { keyframes } from "styled-components";

class Apps extends Component {
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems, options);
  // });

  render() {
    const FadeUp = styled.div`
      animation: 3s ${keyframes`${fadeInUp}`};
    `;
    return (
      <div>
        <div className="sectionPage" id="apps">
          <FadeUp>
            <h1 className="appsgamesText">MY APPS & GAMES</h1>
          </FadeUp>
          <Projects />
        </div>
      </div>
    );
  }
}

export default Apps;
