import React from "react";
import { Item } from "./item";
import { Lista } from "./Lista.tsx";

const listaDeItens: Item[] = [
  {
    id: 1,
    descricao: "Limpar o quarto",
  },
  {
    id: 2,
    descricao: "Limpar a sala",
  },
  {
    id: 3,
    descricao: "Limpar o banheiro",
  },
];

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lista itens={listaDeItens} />
      </header>
    </div>
  );
}
