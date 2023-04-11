export class Cuenta 
{
    #cliente;
    numero;
    agencia;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
        this.#saldo += valor;
        return this.#saldo
    }

    retiroDeCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return this.#saldo
        } else {
            console.log("Saldo insufuciente");
        }
    }

    verSaldo() {
        return this.#saldo
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retiroDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}