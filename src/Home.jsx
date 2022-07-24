import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="welcome">Welcome to my Website !</h1>
      <div className="home-nav-links">
        <Link to="/resume" id="resume">
          Resume
        </Link>
        <p id="arrow"> {">"} </p>
        <p id="new-feature">New features soon</p>
      </div>
    </div>
  );
};

export default Home;
