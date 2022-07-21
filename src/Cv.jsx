import React from "react";
import Header from "./Header";
import Bio from "./Bio";
import Skills from "./Skills";
import Languages from "./Languages";
import Formation from "./Formation";
import Experience from "./Experience";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Cv extends React.Component {
  render() {
    return (
      <Route path="/cv">
        <div>
          <Header />
          <Bio />
          <Formation />
          <Skills />
          <Languages />
          <Experience />
        </div>
      </Route>
    );
  }
}
