import React from "react";
import { Item } from "./item";

interface ListaProps {
  children: string;
  itens: Item[];
}

export function Lista(props: ListaProps) {
  const lis = props.itens.map((item) => (
    <li key={item.id}>{item.descricao}</li>
  ));
  return (
    <div>
      <h1>{props.children}</h1>
      <ul>{lis}</ul>
    </div>
  );
}
