import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import mainReducer from "./reducer";
import Home from "./components/Home";

import "./styles.css";

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

const WrappedHome = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<WrappedHome />, rootElement);
