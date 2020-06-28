import { SHIPS, END_SESSION } from "../_helpers/types";

export default (state = [], action) => {
  switch (action.type) {
    case SHIPS:
      return action.payload;
    case END_SESSION:
      return [];
    default:
      return state;
  }
};
