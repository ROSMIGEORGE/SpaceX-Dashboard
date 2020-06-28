import React from "react";
import { connect } from "react-redux";
import history from "../_helpers/history";
import "../scss/dashboard.scss";
import AdminDB from "./AdminDB";
import UserDB from "./UserDB";
import { Router, Route, Switch } from "react-router-dom";
import hashHistory from "../_helpers/hashHistory";
import HistoryPage from "./cards/History";
import Missions from "./cards/Missions";
import Launches from "./cards/Launches";
import LaunchPad from "./cards/LaunchPad";
import LandingPad from "./cards/LandingPad";
import Capsules from "./cards/Capsule";
import Cores from "./cards/Cores";
import Dragons from "./cards/Dragons";
import Payloads from "./cards/Payloads";
import Rockets from "./cards/Rockets";
import Roadster from "./cards/Roadster";
import Ships from "./cards/Ships";

const Dashboard = (props) => {
  if (!props.auth.isLoggedIn) {
    history.push("/");
  }

  return (
    <div className="dashboard">
      {props.auth.role === "Scientist" ? <AdminDB /> : <UserDB />}
      <Router history={hashHistory} base>
        <Switch>
          <Route path="/history" exact component={HistoryPage} />
          <Route path="/missions" exact component={Missions} />
          <Route path="/launches" exact component={Launches} />
          <Route path="/launch-pad" exact component={LaunchPad} />
          <Route path="/landing-pad" exact component={LandingPad} />
          <Route path="/capsule" exact component={Capsules} />
          <Route path="/cores" exact component={Cores} />
          <Route path="/dragons" exact component={Dragons} />
          <Route path="/payloads" exact component={Payloads} />
          <Route path="/rockets" exact component={Rockets} />
          <Route path="/roadster" exact component={Roadster} />
          <Route path="/ships" exact component={Ships} />
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
