import React from "react";
import App from "./App";
import "./i18n";
import "./index.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
