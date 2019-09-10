import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import App from "./App.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer, initialState } from "./redux/index.js";
let store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
