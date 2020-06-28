import { ROCKETS, END_SESSION } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case ROCKETS:
      return action.payload;
    case END_SESSION:
      return [];
    default:
      return state;
  }
};
