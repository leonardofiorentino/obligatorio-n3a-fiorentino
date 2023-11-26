export class usuarios {
    constructor() {
        this.listaUsuarios = [];
    }

    agregarUsuario(nombre, correo, contrasena) {
        const nuevoUsuario = {
            nombre: nombre,
            correo: correo,
            contrasena: contrasena
        };

        this.listaUsuarios.push(nuevoUsuario);
        console.log('Usuario registrado:', nuevoUsuario);
    }
}