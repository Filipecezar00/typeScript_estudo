import { IItemCarrinho, ICupomDesconto } from "../dist/Interfaces";
class CarrinhoDeCompras<T extends IItemCarrinho> {
  private itens: T[] = [];
  private cupom: ICupomDesconto | null = null;
  private historico: T[][] = [];

  public adicionarItem(item: T): void {
    this.historico.push(this.itens.map((item) => ({ ...item })));

    let itemExistente = this.itens.find((i) => i.id === item.id);

    if (itemExistente) {
      itemExistente.quantidade += item.quantidade;
    } else {
      this.itens.push(item);
    }
  }
  public removerItem(id: string | number): void {
    this.historico.push(this.itens.map((item) => ({ ...item })));
    this.itens = this.itens.filter((item) => item.id !== id);
  }
  public aplicarCupom(cupom: ICupomDesconto): void {
    this.cupom = cupom;
  }
  public desfazer(): boolean {
    if (this.historico.length === 0) {
      return false;
    }
    let item = this.historico.pop();
    this.itens = item;
    return true;
  }
  public calcularTotal(): number {
    let total = this.itens.reduce(
      (acumulador, item) => acumulador + item.preco * item.quantidade,
      0,
    );

    if (this.cupom != null) {
      let desconto = total * (this.cupom.porcentagem / 100);
      return total - desconto;
    }
    return total;
  }
}
