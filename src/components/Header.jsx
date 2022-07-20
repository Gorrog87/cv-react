import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          id="picture"
          src="./Photo - CV.jpg"
          alt="Maxime Gourgues"
        />
        <div className="headerName">
          <h1>Maxime Gourgues</h1>
          <h4>Développeur frontend junior</h4>
          <div className="socialLinks">
            <a
              href="https://github.com/Gorrog87"
              rel="noreferrer"
              target="_blank"
              className="iconHover"
            >
              <FontAwesomeIcon icon="fab fa-github" size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/maxime-gourgues/"
              rel="noreferrer"
              target="_blank"
              className="iconHover"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" />
            </a>
            <a
              href="https://troopl.com/gourguesmaxime"
              rel="noreferrer"
              target="_blank"
              className="iconHover"
            >
              <FontAwesomeIcon icon="fa-solid fa-folder-open" size="lg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
