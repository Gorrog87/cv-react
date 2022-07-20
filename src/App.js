import React from "react";
import Cv from "cv";
/* import Header from "./Header";
import Bio from './Bio';
import Skills from "./Skills";
import Languages from "./Languages";
import Formation from "./Formation";
import Experience from "./Experience"; */
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/cv">
        <Cv />
      </Route>
     {/*  <Header />
      <Bio />
      <Formation />
      <Skills />
      <Languages />
      <Experience /> */}
    </Router>
  );
}

export default App;
