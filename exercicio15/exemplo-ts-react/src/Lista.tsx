import React from "react";
import { Item } from "./item";

interface ListaProps {
  itens: Item[];
}

export function Lista(props: ListaProps) {
  const lis = props.itens.map((item) => (
    <li key={item.id}>{item.descricao}</li>
  ));
  return <ul>{lis}</ul>;
}
