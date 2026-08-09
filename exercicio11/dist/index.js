"use strict";
class PagamentoPix {
    chavePix;
    constructor(chavePix) {
        this.chavePix = chavePix;
    }
    processar(valor) {
        console.log(`Pagamento de R$:${valor.toFixed(2)} cobrado na chave pix: ${this.chavePix}`);
        return true;
    }
}
class PagamentoCartao {
    numeroCartao;
    constructor(numeroCartao) {
        this.numeroCartao = numeroCartao;
    }
    processar(valor) {
        const ultimos4Digitos = this.numeroCartao.slice(-4);
        console.log(`
        Pagamento de R$ ${valor.toFixed(2)} cobrado no cartão final
        ${ultimos4Digitos}
    `);
        return true;
    }
}
class CaixaEletronico {
    fecharVenda(formaDePagamento, valor) {
        let retorno = formaDePagamento.processar(valor);
        if (retorno === true) {
            console.log("Venda finalizada com sucesso!");
        }
    }
}
const caixa = new CaixaEletronico();
const pagamento_pix = new PagamentoPix("seu-email@dominio.com");
const pagamento_cartao = new PagamentoCartao("001108009000789");
caixa.fecharVenda(pagamento_pix, 150.0);
caixa.fecharVenda(pagamento_cartao, 89.9);
