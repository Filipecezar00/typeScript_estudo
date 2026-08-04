export class ContaBancaria {
    _titular;
    _saldo;
    constructor(_titular, _saldo = 0) {
        this._titular = _titular;
        this._saldo = _saldo;
    }
    _historico = [];
    get titular() {
        return this._titular;
    }
    get saldo() {
        return this._saldo;
    }
    depositar(valor, descricao) {
        if (valor <= 0) {
            console.log("O valor do deposito precisa ser positivo");
            return false;
        }
        this._saldo += valor;
        const transacao = {
            id: Date.now(),
            tipo: "DEPOSITO",
            data: new Date(),
            descricao: descricao,
            valor: valor,
        };
        this._historico.push(transacao);
        return true;
    }
    sacar(valor, descricao) {
        if (valor <= 0) {
            console.log("O valor do saque precisa ser maior que zero!");
            return false;
        }
        if (valor > this._saldo) {
            console.log("Saldo insuficiente para realizar o saque!");
            return false;
        }
        this._saldo -= valor;
        const transacao = {
            id: Date.now(),
            tipo: "SAQUE",
            data: new Date(),
            descricao: descricao,
            valor: valor,
        };
        this._historico.push(transacao);
        return true;
    }
    getHistorico() {
        let historico = [...this._historico];
        return historico;
    }
}
