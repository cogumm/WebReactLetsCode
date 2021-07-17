import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// import App from "./components/App";
import App2 from "./components/App2";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 title="Titulo">Texto</App2>
    <App2 title="Titulo2">Texto2</App2>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
