import React from "react";

class App extends React.Component {
  render(){
    return(
      <>
        <p>
          Estou vivo!
        </p>
        <p>
          Fragment.
        </p>
        <p>
          {new Date().toLocaleDateString("pt-BR")}
        </p>
      </>
    );
  }
}

export default App;
