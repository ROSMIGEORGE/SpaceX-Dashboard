import React from "react";
import ReactDOM from "react-dom";
import { throttle } from "lodash";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";
import { loadState, saveState } from "./sessionStorage";
import { configureFakeBackend } from "./fake_api";

configureFakeBackend();
let persistedState = loadState();
let store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
