class Personagens {
  protected nome: string;
  public pontosDeVida: number = 100;
  constructor(nome: string, pontosDeVida: number) {
    this.nome = nome;
    this.pontosDeVida = pontosDeVida;
  }
  public atacar() {
    console.log(`${this.nome} realizou um ataque básico`);
  }
}

class Guerreiro extends Personagens {
  protected forca: number = 50;
  constructor(nome: string, forca: number = 50) {
    super(nome, 100);
    this.forca = forca;
  }
  public atacar(): void {
    console.log(
      `${this.nome} atacou com sua espada causando ${this.forca} de dano!`,
    );
  }
}

const personagemGenerico = new Personagens("Camponês", 100);
personagemGenerico.atacar();

const aragorn = new Guerreiro("Aragorn", 80);
aragorn.atacar();
