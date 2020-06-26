import React from "react";
import { connect } from "react-redux";
import LoginForm from "./_LoginForm";
import { authenticate } from "../actions";

const LoginPage = (props) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
    props.authenticate(formValues);
  };
  return (
    <div className="login">
      <div className="illustration"></div>
      <div className="form-section">
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default connect(null, { authenticate })(LoginPage);
