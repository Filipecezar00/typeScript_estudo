import { TransacaoDTO } from "../interfaces/TransacaoDTO";

export class ContaBancaria {
  constructor(
    private _titular: string,
    private _saldo: number = 0,
  ) {}
  private _historico: TransacaoDTO[] = [];
  get titular(): string {
    return this._titular;
  }
  get saldo(): number {
    return this._saldo;
  }

  public depositar(valor: number, descricao: string): boolean {
    if (valor <= 0) {
      console.log("O valor do deposito precisa ser positivo");
      return false;
    }
    this._saldo += valor;

    const transacao: TransacaoDTO = {
      id: Date.now(),
      tipo: "DEPOSITO",
      data: new Date(),
      descricao: descricao,
      valor: valor,
    };
    this._historico.push(transacao);
    return true;
  }

  public sacar(valor: number, descricao: string): boolean {
    if (valor <= 0) {
      console.log("O valor do saque precisa ser maior que zero!");
      return false;
    }

    if (valor > this._saldo) {
      console.log("Saldo insuficiente para realizar o saque!");
      return false;
    }

    this._saldo -= valor;

    const transacao: TransacaoDTO = {
      id: Date.now(),
      tipo: "SAQUE",
      data: new Date(),
      descricao: descricao,
      valor: valor,
    };
    this._historico.push(transacao);
    return true;
  }

  public getHistorico(): TransacaoDTO[] {
    let historico = [...this._historico];
    return historico;
  }
}
