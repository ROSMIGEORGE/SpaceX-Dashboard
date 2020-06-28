import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { reduxForm, Field } from "redux-form";
import "../../scss/form.scss";

const LoginForm = (props) => {
  const [buttonText, setButtonText] = useState("Submit");

  useEffect(() => {
    if (props.errormsg) {
      setButtonText("Submit");
    }
  }, [props.errormsg]);
  const onSubmit = (formValues) => {
    props.resetError();
    setButtonText(<CircularProgress />);
    props.onSubmit(formValues);
  };
  return (
    <form className="form" onSubmit={props.handleSubmit(onSubmit)}>
      <div>USER LOGIN</div>

      <Field
        name="username"
        component={renderInputField}
        placeholder="Username"
        type="text"
      />
      <Field
        name="password"
        component={renderInputField}
        placeholder="Password"
        type="password"
      />
      <div>
        <button type="submit">{buttonText}</button>
        <div className="error">{props.errormsg}</div>
      </div>
    </form>
  );
};

const renderInputField = ({ input, meta, placeholder, type }) => {
  return (
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
      />
      {renderError(meta)}
    </div>
  );
};

const renderError = ({ touched, error }) => {
  return touched && error ? <div className="error">{error}</div> : null;
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "Enter username";
  }
  if (!formValues.password) {
    errors.password = "Enter password";
  }
  return errors;
};
export default reduxForm({
  form: "loginForm",
  validate,
})(LoginForm);
