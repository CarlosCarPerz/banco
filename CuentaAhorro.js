export class CuentaAhorro
{
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
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