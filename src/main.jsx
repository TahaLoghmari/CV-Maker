import ReactDOM from "react-dom";
if (!ReactDOM.findDOMNode) {
  ReactDOM.findDOMNode = (instance) => instance;
}
import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./components/App";

createRoot(document.querySelector(".container")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
