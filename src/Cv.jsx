import React from "react";
import Header from "./Header";
import Bio from "./Bio";
import Skills from "./Skills";
import Languages from "./Languages";
import Formation from "./Formation";
import Experience from "./Experience";

export default class Cv extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Bio />
        <Formation />
        <Skills />
        <Languages />
        <Experience />
      </div>
    );
  };
}
