interface Individuo {
  prenome: string;
  sobrenome: string;
  idade: number;
}
function imprimirNome(individuo: Individuo) {
  const nome = individuo.prenome + " " + individuo.sobrenome;
  console.log(`Meu nome é ${nome}`);
}
let alguem = {
  prenome: "Ana",
  sobrenome: "Silva",
  idade: 19,
};
imprimirNome(alguem);
