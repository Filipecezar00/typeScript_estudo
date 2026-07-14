function imprimirNome(individuo: {
  prenome: string;
  sobrenome: string;
  idade: number;
}) {
  const nome = individuo.prenome + " " + individuo.sobrenome;
  console.log(`Meu nome é ${nome}`);
}
let alguem = {
  prenome: "Ana",
  sobrenome: "Silva",
  idade: 19,
};
imprimirNome(alguem);
