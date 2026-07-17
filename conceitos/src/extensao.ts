let numero = 23;
let nome = "Paulo";
console.log(nome.length);

function cumprimentar(nome: string): string {
  return `Olá, ${nome}!`;
}

cumprimentar("João");

interface Exemplo {
  nome: string;
  idade: number;
}

let example: Exemplo = {
  nome: "Cirilo",
  idade: 1234,
};
