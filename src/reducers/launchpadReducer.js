import { LAUNCH_PADS, END_SESSION } from "../_helpers/types";

export default (state = [], action) => {
  switch (action.type) {
    case LAUNCH_PADS:
      return action.payload;
    case END_SESSION:
      return [];
    default:
      return state;
  }
};
