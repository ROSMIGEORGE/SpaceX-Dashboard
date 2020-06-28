import { START_SESSION, AUTH_FAILED, END_SESSION, RESET } from "./types";

const INIT_VALUES = { isLoggedIn: false, error: "" };
export default (state = INIT_VALUES, action) => {
  switch (action.type) {
    case START_SESSION:
      return action.payload;
    case AUTH_FAILED:
      return action.payload;
    case RESET:
      return { ...state, error: "" };
    case END_SESSION:
      return INIT_VALUES;
    default:
      return state;
  }
};
