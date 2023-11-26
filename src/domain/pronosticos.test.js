
import {Pronosticos} from './pronosticos.js';


test('Crear instancia de Pronosticos', () => {
  const pronosticos = new Pronosticos(6, 1);
  expect(pronosticos).toBeInstanceOf(Pronosticos);
  expect(pronosticos.golesCuadro1).toBe(6);
  expect(pronosticos.golesCuadro2).toBe(1);
});