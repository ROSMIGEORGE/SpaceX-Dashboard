import { INFO } from "../reducers/types";

export default (state = null, action) => {
  switch (action.type) {
    case INFO:
      return action.payload;
    default:
      return state;
  }
};
