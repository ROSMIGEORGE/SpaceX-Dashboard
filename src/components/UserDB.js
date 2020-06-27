import React from "react";
import { connect } from "react-redux";
import InfoCard from "./InfoCard";
import CardContainer from "./CardContainer";

const UserDB = (props) => {
  console.log(props);
  return (
    <div className="user-db">
      <InfoCard />
      <CardContainer cards={props.userDB.cards} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userDB: state.sections.userDB };
};

export default connect(mapStateToProps)(UserDB);
