import React, { useState } from "react";

export default function App() {
  // const [nome, setNome] = useState("teste");
  // const [pessoa, setPessoa] = useState({
  //   nome: "Gabriel",
  //   idade: 32,
  // });

  // const changeNome = () => setNome("Gabriel");
  // const changeNome = () => setPessoa({ nome: "CoGUMm" });

  // console.log(pessoa);

  const [nome, setNome] = useState("");

  return (
    <>
      Nome:
      <input
        type="text"
        onChange={(e) => setNome(e.target.value)}
        value={nome}
      />
      <br />
      Olá {nome}!
    </>
  );
}
