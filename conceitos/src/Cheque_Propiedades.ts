interface Individuo {
  prenome: string;
  [propName: string]: any;
}

function imprimirPrenome(individuo: Individuo) {
  return individuo.prenome;
}

let alguem = {
  prenome: "Ana",
  sobrenome: "Silva",
};

console.log(imprimirPrenome(alguem));
