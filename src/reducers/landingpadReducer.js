import { LANDING_PADS } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case LANDING_PADS:
      return action.payload;
    default:
      return state;
  }
};
