import { ROADSTER } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case ROADSTER:
      return action.payload;
    default:
      return state;
  }
};
