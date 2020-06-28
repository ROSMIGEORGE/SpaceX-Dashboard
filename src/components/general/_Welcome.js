import React from "react";
import { connect } from "react-redux";
import rocket from "../../images/rocket-star.png";
const Welcome = (props) => {
  return (
    <div className="welcome">
      <div className="msg">
        Welcome <br />
        {props.name}
      </div>
      <div className="img-wrap">
        <img src={rocket} alt="welcom" />
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    name: state.auth.firstName,
  };
};

export default connect(mapStatetoProps)(Welcome);
