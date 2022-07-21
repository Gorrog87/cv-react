import React from "react";
import "./home.css";
import Cv from "./Cv";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Route } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <h1>Welcome to my Website !</h1>
        <Link to={"/cv"}>About</Link>
      </div>
    );
  };
}
