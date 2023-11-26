import {Usuario} from './usuario.js';

test('Crear instancia de Usuario', () => {
  const usuario = new Usuario('p', 'p@g.com', '0');
  expect(usuario).toBeInstanceOf(Usuario);
  expect(usuario.nombre).toBe('p');
  expect(usuario.correo).toBe('p@g.com');
  expect(usuario.contrasena).toBe('0');
});



