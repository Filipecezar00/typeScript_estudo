import { Individuo } from "./individuo";
export class Funcionario extends Individuo {
  public cumprimentar(): void {
    console.log(`Oi, eu sou um estudante. Meu nome é ${this._nome}`);
  }
}
