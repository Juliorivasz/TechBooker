# Reporte de Pruebas - Cierre de Testing de MVP de TechBooker

#### 06/02/2025

## Resumen

Este informe resume las actividades de testing realizadas para el MVP, incluyendo la ejecución de los casos de prueba diseñados, pruebas automatizadas y sesiones exploratorias. El objetivo fue evaluar la estabilidad y funcionalidad de las características principales antes del lanzamiento.

## Alcance de las Pruebas

- **Pruebas Funcionales:** Ejecución de casos de prueba para el formulario de registro.
- **Automatización de Pruebas:** Automatización de casos clave para el formulario de registro.
- **Pruebas Exploratorias:** Tres sesiones exploratorias cubriendo:
  - Registro de usuario administrador.
  - Home y sección Administrar Usuarios.
  - Administración de dispositivos y reservas.

## Resultados de las Pruebas

Enlaces a los documentos donde se detallan los resultados de las pruebas:

- [**Ejecución de casos de prueba y Reporte de errores**](https://docs.google.com/spreadsheets/d/19LkWInQ2YXLin8umcnOU1wKRYmZUQCjDfi3dZNQSTlg/edit?usp=sharing) (segunda y tercera pestaña)
- [**Informe de la sesión 1 de testing exploratorio** (registro de usuario administrador)](https://docs.google.com/document/d/1TnsYIl4gT0_byT4BfuSqrY1z46-pVVS5iwWZN1KGZ9w/edit?usp=sharing)
- [**Informe de la sesión 2 de testing exploratorio** (home y administración de usuarios)](https://docs.google.com/document/d/1004N9fxZebxVJ_4FA732yUqVCPugOvtTskBzw1OFKsE/edit?usp=sharing)
- [**Informe de la sesión 3 de testing exploratorio** (administración de dispositivos y reservas)](https://docs.google.com/document/d/1jWHR-zngn8-KKFkMLiP7_My8eb0kXtkEIkhczqSiwi4/edit?usp=sharing)

## Hallazgos Clave

### Formulario de Registro

- Un error recurrente indicaba que el teléfono ya estaba registrado, aunque se ingresaban números nuevos, lo que sugiere un problema en la validación del backend.
  - Este problema fue corregido posteriormente al ser comunicado a los desarrolladores. **Es necesario hacer testing de confirmación sobre este punto.**

### Gestión de Usuarios

- Se identificaron fallos críticos de seguridad que permiten a un administrador de una institución ver, eliminar y editar administradores y usuarios de otras instituciones.
- No se validan adecuadamente los datos en la edición de usuarios.
- Es posible modificar la contraseña de otro usuario sin autenticación adicional.

### Otros Módulos

- La gestión de reservas presenta errores al intentar realizar nuevas reservas y visualizar las existentes.
- La funcionalidad de búsqueda y filtrado en inventario y usuarios no opera correctamente, mostrando errores 404.
- Al recargar la página, se produce un error 404 en cualquier sección.
- Problemas en la carga de datos en la Home, mostrando mensajes de "Cargando..." de manera indefinida.
- La API y la UI presentan inconsistencias en la validación de datos, lo que permite registrar usuarios con información inválida en ciertos casos.

## Conclusión y Recomendaciones

- **Es prioritario corregir los fallos de seguridad en la gestión de usuarios** para evitar accesos y modificaciones indebidas.
- **Es fundamental revisar y corregir los errores en la gestión de reservas y administración de inventario.**
- **Es necesario optimizar la integración entre la UI y la API** para evitar inconsistencias en la carga y edición de datos.
- **Se deben mejorar los mensajes de error y validaciones.**

## Próximos Pasos

- Validar las correcciones implementadas por el equipo de desarrollo en las siguientes iteraciones.
- Ejecutar nuevas pruebas exploratorias en los módulos críticos para verificar estabilidad y funcionalidad.
- Mejorar la cobertura de pruebas automatizadas para agilizar futuras validaciones.
- Evaluar la necesidad de rediseñar ciertos procesos de validación en la UI y backend para mejorar la experiencia del usuario.
