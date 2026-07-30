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
const form_cadastro = document.getElementById(
  "form_cadastro",
) as HTMLFormElement;
const container_valor_total = document.getElementById(
  "container_valor_total",
) as HTMLElement;
const historico_pedidos = document.getElementById(
  "historico_pedidos",
) as HTMLElement;

interface PedidoDTO {
  readonly id: number;
  nome: string;
  valor_total: number;
  cupom: string | null | undefined;
}

class CaixaLoja {
  private saldoTotal: number = 0;
  public processarPedido(pedido: PedidoDTO): void {
    let valor_total: number = Number(pedido.valor_total);

    if (pedido.cupom) {
      valor_total = valor_total * 0.9;
    }
    this.saldoTotal += valor_total;
  }
  public obterSaldo(): number {
    return this.saldoTotal;
  }
}
const caixa = new CaixaLoja();

form_cadastro.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    let id_value: number = Number(id_pedido.value);
    let cliente_value: string = nome_cliente.value;
    let valor_total_value: number = Number(input_valor_total.value);
    let cupom_value =
      cupom_desconto.value.trim() !== "" ? cupom_desconto.value : null;

    let novoPedido: PedidoDTO = {
      id: id_value,
      nome: cliente_value,
      valor_total: valor_total_value,
      cupom: cupom_value,
    };
    caixa.processarPedido(novoPedido);

    container_valor_total.innerHTML = `R$${caixa.obterSaldo().toFixed(2)}`;
    historico_pedidos.innerHTML += `<pre>
    Id:${novoPedido.id} Nome:${novoPedido.nome} Valor total:R$ ${novoPedido.valor_total} Cupom: ${novoPedido.cupom}
    </pre>
    `;
  } catch (error) {
    console.error("ERRO AO EXECUTAR EVENTO DO FORMULÁRIO:", error);
  }
});
