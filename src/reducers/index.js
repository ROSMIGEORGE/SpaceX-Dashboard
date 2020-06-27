import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sectionsReducer from "./sectionsReducer";
import infoReducer from "./infoReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  sections: sectionsReducer,
  info: infoReducer,
});
