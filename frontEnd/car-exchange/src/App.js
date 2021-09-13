import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Login />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
