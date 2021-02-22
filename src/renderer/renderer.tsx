/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import * as React from "react";
import * as ReactDOM from "react-dom";
import "_public/style.css";

ReactDOM.render(
  <div className="app">
    <h4>Welcome to React, Electron and Typescript and Lol</h4>
    <p>Hello</p>
  </div>,
  document.getElementById("app"),
);
