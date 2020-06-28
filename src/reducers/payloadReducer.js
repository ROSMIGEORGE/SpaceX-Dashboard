import { PAYLOAD } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case PAYLOAD:
      return action.payload;
    default:
      return state;
  }
};
