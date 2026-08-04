import { ContaBancaria } from "./classes/ContaBancaria.js";
const minhaConta = new ContaBancaria("Dev Junior", 500);
console.log(`CONTA CRIADA`);
console.log(`Titular: ${minhaConta.titular}`);
console.log(`Saldo inicial: R$ ${minhaConta.saldo.toFixed(2)}\n`);
console.log(`Depósito válido`);
minhaConta.depositar(250, "pix de freela");
console.log(`Saldo atual: R$ ${minhaConta.saldo.toFixed(2)}\n`);
console.log("Depósito Inválido (valor<=0)");
minhaConta.depositar(-50, "Deposito negativo");
console.log(`Saldo Atual: R$ ${minhaConta.saldo.toFixed(2)}\n`);
console.log("Saque válido");
minhaConta.sacar(150, "Pagamento conta de luz");
console.log(`Saldo atual: R$ ${minhaConta.saldo.toFixed(2)}\n`);
console.log("Saque maior que o saldo");
minhaConta.sacar(2000, "Compra de placa de vídeo");
console.log(`Saldo Atual: R$ ${minhaConta.saldo.toFixed(2)}\n`);
console.log(`Saque com valor Negativo`);
minhaConta.sacar(-300, "Tentativa de burlar o sistema");
console.log(`Saldo Atual: R$ ${minhaConta.saldo.toFixed(2)}\n`);
console.log("Extrato Bancário");
console.table(minhaConta.getHistorico());
console.log("\n Validação de Segurança (spread Operator)");
const extratoExterno = minhaConta.getHistorico();
extratoExterno.length = 0;
console.log(
  `Tamanho da lista recebida por fora após tentar apagar: ${extratoExterno.length}`,
);
console.log(
  `Tamanho do histórico REAL dentro da classe: ${minhaConta.getHistorico().length}`,
);
