import React, { Component } from "react";
import "./components.css";
import ModalX from "../Actions/Modal.js";
// import 'DOMContentLoaded' from "materialize-css";
// import function from "materialize-css";
import pillUpPic from "../PicsandVids/maingamepicture.jpg";
import Projects from "../Project Display/MyProjects";

class Apps extends Component {
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems, options);
  // });
  render() {
    return (
      <div>
        <div className="sectionPage" id="apps">
          <h1 className="appsgamesText">MY APPS & GAMES</h1>
          <Projects />
        </div>
      </div>
    );
  }
}

export default Apps;
