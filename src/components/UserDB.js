import React from "react";
import { connect } from "react-redux";
import InfoCard from "./general/_InfoCard";
import CardContainer from "./general/_CardContainer";
import Welcome from "./general/_Welcome";

const UserDB = (props) => {
  return (
    <div className="user-db">
      <div className="top-section">
        <Welcome />
        <InfoCard />
      </div>
      <CardContainer cards={props.general} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { general: state.sections.general };
};

export default connect(mapStateToProps)(UserDB);
