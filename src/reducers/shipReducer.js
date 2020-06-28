import { SHIPS } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case SHIPS:
      return action.payload;
    default:
      return state;
  }
};
