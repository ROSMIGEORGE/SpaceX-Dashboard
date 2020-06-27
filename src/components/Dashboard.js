import React, { useEffect } from "react";
import { connect } from "react-redux";
import history from "../history";
import "../scss/dashboard.scss";
import AdminDB from "./AdminDB";
import UserDB from "./UserDB";

const Dashboard = (props) => {
  useEffect(() => {
    if (!props.auth.isLoggedIn) {
      history.push("/");
    }
  }, []);
  return (
    <div className="dashboard">
      {props.auth.role == "admin" ? <AdminDB /> : <UserDB />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
