interface Individuo {
  prenome: string;
  sobrenome: string;
  idade?: number;
}
function imprimirNome(individuo: Individuo) {
  const nome = individuo.prenome + " " + individuo.sobrenome;
  console.log(`Meu nome é ${nome}`);
  if (individuo.idade) {
    console.log(`Tenho ${individuo.idade} anos.`);
  }
}
let alguem = {
  prenome: "Ana",
  sobrenome: "Silva",
  idade: 19,
};
imprimirNome(alguem);
