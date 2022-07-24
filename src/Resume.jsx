import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Bio from "./Bio";
import Skills from "./Skills";
import Languages from "./Languages";
import Formation from "./Formation";
import Experience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <div>
      <Link to="/" id="home">
        <FontAwesomeIcon icon="fas fa-igloo" />
      </Link>
      <Header />
      <Bio />
      <Formation />
      <Skills />
      <Languages />
      <Experience />
    </div>
  );
};

export default Resume;
