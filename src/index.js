import React from "react";
import ReactDOM from "react-dom/client";
import RootContext from "./context";
import Root from "./root";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);
