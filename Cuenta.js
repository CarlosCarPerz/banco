import { Cliente } from "./Cliente.js";
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

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
        this.#saldo += valor;
        return this.#saldo
    }

    retiroDeCuenta(valor, comision) {
        valor = valor * (1+comision/100);
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return this.#saldo
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