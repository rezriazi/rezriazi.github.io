import React, { Component } from "react";
import "../App.css";
import "./aboutme.css";
import M from "materialize-css";
import aboutMePic from "../PicsandVids/AboutMePic.jpeg";

class AboutMe extends Component {
  componentDidMount() {
    var elem = document.querySelector(".collapsible.expandable");
    var instance = M.Collapsible.init(elem, {
      accordion: false,
    });
  }
  render() {
    return (
      <div className="sectionPage" id="aboutme">
        <h1 className="regText">About Me</h1>
        <div
          // className="col l6 m6 pull-l1 valign-wrapper center-align hide-on-med-and-down"
          id="aboutMeSection"
        >
          <img
            src={aboutMePic}
            // src="https://media-exp1.licdn.com/dms/image/C5603AQFmr7Usskq8Hg/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=g0TJ58iFnq4U7MLRz9yECSkD2dQJEKV0kE7atqaQo4E"
            className="circle responsive-img"
            id="AboutPicture"
            alt="ProfilePic"
          />
          <div>
            <div class="bodyText" id="aboutMeWritten">
              <p>
                Who am I? I'm a Computer Science student at the University of
                British Columbia entering 3rd year, seeking Co-op opportunities
                for Fall 2020. Most people know me for my creativity. I've been
                creating projects from a young age in different platforms. From
                the age of 9, I made my own blog dedicated to game hacks on what
                was my favorite game, Moshi Monsters. I also ran a YouTube
                channel making lyric videos which would reach 50,000 views,
                created my own cartoon series using GoAnimate, wrote a mini book
                series, and have composed a dozen songs on the piano. In the
                recent years, my creativity has been focused on making my own
                apps and games using object-orientated programming as well as
                creating projects such as websites through scripting and
                front-end development.
              </p>
            </div>
            <div id="CollapseSection">
              <ul class="collapsible expandable">
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">build</i>Technical Skills
                  </div>
                  <div class="collapsible-body">
                    <span>
                      My technical skills include language proficiency in Java,
                      C++, JavaScript, CSS, and HTML. Knowledge in frameworks
                      include React JS, and I have experience in programming
                      environments such as Node.js, JAVAFX/GUI, intelliJ IDEA
                      and Microsoft VS Code. My design experience is very
                      strong, evident through being the UI, UX, and Graphic
                      Designer for all of my individual and collaborative
                      projects, using Photoshop and Krita.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">person</i>Personal Strengths
                  </div>
                  <div class="collapsible-body">
                    <span>
                      My strengths include my strong problem-solving skills, my
                      attention to detail, as well as being a fast learner.
                      Being on competitive volleyball and softball teams
                      throughout the years has taught me to be very comfortable
                      in collaborative settings and being a team player. My
                      leadership skills are evident through being a supervisor
                      and training new employees at my job as a Wine Sales
                      Representative.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">create</i>About This Website
                  </div>
                  <div class="collapsible-body">
                    <span>
                      I created this website using JavaScript through React,
                      HTML, and CSS implemented this through Node.js as the open
                      source in Visual Studio Code. Was it a simple process?
                      Unfortunately, no. It was challenging for me because I had
                      to self-teach myself these languages, and it took a while
                      for me to become comfortable with them. However, it was so
                      rewarding and I absolutely loved the process of making it!
                      In fact, I am currently working on making a website for an
                      independent construction company.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default AboutMe;
