import React from "react";
import { reduxForm, Field, formValues } from "redux-form";
import "../scss/form.scss";

const LoginForm = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit(props.onSubmit)}>
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

const renderInputField = ({ input, meta, placeholder, type }) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} />
    </div>
  );
};

export default reduxForm({
  form: "loginForm",
})(LoginForm);
