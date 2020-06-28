import { PAYLOAD, END_SESSION } from "./types";

export default (state = [], action) => {
  switch (action.type) {
    case PAYLOAD:
      return action.payload;
    case END_SESSION:
      return [];
    default:
      return state;
  }
};
