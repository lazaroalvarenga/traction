import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const ROOT = document.getElementById("root");

ReactDOM.render(
  <App />,
  ROOT
);

if (module.hot) {
  module.hot.accept(["./components/App"], () => {});
}

if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install();
}