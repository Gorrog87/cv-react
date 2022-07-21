import React from "react";
import Home from "./Home";
import Cv from "./Cv";
import { BrowserRouter as Router, Route } from "react-router-dom";
/* import { Link, NavLink } from "react-router-dom"; */

function App() {
  return (
    <Router>
      <div>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cv">
          <Cv />
        </Route>
      </div>
    </Router>
  );
}

export default App;
