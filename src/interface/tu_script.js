
import {usuarios} from '../domain/usuarios.js';
import {pronosticos} from '../domain/pronosticos.js';


const listaUsuarios = new usuarios();
const formulario = document.getElementById('registroForm');
// Crear una instancia de la clase Pronosticos
const listaPronosticos = new pronosticos();
const pronosticoForm = document.getElementById('pronosticoForm');

formulario.addEventListener('submit', function(event) {
    // Prevenir el comportamiento por defecto del formulario (evitar recarga de la página)
    event.preventDefault();

    // Obtener valores de las cajas de texto
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Verificar que se hayan ingresado valores
    if (nombre && correo && contrasena) {
        // Agregar el usuario a la listaUsuarios
        listaUsuarios.agregarUsuario(nombre, correo, contrasena);

        // Limpiar las cajas de texto después de registrar
        document.getElementById('nombre').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('contrasena').value = '';
              // Mostrar la información de los usuarios en el formulario
              mostrarInformacionUsuarios();  
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
// Función para mostrar la información de los usuarios en el formulario
function mostrarInformacionUsuarios() {
    const infoUsuariosContainer = document.getElementById('infoUsuarios');
    infoUsuariosContainer.innerHTML = '';

    listaUsuarios.listaUsuarios.forEach(usuario => {
        const usuarioInfo = document.createElement('p');
        usuarioInfo.textContent = `Nombre: ${usuario.nombre}, Correo: ${usuario.correo}, Contraseña: ${usuario.contrasena}`;
        infoUsuariosContainer.appendChild(usuarioInfo);
    });
}
window.cargarDatos = function() {
    // Obtener valores de las cajas de texto
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Verificar que se hayan ingresado valores
    if (nombre && correo && contrasena) {
        // Agregar el usuario a la listaUsuarios
        listaUsuarios.agregarUsuario(nombre, correo, contrasena);

        // Mostrar mensaje exitoso
        alert('Datos cargados exitosamente en la clase Usuarios.');

        // Mostrar la información de los usuarios en el formulario
        mostrarInformacionUsuarios();
    } else {
        alert('Por favor, complete todos los campos.');
    }
};


pronosticoForm.addEventListener('submit', function(event) {
    // Prevenir el comportamiento por defecto del formulario (evitar recarga de la página)
    event.preventDefault();

    // Obtener valores de las cajas de texto
    const golesCuadro1 = parseInt(document.getElementById('golesCuadro1').value, 10);
    const golesCuadro2 = parseInt(document.getElementById('golesCuadro2').value, 10);

    // Verificar que se hayan ingresado valores numéricos
    if (!isNaN(golesCuadro1) && !isNaN(golesCuadro2)) {
        // Agregar el pronóstico a la listaPronosticos
        listaPronosticos.agregarPronostico(golesCuadro1, golesCuadro2);

        // Limpiar las cajas de texto después de registrar
        document.getElementById('golesCuadro1').value = '';
        document.getElementById('golesCuadro2').value = '';

        // Mostrar la información de los pronósticos en el formulario
        mostrarInformacionPronosticos();
    } else {
        alert('Por favor, ingrese valores numéricos para los goles.');
    }
});

// Función para mostrar la información de los pronósticos en el formulario
function mostrarInformacionPronosticos() {
    const infoPronosticosContainer = document.getElementById('infoPronosticos');
    infoPronosticosContainer.innerHTML = '';

    listaPronosticos.listaPronosticos.forEach(pronostico => {
        const pronosticoInfo = document.createElement('p');
        pronosticoInfo.textContent = `Goles Cuadro 1: ${pronostico.golesCuadro1}, Goles Cuadro 2: ${pronostico.golesCuadro2}`;
        infoPronosticosContainer.appendChild(pronosticoInfo);
    });
}

// Función para cargar los datos en la clase Pronosticos y mostrar mensaje exitoso
window.cargarPronostico = function() {
    // Obtener valores de las cajas de texto
    const golesCuadro1 = parseInt(document.getElementById('golesCuadro1').value, 10);
    const golesCuadro2 = parseInt(document.getElementById('golesCuadro2').value, 10);
    if (golesCuadro1 === 2 && golesCuadro2 === 1) {
        alert("¡Felicidades! Has acertado el pronóstico. y se ha cargado exitosamente")
    }
    if (!isNaN(golesCuadro1) && !isNaN(golesCuadro2)) {
        // Agregar el pronóstico a la listaPronosticos
        listaPronosticos.agregarPronostico(golesCuadro1, golesCuadro2);
        alert("¡Lo siento! Has perdido la oportunidad.");
        mostrarInformacionPronosticos();
    } else {
        alert('Por favor, ingrese valores numéricos para los goles.');
    }
};

