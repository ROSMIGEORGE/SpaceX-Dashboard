import login from "../apis/login";
import history from "../history";

export const authenticate = (formValues) => async (dispatch, getState) => {
  const response = await login.post("", { ...formValues });

  const data = response.data;
  if ((data.status = "authenticated")) {
    dispatch({ type: "START_SESSION", payload: { data, error: "" } });
    history.push("/dashboard");
  } else {
    dispatch({
      type: "AUTH_FAILED",
      payload: { status: "fail", error: "Invalid username or password" },
    });
  }
};
