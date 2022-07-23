import React from "react";
import "./languages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FR, GB, ES } from "country-flag-icons/react/3x2";

const Languages = () => {
  return (
    <div className="languagesAndHobbies">
      <div className="languages">
        <h3 id="languages">Langues</h3>
        <ul>
          <div className="duo-flags">
            <FR title="Fr" id="flag" className="iconHover" />
            <li>Français : Natal</li>
          </div>
          <div className="duo-flags">
            <GB title="Gb" id="flag" className="iconHover" />
            <li>Anglais : lu / parlé</li>
          </div>
          <div className="duo-flags">
            <ES title="Es" id="flag" className="iconHover" />
            <li>Espagnol : indépendant</li>
          </div>
        </ul>
      </div>
      <div className="hobbies">
        <h3>Hobbies</h3>
        <ul>
          <div className="duo">
            <FontAwesomeIcon icon="fas fa-golf-ball" className="iconHover" />
            <li>Golf : hcp 3</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon icon="fas fa-water" className="iconHover" />
            <li>Plongée sous marine</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon icon="fas fa-running" className="iconHover" />
            <li>Course à pied</li>
          </div>
          <div className="duo">
            <FontAwesomeIcon icon="fas fa-biking" className="iconHover" />
            <li>Vélo</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Languages;
