import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sectionsReducer from "./sectionsReducer";
import infoReducer from "./infoReducer";
import capsulesReducer from "./capsulesReducer";
import coresReducer from "./coresReducer";
import dragonReducer from "./dragonReducer";
import historyReducer from "./historyReducer";
import landingpadReducer from "./landingpadReducer";
import launchpadReducer from "./launchpadReducer";
import launchReducer from "./launchReducer";
import missionReducer from "./missionReducer";
import payloadReducer from "./payloadReducer";
import roadsterReducer from "./roadsterReducer";
import rocketReducer from "./rocketReducer";
import shipReducer from "./shipReducer";
import nextlaunchReducer from "./nextlaunchReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  sections: sectionsReducer,
  info: infoReducer,
  capsules: capsulesReducer,
  cores: coresReducer,
  dragons: dragonReducer,
  history: historyReducer,
  landingpad: landingpadReducer,
  launchpad: launchpadReducer,
  launches: launchReducer,
  missions: missionReducer,
  payloads: payloadReducer,
  roadsters: roadsterReducer,
  rockets: rocketReducer,
  ships: shipReducer,
  nextLaunch: nextlaunchReducer,
});
