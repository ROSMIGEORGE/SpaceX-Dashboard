import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginForm from "./_LoginForm";
import history from "../_helpers/history";
import { authenticate, fetchInfo, reset } from "../actions";
import rocket_star from "../images/rocket-star.png";

const LoginPage = (props) => {
  useEffect(() => {
    if (props.auth.isLoggedIn) {
      history.push("/dashboard");
    }
    if (!props.info.summary) {
      props.fetchInfo();
    }
  }, [props]);
  const onSubmit = (formValues) => {
    props.authenticate(formValues);
  };

  return (
    <div className="login">
      <div className="illustration">
        <img src={rocket_star} alt="rocket" />
        <div className="summary">{props.info.summary}</div>
      </div>
      <div className="form-section">
        <LoginForm
          onSubmit={onSubmit}
          resetError={props.reset}
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
export default connect(mapStateToProps, { authenticate, fetchInfo, reset })(
  LoginPage
);
