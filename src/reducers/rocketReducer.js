import { ROCKETS } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case ROCKETS:
      return action.payload;
    default:
      return state;
  }
};
