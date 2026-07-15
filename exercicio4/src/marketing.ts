interface Lead {
  readonly id: string;
  email: string;
  [campoExtra: string]: any;
}

function processarLead(dadosBrutos: any): void {
  const conversaoLead = dadosBrutos as Lead;
  console.log(
    `O Lead ${conversaoLead.id} foi registrado como ${conversaoLead.email}`,
  );
}

const formularioEbook = {
  id: "Lead1",
  email: "lead1@gmail.com",
  interesse: "Programação",
  nivel: "Iniciante",
};

const formularioContato = {
  id: "Lead2",
  email: "Lead2@gmail.com",
  telefone: "11-99999-9999",
  tamanhoEmpresa: "100 pessoas",
};

processarLead(formularioEbook);
console.log("\n");
processarLead(formularioContato);
