import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AppProviders from "./AppProviders";
import AppWrapper from "./AppWrapper";
import App from "./App";

import "@assets/styles/index.scss";

ReactDOM.render(
  <Router>
    <AppProviders>
      <AppWrapper>
        <App />
      </AppWrapper>
    </AppProviders>
  </Router>,
  document.getElementById("root")
);
