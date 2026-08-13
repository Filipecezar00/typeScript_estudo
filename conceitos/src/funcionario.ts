import { Individuo } from "./individuo";
export class Funcionario extends Individuo {
  private salario: number;

  constructor(nome: string, oSalario: number) {
    super(nome);
    this.salario = oSalario;
  }

  public cumprimentar(): void {
    console.log(
      `Sou um funcionario. Meu nome é ${this._nome} Meu salario é ${this.salario}`,
    );
  }
}
