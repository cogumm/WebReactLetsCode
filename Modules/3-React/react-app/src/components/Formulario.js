import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      linguagem: "JavaScript",
      tipo: "programador",
      dedico: true,
      bio: "",
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    };

    this.changeName = (e) => {
      this.setState({ nome: e.target.value });
    };

    this.changeSelect = (e) => {
      this.setState({ linguagem: e.target.value });
    };

    this.changeRadio = (e) => {
      this.setState({ tipo: e.target.value });
    };

    this.changeCheckbox = (e) => {
      this.setState({ dedico: e.target.checked });
    };

    this.changeBio = (e) => {
      this.setState({ bio: e.target.value });
    };
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:{" "}
            <input
              type="text"
              value={this.state.nome}
              onChange={this.changeName}
            />
          </label>
          <br />
          <label>
            Linguagem favorita:
            <select value={this.state.linguagem} onChange={this.changeSelect}>
              <option value="Javascript">Javascript</option>
              <option value="Node">Node</option>
              <option value="React">React</option>
            </select>
          </label>
          <br />
          <label>
            Sou:
            <input
              type="radio"
              checked={this.state.tipo === "programador"}
              onChange={this.changeRadio}
              value="programador"
            />{" "}
            Programador
            <input
              type="radio"
              checked={this.state.tipo === "estudante"}
              onChange={this.changeRadio}
              value="estudante"
            />{" "}
            Estudante
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={this.state.dedico}
              onChange={this.changeCheckbox}
            />{" "}
            Dedico 8h semanais aos estudos.
          </label>
          <br />
          <label>
            Bio:
            <textarea
              cols="50"
              value={this.state.bio}
              onChange={this.changeBio}
            />
          </label>
          <br />
          <input type="submit" value="Salvar" />
        </form>
      </>
    );
  }
}

export default Formulario;
