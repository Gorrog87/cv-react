import React from "react";
import Home from "Home";
import Cv from "./Cv";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home path="/cv"/>
{/*       <Route path="/cv"> */}
        <Cv />
{/*       </Route> */}
    </Router>
  );
}

export default App;
