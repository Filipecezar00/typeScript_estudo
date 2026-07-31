namespace SobreClasses {
  class Individuo {
    private nome: string;
    constructor(oNome: string) {
      this.nome = oNome;
    }

    public cumprimentar(): void {
      console.log(`Oi, meu nome é ${this.nome}`);
    }
  }

  let maria = new Individuo("Maria");
  maria.cumprimentar();
}
