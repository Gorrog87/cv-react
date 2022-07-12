import React from "react";
import  "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <div className="hardskills">
          <div>
            <h3>Hard Skills</h3>
          </div>
          <ul>
            <div className="duo">
              <FontAwesomeIcon icon="fa-brands fa-html5" id="html"/>
              <li>HTML</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-brands fa-css3-alt" id="css"/>
              <li>CSS</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-brands fa-js-square" id="js"/>
              <li>JavaScript</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-solid fa-gem" id="ruby"/>
              <li>Ruby / Rails</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-brands fa-react" id="react"/>
              <li>React</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-brands fa-git-square" id="git"/>
              <li>Git / Github</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-solid fa-database" id="sql"/>
              <li>SQL</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-solid fa-server" id="heroku"/>
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
              <FontAwesomeIcon icon="fas fa-bullseye" />
              <li>Cibler les demandes client</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fa-solid fa-palette" />
              <li>UI / UX</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fas fa-handshake" />
              <li>Resolution des conflits</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fas fa-comments" />
              <li>Bonne communication</li>
            </div>
            <div className="duo">
              <FontAwesomeIcon icon="fas fa-assistive-listening-systems" />
              <li>Empathique</li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
