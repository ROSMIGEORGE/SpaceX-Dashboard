import React from "react";
import { connect } from "react-redux";
import CardContainer from "./general/_CardContainer";
import Welcome from "./general/_Welcome";
import NextLaunch from "./general/_NextLaunch";

//dashboard component for scientist role
const AdminDB = (props) => {
  return (
    <div className="admin-db">
      <div className="top-section">
        <Welcome />
        <NextLaunch />
      </div>
      <div className="card-title">MACHINES</div>
      <CardContainer cards={props.machines} />
      <div className="card-title">GENERAL</div>
      <CardContainer cards={props.general} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { general: state.sections.general, machines: state.sections.machines };
};

export default connect(mapStateToProps)(AdminDB);
