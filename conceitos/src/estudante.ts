import { Individuo } from "./individuo";
export class Estudante extends Individuo {
  public cumprimentar(): void {
    console.log(`Oi, eu sou um estudante. Meu nome é ${this._nome}`);
  }
}
