import { MISSIONS } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case MISSIONS:
      return action.payload;
    default:
      return state;
  }
};
