import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Skills = () => {
  return (
    <div className="skills">
      <div className="hardskills">
        <div>
          <h3>Hard Skills</h3>
        </div>
        <ul>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-brands fa-html5"
              id="html"
              className="iconHover"
            />
            <li>HTML</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-brands fa-css3-alt"
              id="css"
              className="iconHover"
            />
            <li>CSS</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-brands fa-js-square"
              id="js"
              className="iconHover"
            />
            <li>JavaScript</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-brands fa-vuejs"
              id="vue"
              className="iconHover"
            />
            <li>Vue.Js</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-brands fa-php"
              id="php"
              className="iconHover"
            />
            <li>PHP</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-solid fa-gem"
              id="ruby"
              className="iconHover"
            />
            <li>Ruby / Rails</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-brands fa-react"
              id="react"
              className="iconHover"
            />
            <li>React</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-brands fa-git-square"
              id="git"
              className="iconHover"
            />
            <li>Git / Github</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-solid fa-database"
              id="sql"
              className="iconHover"
            />
            <li>SQL</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fa-solid fa-server"
              id="heroku"
              className="iconHover"
            />
            <li>Heroku</li>
          </div>
        </ul>
      </div>
      <div className="softskills">
        <div>
          <h3>Soft Skills</h3>
        </div>
        <ul>
          <div className="duo">
            <FontAwesomeIcon icon="fas fa-bullseye" className="iconHover" />
            <li>Cibler les demandes client</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon icon="fa-solid fa-palette" className="iconHover" />
            <li>UI / UX</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon icon="fas fa-handshake" className="iconHover" />
            <li>Resolution des conflits</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon icon="fas fa-comments" className="iconHover" />
            <li>Bonne communication</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon
              icon="fas fa-assistive-listening-systems"
              className="iconHover"
            />
            <li>Empathique</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
