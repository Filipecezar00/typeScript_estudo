interface Individuo {
  prenome: string;
  sobrenome: string;
  idade?: number;
  readonly cidadeNatal: string;
}
function imprimirNome(individuo: Individuo) {
  const nome = individuo.prenome + " " + individuo.sobrenome;
  console.log(`Meu nome é ${nome}`);
  if (individuo.idade) {
    console.log(`Tenho ${individuo.idade} anos.`);
  }
  individuo.cidadeNatal = "Rio de Janeiro";
}
let alguem = {
  prenome: "Ana",
  sobrenome: "Silva",
  idade: 19,
  cidadeNatal: "São Paulo",
};
imprimirNome(alguem);
