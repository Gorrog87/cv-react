import React from "react";
import "home.css";


export default class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <h1>Welcome to my Website !</h1>
        <a href="/cv">About</a>
      </div>
    )
  }
}
