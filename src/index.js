import React from "react";
import { render } from "react-dom";
import store from "./store/index";
import App from './App';

// Easy access to the redux store for dev
// window.store = store;

render(
  <App store={store} />,
  document.getElementById("root")
);
