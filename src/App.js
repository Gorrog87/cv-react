import React from "react";
import Home from "./Home";
import Resume from "./Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
       {/*  <Routes> */}
          <Route path="/resume">
            <Resume />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        {/* </Routes> */}
      </Switch>{" "}
    </div>
  );
}

export default App;
