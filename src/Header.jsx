import React from "react";
import header from "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          id="picture"
          src="https://avatars.githubusercontent.com/u/88392395?s=400&u=7f6249d4f819bd3fd6b245a982ec8473858a3ad3&v=4"
          alt="Maxime Gourgues"
        />
        <h1>Maxime Gourgues</h1>
        <h4>Développeur frontend junior</h4>
      </div>
    );
  }
}
