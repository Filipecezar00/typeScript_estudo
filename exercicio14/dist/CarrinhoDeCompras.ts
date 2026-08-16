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
}
