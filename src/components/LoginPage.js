import React from "react";
import { connect } from "react-redux";
import LoginForm from "./_LoginForm";
import { authenticate } from "../actions";

const LoginPage = (props) => {
  const onSubmit = (formValues) => {
    props.authenticate(formValues);
  };
  console.log("xjhx" + props.auth.error);
  return (
    <div className="login">
      <div className="illustration"></div>
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
  };
};
export default connect(mapStateToProps, { authenticate })(LoginPage);
