import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginForm from "./_LoginForm";
import { authenticate, fetchInfo } from "../actions";
import rocket_star from "../images/rocket-star.png";

const LoginPage = (props) => {
  useEffect(() => {
    props.fetchInfo();
  }, []);
  const onSubmit = (formValues) => {
    props.authenticate(formValues);
  };
  console.log(props.info);
  return (
    <div className="login">
      <div className="illustration">
        <img src={rocket_star} />
        <div className="summary">{props.info.summary}</div>
      </div>
      <div className="form-section">
        <LoginForm
          onSubmit={onSubmit}
          errormsg={props.auth.error ? props.auth.error : ""}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    info: state.info,
  };
};
export default connect(mapStateToProps, { authenticate, fetchInfo })(LoginPage);
