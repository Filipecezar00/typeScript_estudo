function jogarErro(msg: string): never {
  throw new Error(msg);
}

function loopInfinito(): never {
  while (true) {}
}

function falha() {
  return jogarErro("Deu problema!");
}
