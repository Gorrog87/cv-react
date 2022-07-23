import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="welcome">Welcome to my Website !</h1>
      <div></div>
      <Link to="/resume" id="resume">Resume</Link>
    </div>
  );
}

export default Home;
