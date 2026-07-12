"use strict";
var Status;
(function (Status) {
    Status["Aberto"] = "Aberto";
    Status["EmAndamento"] = "Em andamento";
    Status["Resolvido"] = "Resolvido";
})(Status || (Status = {}));
const tecnicos = ["João", "Pedro", "Maria"];
//Variavel utilizada para armazenar dados recebidos
// nos quais não sei o valor
let variavelAny = "";
function CriarChamado(titulo, prioridade) {
    return `Chamado Criado com sucesso Titulo: \n ${titulo}\n Prioridade${prioridade}`;
}
function atualizarStatus(id, novoStatus) {
    console.log(`Chamado de número ${id} alterado com sucesso!`);
    return novoStatus;
}
