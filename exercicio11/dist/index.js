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
const pagamento_pix = new PagamentoPix("seu-email@dominio.com");
const pagamento_cartao = new PagamentoCartao("001108009000789");
pagamento_pix.processar(150.0);
pagamento_cartao.processar(89.9);
