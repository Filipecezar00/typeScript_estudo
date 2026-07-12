enum Status {
  Aberto = "Aberto",
  EmAndamento = "Em andamento",
  Resolvido = "Resolvido",
}

const tecnicos: string[] = ["João", "Pedro", "Maria"];

//Variavel utilizada para armazenar dados recebidos
// nos quais não sei o valor

let variavelAny: any = "";

function CriarChamado(titulo: string, prioridade: number): string {
  return `Chamado Criado com sucesso Titulo: \n ${titulo}\n Prioridade${prioridade}`;
}

function atualizarStatus(id: number, novoStatus: Status): Status {
  console.log(`Chamado de número ${id} alterado com sucesso!`);
  return novoStatus;
}

console.log(CriarChamado("Erro no Banco de dados", 3));
console.log("Novo Status:", atualizarStatus(404, Status.EmAndamento));
