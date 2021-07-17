import React from "react";

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      idade: 32,
    };
    // this.changeName = this.changeName.bind(this);
  }

  // changeName = function (e) { -- Alterando para arrow function
  changeName = (e) => {
    this.setState({ nome: e.target.value });
  };

  render() {
    return (
      <>
        Nome:{" "}
        <input type="text" value={this.state.nome} onChange={this.changeName} />
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
