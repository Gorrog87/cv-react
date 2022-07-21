import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
