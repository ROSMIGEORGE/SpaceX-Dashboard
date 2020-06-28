import React, { useEffect } from "react";
import { connect } from "react-redux";
import history from "../history";
import "../scss/dashboard.scss";
import AdminDB from "./AdminDB";
import UserDB from "./UserDB";
import { Router, Route, Switch } from "react-router-dom";
import hashHistory from "../hashHistory";
import HistoryPage from "./cards/History";
import Missions from "./cards/Missions";
import Launches from "./cards/Launches";
import LaunchPad from "./cards/LaunchPad";
import LandingPad from "./cards/LandingPad";

const Dashboard = (props) => {
  useEffect(() => {
    if (!props.auth.isLoggedIn) {
      history.push("/");
    }
  }, []);
  console.log(props);
  return (
    <div className="dashboard">
      {props.auth.role == "Admin" ? <AdminDB /> : <UserDB />}
      <Router history={hashHistory} base>
        <Switch>
          <Route path="/history" exact component={HistoryPage} />
          <Route path="/missions" exact component={Missions} />
          <Route path="/launches" exact component={Launches} />
          <Route path="/launch-pad" exact component={LaunchPad} />
          <Route path="/landing-pad" exact component={LandingPad} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
