# Informe de testing 
Proyecto asignado: [https://github.com/leonardofiorentino/obligatorio-n3a-fiorentino.git]

## Test de sistema
Se hace un testing funcional, nos se ve un flujo y se ven inconsistencias en el proyecto.
El sistema crea un usuario, y crea un pronostico que valida con datos ya ingresados del partido.
Esta prueba se hace correctamente, se crea el usuario, y se genera una validación, que hace que el pronostico emboque o no, y despliega un mensaje en los dos casos correctamente.
De lo analizado en analisis del inicio del proyecto hay faltantes, se nota que falto horas de RRHH, hay fechas del proyecto que no estuvieron acorde al trabajo que se solicitó.
Hay una clara separacion de la logica de la interfaz, el problema esta resuelto en el dominio, cuando la interfaz solo tiene botones y cajas de texto.

## Reporte de issues
Se generan issues para dejar constancia de bugs del sistema. 
Issues ingresados:
*Estetica en la interfaz
*Label con descripcion de grupo y no existe creacon de grupo
*botones Pronostico
*Interface con errores de visual

## Informe de calidad del sistema
El sistema no esta completo, pero podemos decir que sin ver la estetica de la interfaz, se ve que tiene consistencia lo que realiza, y tiene test unitario en las clases usuarios y pronosticos

## Reflexión
El testing se hizo general donde no hay funcionamiento general en base a los requisitos y lo que se pidió en las entrevistas y en el diseño.
No se ve funcionamiento ni relacion entre el ingreso de usuarios y los pronosticos.
Se puede ver el funcionamiento de el ingreso de los datos con los controles que se hacen y las pruebas de testing unitario lo hace correctamente y evidencia que lo que ingresa es correcto. 
El funcionamiento no es correcto, faltan la creacion de grupos, la lista de usuarios, y la generacion de pronosticos para varios partidos.


