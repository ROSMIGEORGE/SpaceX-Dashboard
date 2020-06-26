import login from "../apis/login";
import history from "../history";
import { START_SESSION, AUTH_FAILED, END_SESSION } from "../reducers/types";

export const authenticate = (formValues) => async (dispatch, getState) => {
  const response = await login.post("", { ...formValues });

  const data = response.data;
  if ((data.status = "authenticated")) {
    dispatch({
      type: START_SESSION,
      payload: { ...data, error: "", isLoggedIn: true },
    });
    history.push("/dashboard");
  } else {
    dispatch({
      type: AUTH_FAILED,
      payload: {
        status: "fail",
        error: "Invalid username or password",
        isLoggedIn: false,
      },
    });
  }
};

export const endSession = () => {
  setTimeout(() => {
    history.push("/");
  }, 0);
  return {
    type: END_SESSION,
    payload: {},
  };
};
