import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo', '123445', '2121212');
const cliente2 = new Cliente('Maria', '20202', '09876');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

console.log(cliente);
console.log(cliente);
console.log(cuentaDeLeonardo);
console.log(cuentaDeMaria);

/* let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log("El saldo actual de leonardo " + saldo);
 */



/* cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();
console.log("El saldo actual de Maria " + saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log("El saldo actual de leonardo " + saldoLeonardo); */