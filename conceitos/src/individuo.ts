namespace SobreClasses {
  class Individuo {
    private nome: string;
    constructor(oNome: string) {
      this.nome = oNome;
    }

    public cumprimentar(): void {
      console.log(`Oi, meu nome é ${this.nome}`);
    }

    public setNome(novoNome: string): void {
      this.nome = novoNome;
    }

    public getNome(): string {
      return this.nome;
    }
  }

  let maria = new Individuo("Maria");
  maria.cumprimentar();

  maria.setNome("Joao");

  console.log("O nome do individuo é " + maria.getNome());
}
