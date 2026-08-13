import { FiguraGeometrica } from "./FiguraGeometrica";
export class Quadrado implements FiguraGeometrica {
  nome: string;
  private lado: number;
  constructor(nome: string, lado: number) {
    this.nome = nome;
    this.lado = lado;
  }

  public area(): number {
    return this.lado * this.lado;
  }
}
