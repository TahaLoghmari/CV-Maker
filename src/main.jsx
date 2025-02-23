import ReactDOM from "react-dom";
if (!ReactDOM.findDOMNode) {
  ReactDOM.findDOMNode = (instance) => instance;
}
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App";
import "./index.css";

createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
