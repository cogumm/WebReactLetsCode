import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// import App from "./components/App";
// import App2 from "./components/App2";
// import App3 from "./components/App3";
// import App4 from "./components/App4";
// import App5 from "./components/App5";
// import Lista from "./components/Lista";
import { Item, Lista2 } from "./components/Lista2";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 title="Titulo">Texto</App2>
    <App2 title="Titulo2">Texto2</App2> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    {/* <Lista /> */}
    <Lista2>
      Texto
      <Item key={999} id={999} completo={false}>
        999
      </Item>
      <Item key={998} id={998} completo={true}>
        998
      </Item>
    </Lista2>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
