/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import * as React from "react";
import * as ReactDOM from "react-dom";
import "_public/style.css";
import Home from "./pages/home";

ReactDOM.render(
  <div>
    <Home />
  </div>,
  document.getElementById("app"),
);
