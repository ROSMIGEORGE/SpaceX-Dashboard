import { LAUNCHES } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case LAUNCHES:
      return action.payload;
    default:
      return state;
  }
};
