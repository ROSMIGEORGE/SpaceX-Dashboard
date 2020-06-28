import { LAUNCH_NEXT } from "../_helpers/types";

export default (state = null, action) => {
  switch (action.type) {
    case LAUNCH_NEXT:
      return action.payload;
    default:
      return state;
  }
};
