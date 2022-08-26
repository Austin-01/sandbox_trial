import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import Todos from "./components/Todos";

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById("root")
);
