import { DRAGONS, END_SESSION } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case DRAGONS:
      return action.payload;
    case END_SESSION:
      return [];
    default:
      return state;
  }
};
