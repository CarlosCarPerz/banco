import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

//const cliente2 = new Cliente('Maria', '20202', '09876');

const empleado = new Empleado('Elisa Patiño','123456',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, '12345'));

/* const gerente = new Gerente('Abdulia Luna','14564656',12000);
const director = new Director('Carlos Carvajal','111',15000); */

const cliente = new Cliente('Leonardo', '123445', '2121212');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente, '1111'));