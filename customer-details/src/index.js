import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import CustomerDetailsContainer from "./containers/CustomerDetailsContainer";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <CustomerDetailsContainer />
  </Provider>,
  document.getElementById("app")
);
