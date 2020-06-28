import { ROADSTER, END_SESSION } from "../_helpers/types";

export default (state = null, action) => {
  switch (action.type) {
    case ROADSTER:
      return action.payload;
    case END_SESSION:
      return null;
    default:
      return state;
  }
};
