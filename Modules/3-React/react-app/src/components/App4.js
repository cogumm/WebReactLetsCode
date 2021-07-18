import React from "react";

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: "",
    };
  }

  changetxtName = (e) => {
    this.setState({ txtNome: e.target.value });
  };

  persistName = () => {
    this.setState({
      nome: this.state.txtNome,
    });
  };

  render() {
    //   if (!this.state.nome) {
    //     return (
    //       <>
    //         Nome:{" "}
    //         <input
    //           type="text"
    //           value={this.state.nome}
    //           onChange={this.changetxtName}
    //         />
    //         <button onClick={this.persistName}>Salvar</button>
    //       </>
    //     );
    //   } else {
    //     return (
    //       <>
    //         <p>Olá {this.state.nome}</p>
    //       </>
    //     );
    //   }
    // }

    // Utilizando condicionador ternário.
    const renderForm = () => {
      return (
        <>
          Nome:{" "}
          <input
            type="text"
            value={this.state.nome}
            onChange={this.changetxtName}
          />
          <button onClick={this.persistName}>Salvar</button>
        </>
      );
    };

    const renderTxt = () => {
      return (
        <>
          <p>Olá {this.state.nome}</p>
        </>
      );
    };

    return !this.state.nome ? renderForm() : renderTxt();
  }
}

export default App4;
