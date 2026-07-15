"use strict";
function gerarFicha(aluno) {
    if (aluno.peso && aluno.altura) {
        const imc = Number(aluno.peso / aluno.altura ** 2);
        console.log(`${aluno.nome} seu imc é: ${imc}`);
    }
    else {
        console.log(`${aluno.nome} não foi possivel calcular seu IMC, informe o peso e a altura!`);
    }
}
const aluno = {
    nome: "Robson",
    idade: 23,
    peso: 67,
    altura: 178,
};
const aluno2 = {
    nome: "Luiz",
    idade: 15,
};
gerarFicha(aluno);
console.log("\n");
gerarFicha(aluno2);
