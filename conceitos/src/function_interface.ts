interface FuncaoDeComputador {
  (abc: number, mensagem: string): boolean;
}

let computar;
computar = (abc: number, mensagem: string): boolean => {
  return true;
};

function fazerAlgumaCoisa(funcaodeComputar: FuncaoDeComputador) {
  const resultado = funcaodeComputar(123456, "Minha Mensagem");
}

fazerAlgumaCoisa(computar);
