import { LAUNCH_PADS } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case LAUNCH_PADS:
      return action.payload;
    default:
      return state;
  }
};
