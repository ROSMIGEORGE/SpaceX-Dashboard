import React from "react";
import ReactDOM from "react-dom";
import { throttle } from "lodash";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";
import { loadState, saveState } from "./_helpers/sessionStorage";
import { configureFakeBackend } from "./_helpers/fake_api";

//configure fake api for login
configureFakeBackend();

//load state from session if exist and creates store
let persistedState = loadState();
let store = createStore(reducers, persistedState, applyMiddleware(thunk));

//subscribe changes store and updating in session storage
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

//render app component to root element
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
