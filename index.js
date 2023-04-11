import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';

const cliente = new Cliente('Leonardo', '123445', '2121212');
const cliente2 = new Cliente('Maria', '20202', '09876');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '2', '002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9090', '001', 0);

console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(150);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retiroDeCuenta(50);
console.log(cuentaAhorroLeonardo.verSaldo());
