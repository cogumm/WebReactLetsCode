import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// import Hello from "./components/Hello";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello text="Estou vivo!" /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
