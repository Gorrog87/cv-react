import React from "react";
import "./languages.css";
import { FR, GB, ES } from "country-flag-icons/react/3x2";

export default class Languages extends React.Component {
  render() {
    return (
      <div className="languagesAndHobbies">
        <div className="languages">
          <h3 id="languages">Langues</h3>
          <ul>
            <div className="duo">
              <FR title="Fr" id="flag" />
              <li>Français : Natal</li>
            </div>
            <div className="duo">
              <GB title="Gb" id="flag" />
              <li>Anglais : lu / parlé</li>
            </div>
            <div className="duo">
              <ES title="Es" id="flag" />
              <li>Espagnol : indépendant</li>
            </div>
          </ul>
        </div>
        <div className="hobbies">

        </div>
      </div>
    );
  }
}
