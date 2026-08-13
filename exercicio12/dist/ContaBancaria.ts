class ContaBancaria {
  private static totalContas: number = 0;
  private titular: string;
  constructor(titular: string) {
    this.titular = titular;
    ContaBancaria.totalContas++;
  }
  public exibirTotalDeContas(): void {
    console.log(
      `Total de Contas Criadas até agora:${ContaBancaria.totalContas}`,
    );
  }
}

const conta1 = new ContaBancaria("pedro");
const conta2 = new ContaBancaria("aline");
const conta3 = new ContaBancaria("joao");
