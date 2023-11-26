
import {pronosticos} from './pronosticos.js';


// Prueba para verificar si la clase Pronosticos se instancia correctamente
test('Crear instancia de Pronosticos', () => {
    const listaPronosticos = new pronosticos();
    expect(listaPronosticos).toBeDefined();
    expect(listaPronosticos).toBeInstanceOf(pronosticos);
});

// Prueba para verificar si se puede agregar un pronóstico correctamente
test('Agregar pronóstico a la lista', () => {
    const listaPronosticos = new pronosticos();
    listaPronosticos.agregarPronostico(2, 1);
    expect(listaPronosticos.listaPronosticos).toHaveLength(1);

    const pronostico = listaPronosticos.listaPronosticos[0];
    expect(pronostico).toEqual({
        golesCuadro1: 2,
        golesCuadro2: 1
    });
});