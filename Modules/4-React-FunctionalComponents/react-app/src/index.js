import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// import Hello from "./components/Hello";
// import App from "./components/App";
import App2 from "./components/App2";

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello text="Estou vivo!" /> */}
    {/* <App /> */}
    <App2 />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
