import {usuarios} from './usuarios.js';

// Prueba para verificar si la clase Usuarios se instancia correctamente
test('Crear instancia de Usuarios', () => {
    const listaUsuarios = new usuarios();
    expect(listaUsuarios).toBeDefined();
    expect(listaUsuarios).toBeInstanceOf(usuarios);
});

// Prueba para verificar si se puede agregar un usuario correctamente
test('Agregar usuario a la lista', () => {
    const listaUsuarios = new usuarios();
    listaUsuarios.agregarUsuario('Ejemplo', 'ejemplo@example.com', 'contrasena123');
    expect(listaUsuarios.listaUsuarios).toHaveLength(1);

    const usuario = listaUsuarios.listaUsuarios[0];
    expect(usuario).toEqual({
        nombre: 'Ejemplo',
        correo: 'ejemplo@example.com',
        contrasena: 'contrasena123'
    });
});