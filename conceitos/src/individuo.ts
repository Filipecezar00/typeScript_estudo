export class Individuo {
  constructor(protected readonly _nome: string) {}

  public cumprimentar(): void {
    console.log(`Oi, meu nome é ${this._nome}`);
  }

  public setNome(novoNome: string): void {}

  public getNome(): string {
    return this._nome;
  }
}
