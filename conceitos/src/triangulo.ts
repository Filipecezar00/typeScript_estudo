import { FiguraGeometrica } from "./FiguraGeometrica";
export class Triangulo implements FiguraGeometrica {
  nome: string;
  private base: number;
  private altura: number;

  constructor(nome: string, base: number, altura: number) {
    this.nome = nome;
    this.base = base;
    this.altura = altura;
  }
  public area(): number {
    return (this.base * this.altura) / 2;
  }
}
