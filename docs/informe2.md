# Informe entrega 2

## Construcción

### Requerimientos implementados:

 **RF1: Registro de pronósticos:**
 - **Actor:** Usuario.
 - **Descripción:** Los usuarios deben poder registrar sus pronósticos para los partidos del campeonato. Para esto deben poder seleccionar los partidos específicos en los que desean pronosticar. Es importante tener en cuenta que una vez que arranque el partido no puede ser modificado el resultado.

**RF4: Tabla de puntos:**
 - **Actor:** Usuario.
 - **Descripción:** El sistema debe calcular automáticamente los puntos obtenidos por cada participante en función de la precisión de sus pronósticos. Debe mostrar una tabla de clasificación que enumere a los participantes en función de su puntuación total, ordenado de mayor a menor puntos, indicando la posicón en la tabla de cada participante.

 **F5: Creación de grupos/Ingresar a grupos:**
 - **Actor:** Usuario.
 - **Descripción:** El sistema debe permitir que los usuarios creen grupos como tambien ingresar a grupos ya creados. Esto permite tener varias tablas para competir en diferentes grupos por separado.

 **RF6: Crear usuario:**
 - **Actor:** Usuario.
 - **Descripción:** Para que cada persona pueda ser identificada con los resultados que ingresa la misma debera crear un usurario con contraseña, para que solo la persona tenga acceso.


### Librerias utilizadas:
- Libreria Bootstrap: Se utiliza para el diseño implementado al html.
- Libreria Jest: Se utiliza para realizar la pruebas unitarias y validar la cobertura de las pruebas.
- Libreria Eslint: Se utilizó para buscar y arreglar problemas ocasionado en javascript.


## Interfaz de usuario
En la parte de interfaces, solo tendremos index.html y main.js, una carpeta con logos, y el archivo de style.css.
En main.js tendra la programacion del lado del cliene la instansacion de las clases y la carga de datos para que el programa funcione. Esto se compone tambien de la programacion de creacion de grupo, de creacion de usuario, de resultados, , el html los link y la estructura estetica para ser llamado por el programa. La programacion con funciones, crea y ejecutan funciones para actualizar puntaje

## Codificación
Se divide en 'domain' 'interface'.
Domain: 
se programa es java script los archivos estan ordenados en nombreDeClase y nombreDeClasetest , y se organizan de la siguiente forma:
en el archivo nombreDeClase contiene la creacion de la clase.
nombreDeClase.Test contiene la instancia de las clases y carga con datos los atributos de las claes para que el programa funcione.




## Test unitario
En el domain tenemos cada clase con su respectiva clase que prueba el funcionamiento, es la forma de probar el correcto funcionamiento de los módulo antes de integrarlo con el resto del sistema. En cada caso de prueba unitario se hace por un método independiente.
Jest es un marco de pruebas muy poderoso para JavaScript. Su capacidad para realizar pruebas unitarias, pruebas de integración y pruebas de extremo a extremo contribuye significativamente a la calidad del código.
La implementación de pruebas unitarias con Jest que hemos hecho, ayuda a garantizar que las funciones y componentes individuales de la penca funcionen como se espera.


## Reflexión
Es muy potente trabajar con el enfoque dirigido por pruebas, que fomenta la creacion de pruebas en un ambiente de desarrollo y dirige el producto final hacia un codigo de altisima calidad. Es admirabla entender esta forma bastante nueva de trabajar creando continuamente por el desarrollador su propio control, automatizando así la verificacion continua.
En general, la combinación de Jest, ESLint y configuraciones en archivos JSON, JavaScript y CSS proporciona un entorno robusto para el desarrollo de software de alta calidad. La reflexión sobre su uso puede llevar a mejoras continuas en el código y en los procesos de desarrollo.
