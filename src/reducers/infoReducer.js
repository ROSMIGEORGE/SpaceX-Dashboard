import { INFO } from "../_helpers/types";

export default (state = [], action) => {
  switch (action.type) {
    case INFO:
      return action.payload;
    default:
      return state;
  }
};
