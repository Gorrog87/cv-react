import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <h1>Welcome to my Website !</h1>
        <Link to={"/Cv"}>About</Link>
      </div>
    )
  }
}
