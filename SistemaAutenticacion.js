export class SistemaAutenticacion {
    static login(usuario, clave) {
        return usuario.clave == clave;
    }

}