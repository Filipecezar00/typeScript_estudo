const id_pedido = document.getElementById("id_pedido") as HTMLInputElement;
const nome_cliente = document.getElementById(
  "nome_cliente",
) as HTMLInputElement;
const input_valor_total = document.getElementById(
  "valor_total",
) as HTMLInputElement;
const cupom_desconto = document.getElementById(
  "cupom_de_desconto",
) as HTMLInputElement;

interface PedidoDTO {
  readonly id: number;
  nome: string;
  valor_total: number;
  cupom: string | null | undefined;
}

class CaixaLoja {
  private saldoTotal: number = 0;
  public processarPedido(pedido: PedidoDTO): void {
    let valor_total: number = Number(input_valor_total.value);

    if (pedido.cupom) {
      valor_total = valor_total * 0.9;
    }
    this.saldoTotal += valor_total;
  }
  public obterSaldo(): number {
    return this.saldoTotal;
  }
}
