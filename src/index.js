import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import "./index.css";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { removeUniversalPortals } from "react-portal-universal";
import configureStore from "./store/configureStore";
import reducers from "./reducers";
import App from "./App";

// eslint-disable-next-line
window.__REDUX_STATE__ = {};

// eslint-disable-next-line
const store = configureStore(window.__REDUX_STATE__ || {});

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
removeUniversalPortals();

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(app, document.getElementById("root"));
  });
};
