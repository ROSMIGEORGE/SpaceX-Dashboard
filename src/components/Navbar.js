import React from "react";
import { connect } from "react-redux";
import { endSession } from "../actions";

const Navbar = (props) => {
  return (
    <div className="nav">
      <div className="logo">SPACEX</div>
      {props.auth.isLoggedIn ? (
        <div className="">
          <div className="right username">{props.auth.role}</div>
          <button className="logout right" onClick={props.endSession}>
            Logout
          </button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { endSession })(Navbar);
