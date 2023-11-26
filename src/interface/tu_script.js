
import {usuario} from '../domain/usuario.js';
import {Pronosticos} from '../domain/pronostico.js';
// eslint-disable-next-line no-unused-vars



// Agregar goles al cuadro 1 y al cuadro 2
var goles1 = 6;
var goles2 = 1;
// eslint-disable-next-line no-unused-vars
function mostrarFormulario() {
    var formulario = document.getElementById("formularioRegistro");
    formulario.style.display = "block";
}
// eslint-disable-next-line no-unused-vars
function mostrarFormulariop() {
    var contenido = document.getElementById("contenido");
    contenido.innerHTML = ""; // Limpiar el contenido HTML

    var formularioPronosticos = document.createElement("div");
    formularioPronosticos.innerHTML = `
        <div class="form-group">
            <label for="golesCuadro1">Goles Cuadro 1:</label>
            <input type="number" class="form-control" id="golesCuadro1" placeholder="Ingrese los goles del Cuadro 1">
        </div>
        <div class="form-group">
            <label for="golesCuadro2">Goles Cuadro 2:</label>
            <input type="number" class="form-control" id="golesCuadro2" placeholder="Ingrese los goles del Cuadro 2">
        </div>
        <button type="button" class="btn btn-primary" onclick="registrarPronostico()">Registrar Pronóstico</button>
    `;
    contenido.appendChild(formularioPronosticos);
}

// eslint-disable-next-line no-unused-vars
function registrarUsuario() {
    var nombre = document.getElementById("pedro").value;
    var correo = document.getElementById("p@g.com").value;
    var contrasena = document.getElementById("0").value;

    // Crear un objeto Usuario con los datos del formulario
    var usuarioObj = new usuario(nombre, correo, contrasena);
    ///contenido.innerHTML = ""
    // Mostrar los datos del usuario en algún lugar del documento
    mostrarDatosUsuario(usuarioObj);

    // Ocultar el formulario después de registrar al usuario
    var formulario = document.getElementById("formularioRegistro");
    formulario.style.display = "none";
    // Limpiar el formulario de usuario
    // eslint-disable-next-line no-undef
    limpiarFormularioUsuario();
    alert("El usuario fue creado con éxito.");
}
// eslint-disable-next-line no-unused-vars
function registrarPronostico() {
    const golesCuadro1 = document.getElementById("golesCuadro1").value;
    const golesCuadro2 = document.getElementById("golesCuadro2").value;
    const pronostico = new Pronosticos(golesCuadro1, golesCuadro2);

    // Validar el pronóstico
    if (validarPronostico(pronostico.golesCuadro1, pronostico.golesCuadro2)) {
        // Calcular la diferencia
        var resultadoGoles1 = pronostico.golesCuadro1 - goles1;
        var resultadoGoles2 = pronostico.golesCuadro2 - goles2;
        alert("El pronóstico fue exitoso. Ganaste.");
        // Mostrar los resultados del pronóstico
        mostrarResultadoPronostico(resultadoGoles1, resultadoGoles2);
    } else {
        alert("El pronóstico no fue exitoso. Vuelve a intentarlo.");
    }
}
function validarPronostico(golesCuadro1, golesCuadro2) {
    // Puedes agregar aquí cualquier lógica de validación adicional si es necesario
    return golesCuadro1 == goles1 && golesCuadro2 == goles2;
}

function mostrarDatosUsuario(usuarioObj) {
    // Obtener el contenedor donde se mostrarán los datos del usuario
    // eslint-disable-next-line no-unused-vars
    var datosUsuarioContainer = document.getElementById("datosUsuario");

    // Construir el HTML con los datos del usuario
    // eslint-disable-next-line no-unused-vars
    var contenidoHTML = `
        <p><strong>Nombre:</strong> ${usuarioObj.nombre}</p>
        <p><strong>Correo:</strong> ${usuarioObj.correo}</p>
        <p><strong>Contraseña:</strong> ${usuarioObj.contrasena}</p>
    `;
}

function mostrarResultadoPronostico(resultadoGoles1, resultadoGoles2) {
    contenido.innerHTML = "" 
    var contenido = document.getElementById("contenido");

    // Crear el contenedor para mostrar los resultados
    var resultadoPronosticoContainer = document.createElement("div");
    resultadoPronosticoContainer.innerHTML = `
        <h3>Resultado del Pronóstico</h3>
        <p><strong>Diferencia de Goles Cuadro 1:</strong> ${resultadoGoles1}</p>
        <p><strong>Diferencia de Goles Cuadro 2:</strong> ${resultadoGoles2}</p>
    `;

    // Mostrar el contenedor con los resultados
    contenido.appendChild(resultadoPronosticoContainer);
}

        
        // Limpiar el formulario después de mostrar los resultados
        limpiarFormulario();

    // eslint-disable-next-line no-unused-vars
    function limpiarFormulario() {
        // Limpiar el contenido de las cajas de texto
        //contenido.innerHTML = ""
        document.getElementById("golesCuadro1").value = "";
        document.getElementById("golesCuadro2").value = "";
    }
     // Mostrar los datos en el contenedor
     // eslint-disable-next-line no-undef
     datosPronosticosContainer.innerHTML = contenidoHTML;

     // Mostrar el contenedor

     // eslint-disable-next-line no-undef
     datosPronosticosContainer.style.display = "block";