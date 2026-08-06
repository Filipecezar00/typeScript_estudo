namespace SobreClasses {
  class Individuo {
    constructor(private readonly _nome: string) {}

    public cumprimentar(): void {
      console.log(`Oi, meu nome é ${this._nome}`);
    }

    public setNome(novoNome: string): void {}

    public getNome(): string {
      return this._nome;
    }
  }

  class Estudante extends Individuo {}

  class Funcionario extends Individuo {}

  let estudante1 = new Estudante("Pedro");
  estudante1.cumprimentar();

  let funcionario1 = new Funcionario("Marta");
  funcionario1.cumprimentar();
}
