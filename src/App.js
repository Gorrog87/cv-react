import React from "react";
import Cv from "cv.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/cv">
        <Cv />
      </Route>
    </Router>
  );
}

export default App;
