import React from "react";
import Home from "./Home";
import Resume from "./Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Router>
    </div>
  );
}

export default App;
