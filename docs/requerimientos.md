# Documento de requerimientos de TechBooker

---

## 1. Introducción

### 1.1 Objetivo general del MVP

Diseñar y desarrollar una aplicación web para la gestión de dispositivos tecnológicos en instituciones educativas. Esta plataforma permitirá a las escuelas administrar de forma intuitiva el uso de recursos (como proyectores, televisores, equipos de sonido y aulas móviles), facilitando su reserva por parte del personal docente, asegurando su disponibilidad y optimizando su utilización.

---

### 1.2 Alcance

El alcance del MVP se centrará en la creación de una plataforma web funcional para la gestión de dispositivos tecnológicos en instituciones educativas. Los usuarios podrán autenticarse y acceder a funciones específicas según su rol: los administradores podrán gestionar el inventario de dispositivos, mientras que los docentes podrán consultar la disponibilidad y realizar reservas.

La interfaz será intuitiva, ofreciendo una experiencia de usuario simple y eficiente. El MVP no incluirá funcionalidades avanzadas pero sentará las bases para futuras mejoras y expansión.

---

## 2. Requerimientos funcionales

### 2.1 Funcionalidades incluidas en el MVP

#### Para la institución:

- **Creación de cuenta de institución:** Registro de la institución a través de un formulario, incluyendo la información de contacto y datos básicos.
- **Acceso a la plataforma:** Inicio de sesión con credenciales proporcionadas por el administrador.
- **Creación de cuentas de docentes:** Creación de cuentas de docentes a partir de un formulario de registro de usuarios, incluyendo generación de credenciales.
- **Gestión de usuarios:** Visualización, edición y eliminación de cuentas de docentes asociados a la Institución.
- **Gestión del catálogo de dispositivos:**
  - Registro de nuevos dispositivos, con especificación de características (modelo, marca, ubicación, etc.).
  - Modificación y eliminación de dispositivos existentes.
  - Asignación de categorías a los dispositivos (por ejemplo, audiovisual, informática, movilidad).
- **Cierre de sesión.**

#### Para el personal docente:

- **Acceso a la plataforma:** Inicio de sesión con credenciales proporcionadas por la institución.
- **Consulta de disponibilidad:** Visualización del calendario de disponibilidad de los dispositivos.
- **Administración de reservas:**
  - Selección de dispositivos y rango de fechas y horas deseadas.
  - Visualización de todas las reservas realizadas y su estado.
  - Cancelación de reservas.
- **Cierre de sesión.**

---

### 2.2 Funcionalidades excluidas del MVP

#### Para la institución:

- Recuperación y cambio de contraseña.
- Visualización de perfil y edición de datos de la cuenta de institución.
- Notificación de solicitudes de reserva: Envío de notificaciones por correo electrónico para informar de una petición de reserva.
- Configuración de la plataforma:
  - Establecimiento de políticas de reserva, como duraciones máximas y periodos de reserva.
  - Personalización de la interfaz con los colores y logo institucional.
- Generación de reportes de uso de los dispositivos.
- Administración de reservas:
  - Visualización de solicitudes de reserva.
  - Confirmación y rechazo de solicitudes de reserva.
  - Visualización de reservas confirmadas.
  - Cancelación de reservas confirmadas.

#### Para el personal docente:

- Notificación de confirmación o rechazo de reservas.
- Recuperación y cambio de contraseña.
- Visualización de perfil y edición de datos de la cuenta de docente.
- Edición de reservas.

---

### 2.3 Historias de usuario y criterios de aceptación

#### Historia de Usuario 1: Crear una cuenta de administrador

**Como** administrador de una institución,  
**quiero** registrar mis datos personales y los de la institución,  
**para** crear una cuenta con la cual acceder a la plataforma.

###### Criterios de Aceptación:

- Si los datos son válidos, se crea la cuenta de administrador y el administrador debe ser redirigido a la Home.
- Si los datos son inválidos, el sistema debe mostrar los mensajes de error correspondientes.
- **Nombre completo:**
  - Debe ser obligatorio.
  - Debe tener al menos una letra.
  - Longitud mínima: 3 caracteres; máxima: 100 caracteres.
  - Debe admitir espacios y caracteres especiales.
- **Email:**
  - Debe ser obligatorio.
  - Debe tener un formato válido de correo electrónico (ejemplo: nombre@dominio.com).
  - No debe repetirse en la base de datos.
- **Contraseña:**
  - Debe ser obligatorio.
  - Debe tener un mínimo de 8 caracteres.
  - Debe incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.
- **Confirmar contraseña:**
  - Debe ser obligatorio.
  - Debe coincidir exactamente con la contraseña ingresada.
- **Nombre de la institución:**
  - Debe ser obligatorio.
  - Debe tener al menos un carácter alfanumérico.
  - Longitud mínima: 3 caracteres.
- **Tipo de institución:** Debe seleccionarse de una lista desplegable con opciones predefinidas.
- **Nivel educativo:** Debe seleccionarse de una lista desplegable con opciones predefinidas.
- **Dirección:** Opcional.
- **Teléfono:** Opcional.
- **Sitio web:**
  - Opcional.
  - Debe validarse como una URL válida.
- **Logotipo:**
  - Opcional.
  - Debe aceptar solo formatos de imagen (JPG o PNG).
  - Tamaño máximo permitido: 2 MB.

---

#### Historia de usuario 2: Inicio de sesión con credenciales (institución)

**Como** administrador de una institución,  
**quiero** iniciar sesión en la plataforma con mis credenciales,  
**para** acceder a la homepage.

###### Criterios de Aceptación:

- El administrador debe ingresar su correo electrónico y contraseña.
- Si las credenciales son correctas, el administrador debe ser redirigido a la Home.
- Si las credenciales son incorrectas, el sistema debe mostrar un mensaje de error.

---

#### Historia de usuario 3: Panel de gestión de docentes

**Como** administrador de una institución,  
**quiero** acceder a un panel de gestión de docentes,  
**para** gestionar las funcionalidades relacionadas a docentes.

###### Criterios de Aceptación:

- El administrador debe poder navegar a una sección llamada “Administrar Usuarios” desde la Home.
- Dentro de esta sección, debe de haber un botón para Registrar Usuario (Historia de usuario 4).
- Dentro de esta sección, el administrador debe ver la lista de docentes registrados (Historia de usuario 6).

---

#### Historia de usuario 4: Registro de nuevo docente

**Como** administrador de una institución,  
**quiero** registrar nuevos docentes en la plataforma,  
**para** que puedan acceder y gestionar las reservas de dispositivos.

###### Criterios de Aceptación:

- El flujo para agregar un nuevo docente debe empezar al hacer click en “Registrar Usuario” desde la sección “Administrar Usuarios”.
- El administrador debe poder ingresar el nombre completo y correo electrónico del docente a registrar.

  **Nombre completo:**

  - Debe ser obligatorio. En caso de no cumplirse se debe mostrar un mensaje de error acorde.
  - Debe tener al menos una letra. En caso de no cumplirse se debe mostrar un mensaje de error acorde.
  - Longitud mínima: 3 caracteres; máxima: 100 caracteres. En caso de no cumplirse se debe mostrar un mensaje de error acorde.

  **Email:**

  - Debe ser obligatorio. En caso de no cumplirse se debe mostrar un mensaje de error acorde.
  - Debe tener un formato válido de correo electrónico (ejemplo: nombre@dominio.com). En caso de no cumplirse se debe mostrar un mensaje de error acorde.
  - No debe repetirse en la base de datos. En caso de no cumplirse se debe mostrar un mensaje de error acorde.

- El sistema debe generar una contraseña única para cada docente.
- El sistema debe almacenar los datos del docente en la base de datos.

---

#### Historia de usuario 5: Notificación de creación de cuenta de docente

**Como** administrador de una institución,  
**quiero** que el docente reciba un correo con sus credenciales,  
**para** que pueda acceder a la plataforma.

###### Criterios de Aceptación:

- El sistema debe enviar un correo electrónico con el usuario y la contraseña generados al docente.
- El correo debe contener un enlace para iniciar sesión en la plataforma.

---

#### Historia de usuario 6: Visualización y búsqueda de usuarios docentes

**Como** administrador de una institución,  
**quiero** poder ver los docentes registrados,  
**para** gestionarlos de manera eficiente.

###### Criterios de Aceptación:

- La sección “Administrar Usuarios” debe mostrar a los docentes registrados en la institución.
- La vista debe incluir paginación.
- El administrador debe poder realizar una búsqueda por nombre del docente. Todas las coincidencias parciales deben mostrarse.

---

#### Historia de usuario 7: Edición de cuentas de docentes

**Como** administrador de una institución,  
**quiero** poder editar la información de un docente,  
**para** mantener los datos actualizados.

###### Criterios de Aceptación:

- El administrador debe poder hacer click en un botón para editar los datos de un docente, desde la sección “Administrar usuarios”.
- El administrador debe poder editar los datos del docente (nombre, correo electrónico, etc.). Estos campos deben validarse de la misma manera que durante el registro.
- El sistema debe guardar los cambios realizados en la base de datos.

---

#### Historia de usuario 8: Eliminación de cuentas de docentes

**Como** administrador de una institución,  
**quiero** poder eliminar cuentas de docentes,  
**para** mantener el sistema actualizado.

###### Criterios de Aceptación:

- El administrador debe poder hacer click en un botón para eliminar la cuenta de un docente, desde la sección “Administrar usuarios”.
- El sistema debe eliminar los datos del docente de la base de datos.
- Si el Docente eliminado intenta iniciar sesión, el sistema debe mostrar un mensaje de error indicando que la cuenta ha sido eliminada.

---

#### Historia de usuario 9: Panel de administración de inventario

**Como** administrador de una institución,  
**quiero** acceder a un panel de administración de inventario,  
**para** gestionar las funcionalidades relacionadas a los dispositivos.

###### Criterios de Aceptación:

- El administrador debe poder navegar a una sección llamada “Administrar Inventario” desde la Home.
- Dentro de esta sección, debe de haber un botón para Registrar Dispositivo (Historia de usuario 10).
- Dentro de esta sección, el administrador debe ver la lista de dispositivos registrados (Historia de usuario 11).

---

#### Historia de usuario 10: Registro de nuevos dispositivos

**Como** administrador de una institución,  
**quiero** registrar nuevos dispositivos en el catálogo,  
**para** mantener actualizado el inventario de la institución.

###### Criterios de Aceptación:

- El flujo para agregar un nuevo dispositivo debe empezar al hacer click en “Registrar Dispositivo” desde la sección “Administrar Inventario”.
- El administrador debe poder ingresar los detalles del dispositivo: nombre, categoría, descripción y cantidad disponible.

  **Nombre completo:**

  - Debe ser obligatorio. En caso de no cumplirse, se debe mostrar un mensaje de error acorde.
  - Debe tener al menos un carácter alfanumérico. En caso de no cumplirse, se debe mostrar un mensaje de error acorde.

  **Categoría:**

  - Debe ser obligatorio. En caso de no cumplirse, se debe mostrar un mensaje de error acorde.
  - Debe seleccionarse de una lista predefinida.

  **Descripción:**

  - Debe ser opcional: El campo no es obligatorio.
  - Longitud máxima: 500 caracteres. En caso de exceder este límite, se debe mostrar un mensaje de error acorde.

  **Cantidad disponible:**

  - Debe ser obligatorio. En caso de no cumplirse, se debe mostrar un mensaje de error acorde.
  - Debe ser un número entero positivo: No se permiten valores negativos ni decimales. En caso de no cumplirse, se debe mostrar un mensaje de error acorde.
  - Debe estar dentro de un rango razonable (por ejemplo, entre 1 y 1000). En caso de exceder este rango, se debe mostrar un mensaje de error acorde.

- El sistema debe almacenar esta información en la base de datos.

---

#### Historia de usuario 11: Modificación de dispositivos existentes

**Como** administrador de una institución,  
**quiero** poder modificar la información de los dispositivos existentes,  
**para** mantener el inventario actualizado.

###### Criterios de Aceptación:

- El administrador debe poder hacer click en un botón para editar los datos de un dispositivo, desde la sección “Administrar Inventario”.
- El administrador debe poder editar los detalles de un dispositivo registrado (nombre, categoría, descripción y cantidad disponible, etc.). Estos campos deben validarse de la misma manera que durante el registro.
- El sistema debe guardar los cambios realizados en la base de datos.

---

#### Historia de usuario 12: Eliminación de dispositivos

**Como** administrador de una institución,  
**quiero** poder eliminar dispositivos del catálogo,  
**para** mantener el inventario actualizado.

###### Criterios de Aceptación:

- El administrador debe poder hacer click en un botón para eliminar un dispositivo, desde la sección “Administrar Inventario”.
- Si el dispositivo está reservado, al intentar eliminarlo el sistema debe mostrar un mensaje de advertencia indicando que no se puede eliminar un dispositivo reservado.
- Si el dispositivo no está reservado, al hacer click en el botón para eliminarlo, el sistema debe eliminar los datos del dispositivo de la base de datos.
- El administrador debe recibir una confirmación de que el dispositivo ha sido eliminado correctamente (si no está reservado).

---

#### Historia de usuario 13: Cierre de sesión (institución)

**Como** administrador de una institución,  
**quiero** poder cerrar sesión en la plataforma,  
**para** proteger mi cuenta.

###### Criterios de Aceptación:

- El administrador debe poder cerrar sesión desde cualquier página de la plataforma.
- Al cerrar sesión, el administrador debe ser redirigido a la página de inicio de sesión.

---

#### Historia de usuario 14: Inicio de sesión con credenciales (docente)

**Como** docente,  
**quiero** iniciar sesión en la plataforma utilizando mis credenciales proporcionadas por la institución,  
**para** acceder a la plataforma.

###### Criterios de Aceptación:

- El docente debe ingresar su correo electrónico y contraseña.
- Si las credenciales son correctas, el docente debe ser redirigido a la Home.
- Si las credenciales son incorrectas, el sistema debe mostrar un mensaje de error.
- Si el docente ha sido eliminado de la plataforma, el sistema debe mostrar un mensaje de error indicando que la cuenta ya no existe y redirigir al docente a la página de inicio de sesión.

---

#### Historia de usuario 15: Visualización de disponibilidad de dispositivos

**Como** docente,  
**quiero** poder ver la disponibilidad de los dispositivos,  
**para** saber cuándo están disponibles para su reserva.

###### Criterios de Aceptación:

- El docente debe poder ver un calendario con la disponibilidad de los dispositivos.
- El calendario debe mostrar las fechas y horas en que los dispositivos están disponibles.

---

#### Historia de usuario 16: Realización de reservas

**Como** docente,  
**quiero** poder realizar reservas de dispositivos,  
**para** gestionar el uso de los mismos.

###### Criterios de Aceptación:

- El docente debe poder seleccionar un dispositivo y un rango de fechas y horas para realizar una reserva.
- El sistema debe registrar la reserva y mostrar un mensaje de confirmación.

---

#### Historia de usuario 17: Visualización de reservas realizadas

**Como** docente,  
**quiero** ver todas mis reservas realizadas y su estado,  
**para** poder gestionarlas.

###### Criterios de Aceptación:

- El docente debe poder ver una lista de todas las reservas realizadas.
- La lista debe mostrar el dispositivo reservado, la fecha y hora, y el estado de la reserva.

---

#### Historia de usuario 18: Cancelación de reservas

**Como** docente,  
**quiero** poder cancelar mis reservas,  
**si ya no las necesito.**

###### Criterios de Aceptación:

- El docente debe poder cancelar una reserva antes de la fecha de inicio.
- El sistema debe actualizar el estado de la reserva a "cancelada".

---

#### Historia de usuario 19: Cierre de sesión (docente)

**Como** docente,  
**quiero** poder cerrar sesión en la plataforma,  
**para** proteger mi cuenta.

###### Criterios de Aceptación:

- El docente debe poder cerrar sesión desde cualquier página de la plataforma.
- Al cerrar sesión, el docente debe ser redirigido a la página de inicio de sesión.
