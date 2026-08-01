namespace SobreClasses {
  class Individuo {
    constructor(private _nome: string) {}

    public cumprimentar(): void {
      console.log(`Oi, meu nome é ${this._nome}`);
    }

    public setNome(novoNome: string): void {
      this._nome = novoNome;
    }

    public getNome(): string {
      return this._nome;
    }
  }

  let maria = new Individuo("Maria");
  maria.cumprimentar();

  maria.setNome("Joao");

  console.log("O nome do individuo é " + maria.getNome());
}
