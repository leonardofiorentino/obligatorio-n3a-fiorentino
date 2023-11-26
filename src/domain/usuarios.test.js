import {usuarios} from './usuarios.js';

test('Crear instancia de Usuario', () => {
  const u = new usuarios('p', 'p@g.com', '0');
  expect(u).toBeInstanceOf(usuarios);
  expect(u.nombre).toBe('p');
  expect(u.correo).toBe('p@g.com');
  expect(u.contrasena).toBe('0');
});



