import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "../scss/style.scss";
import history from "../_helpers/history";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
