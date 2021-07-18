import React, { useEffect, useState } from "react";

export default function App2() {
  const [nome, setNome] = useState(undefined);

  useEffect(() => {
    // console.log("Efeito: ", nome);
    if (nome === undefined) {
      setNome(sessionStorage.getItem("nome") || "");
    } else {
      sessionStorage.setItem("nome", nome);
    }
  }, [nome]);

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
