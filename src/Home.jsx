import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my Website !</h1>
      <Link to="/resume">Resume</Link>
    </div>
  );
}

export default Home;
