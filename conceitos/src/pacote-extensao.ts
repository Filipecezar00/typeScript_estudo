let numero = 23;

let nome = "Paulo";

console.log(nome.length);

function cumprimentar(mensagem: string): string {
  return `Olá, ${nome}`;
}

cumprimentar("João");

interface Exemplo {
  nome: string;
  idade: number;
}

let exemplo: Exemplo = {
  nome: "Um Nome",
  idade: 10,
};
