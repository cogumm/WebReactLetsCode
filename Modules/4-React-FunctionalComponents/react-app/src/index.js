import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Hello from "./components/Hello";

ReactDOM.render(
  <React.StrictMode>
    <Hello text="Estou vivo!" />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
