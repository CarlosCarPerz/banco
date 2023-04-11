import {Cliente} from './Cliente.js'
//import {CuentaCorriente} from './CuentaCorriente.js';
//import {CuentaAhorro} from './cuentaAhorro.js';
import {Cuenta} from './Cuenta.js';

const cliente = new Cliente('Leonardo', '123445', '2121212');
const cliente2 = new Cliente('Maria', '20202', '09876');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001', 0);
const cuentaDeMaria = new Cuenta(cliente2, '2', '002', 0);

const cuentaAhorroLeonardo = new Cuenta(cliente, '9090', '001', 0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retiroDeCuenta(50);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(250);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retiroDeCuenta(150);
console.log(cuentaAhorroLeonardo.verSaldo());