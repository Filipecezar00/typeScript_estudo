namespace SobreClasses {
  class Individuo {
    constructor(protected readonly _nome: string) {}

    public cumprimentar(): void {
      console.log(`Oi, meu nome é ${this._nome}`);
    }

    public setNome(novoNome: string): void {}

    public getNome(): string {
      return this._nome;
    }
  }

  class Estudante extends Individuo {
    public cumprimentar(): void {
      console.log(`Oi, eu sou um estudante. Meu nome é ${this._nome}`);
    }
  }

  class Funcionario extends Individuo {}

  let funcionario1 = new Funcionario("Marta");
  funcionario1.cumprimentar();
}
