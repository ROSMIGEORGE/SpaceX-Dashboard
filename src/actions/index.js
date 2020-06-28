import spacexdata from "../apis/spacexdata";
import history from "../_helpers/history";
import {
  START_SESSION,
  AUTH_FAILED,
  END_SESSION,
  CAPSULES,
  CORES,
  DRAGONS,
  HISTORY,
  INFO,
  LANDING_PADS,
  LAUNCHES,
  LAUNCH_PADS,
  MISSIONS,
  PAYLOAD,
  ROCKETS,
  ROADSTER,
  SHIPS,
  RESET,
} from "../_helpers/types";

export const authenticate = (formValues) => async (dispatch, getState) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...formValues }),
  };
  const response = await fetch(`/users/authenticate`, requestOptions);

  if (response.ok) {
    dispatch({
      type: START_SESSION,
      payload: { ...response.data, error: "", isLoggedIn: true },
    });
    history.push("/dashboard");
  } else {
    dispatch({
      type: AUTH_FAILED,
      payload: {
        error: response.error.message,
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

export const reset = () => {
  return {
    type: RESET,
    payload: {},
  };
};

export const fetchCapsules = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/capsules");
  dispatch({
    type: CAPSULES,
    payload: response.data,
  });
};

export const fetchCores = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/cores");
  dispatch({
    type: CORES,
    payload: response.data,
  });
};

export const fetchDragons = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/dragons");
  dispatch({
    type: DRAGONS,
    payload: response.data,
  });
};

export const fetchHistory = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/history");
  dispatch({
    type: HISTORY,
    payload: response.data,
  });
};

export const fetchInfo = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/info");
  dispatch({
    type: INFO,
    payload: response.data,
  });
};

export const fetchLandingPads = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/landpads");
  dispatch({
    type: LANDING_PADS,
    payload: response.data,
  });
};

export const fetchLaunches = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/launches");
  dispatch({
    type: LAUNCHES,
    payload: response.data,
  });
};

export const fetchLaunchpads = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/launchpads");
  dispatch({
    type: LAUNCH_PADS,
    payload: response.data,
  });
};

export const fetchMissions = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/missions");
  dispatch({
    type: MISSIONS,
    payload: response.data,
  });
};

export const fetchPayloads = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/payloads");
  dispatch({
    type: PAYLOAD,
    payload: response.data,
  });
};

export const fetchRockets = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/rockets");
  dispatch({
    type: ROCKETS,
    payload: response.data,
  });
};

export const fetchRoadster = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/roadster");
  dispatch({
    type: ROADSTER,
    payload: response.data,
  });
};

export const fetchShips = () => async (dispatch, getState) => {
  const response = await spacexdata.get("/ships");
  dispatch({
    type: SHIPS,
    payload: response.data,
  });
};
