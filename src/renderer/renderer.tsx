/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import React from "react";
import ReactDOM from "react-dom";
import "_public/style.css";
import Home from "./pages/home";

ReactDOM.render(<Home />, document.getElementById("app"));
