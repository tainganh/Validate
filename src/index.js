import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./newCss/css/styles1.css";

ReactDOM.render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById("root"));
