import { CupomDTO } from "../interfaces/CupomDTO";

export class GerenciadorCupons {
  private cupons: CupomDTO[] = [];
  public adicionarCupom(cupom: CupomDTO): void {
    if (cupom.descontoPercentual < 0 || cupom.descontoPercentual > 100) {
      console.log(`Erro ao processar percentual de desconto`);
      return;
    }
    this.cupons.push(cupom);
  }
  public aplicarDesconto(codigoCupom: string, valorCompra: number): number {
    const cupomEncontrado = this.cupons.find(
      (cupom) => cupom.codigo == codigoCupom,
    );
    let dataAtual: Date = new Date();
    if (!cupomEncontrado) {
      return valorCompra;
    }
    if (
      cupomEncontrado.validade !== null &&
      dataAtual > cupomEncontrado.validade
    ) {
      return valorCompra;
    }

    let valorDesconto =
      valorCompra * (cupomEncontrado.descontoPercentual / 100);
    return (valorCompra = valorCompra - valorDesconto);
  }
}
