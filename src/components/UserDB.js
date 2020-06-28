import React from "react";
import { connect } from "react-redux";
import InfoCard from "./InfoCard";
import CardContainer from "./CardContainer";

const UserDB = (props) => {
  return (
    <div className="user-db">
      <InfoCard />
      <CardContainer cards={props.general} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { general: state.sections.general };
};

export default connect(mapStateToProps)(UserDB);
