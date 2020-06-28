import React from "react";
import { connect } from "react-redux";
import CardContainer from "./CardContainer";

const AdminDB = (props) => {
  return (
    <div className="admin-db">
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
