import React from "react";
import { render } from "react-dom";
import store from "./store/index";
import Root from './Root';

window.store = store;

render(
  <Root store={store} />,
  document.getElementById("root")
);
