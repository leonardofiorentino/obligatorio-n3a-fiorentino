 export class pronosticos {
  constructor() {
      this.listaPronosticos = [];
  }

  // Método para agregar un pronóstico a la lista
  agregarPronostico(golesCuadro1, golesCuadro2) {
      const pronostico = {
          golesCuadro1: golesCuadro1,
          golesCuadro2: golesCuadro2
      };

      this.listaPronosticos.push(pronostico);
  }
}
