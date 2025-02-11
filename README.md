# ClassKit

> **Aplicación web para la gestión de dispositivos tecnológicos en instituciones educativas.**

Este repositorio contiene el código fuente del MVP de **ClassKit**, una plataforma que permite a las instituciones educativas administrar de forma intuitiva sus recursos tecnológicos (proyectores, televisores, equipos de sonido, etc.) y facilitar la reserva de estos por parte del personal docente.

## Tabla de Contenidos

1. [Descripción General](#descripción-general)  
2. [Características Principales del MVP](#características-principales-del-mvp)  
3. [Requerimientos Funcionales](#requerimientos-funcionales)  
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)  
5. [Instalación y Configuración](#instalación-y-configuración)
6. [Pruebas](#pruebas)

---

## Descripción General

**ClassKit** es una iniciativa desarrollada por un equipo compuesto por 4 desarrolladores frontend, 3 desarrolladores backend, 1 tester QA y 1 team leader. El MVP se diseñó para automatizar la gestión de la reserva y disponibilidad de dispositivos tecnológicos en escuelas e instituciones educativas.

Este proyecto busca:
- **Optimizar** la administración y uso de recursos tecnológicos.
- **Facilitar** la reserva de dispositivos por parte de los docentes.
- **Centralizar** la gestión del inventario y de usuarios (docentes) en una única plataforma.

> Este MVP forma parte de la primera etapa de simulación laboral de No Country. 

> La aplicación fue ideada a partir de la experiencia de uno de los integrantes del equipo, quien realiza estas gestiones de manera manual y reconoce el valor de automatizarlas.
---

## Características Principales del MVP

- **Registro de Institución**: Permite crear una cuenta de administrador registrando los datos básicos y de contacto de la institución.


- **Inicio de Sesión**: Disponible para administradores y docentes.


- **Gestión de Docentes**: Registro y generación de credenciales para docentes.


- **Gestión de Inventario**: Registro, edición y eliminación de dispositivos.


- **Reservas**: Consulta de disponibilidad, realización y cancelación de reservas.


- **Cierre de Sesión**: Disponible para administradores y docentes.

> **Nota:** El MVP excluye funcionalidades como recuperación de contraseña, administración de reservas y reportes de uso, entre otros que se consideran para futuras mejoras.

---

## Requerimientos Funcionales

Para conocer con detalle las **historias de usuario**, **criterios de aceptación** y las funcionalidades incluidas/excluidas en este MVP, consulta el [Documento de Requerimientos](docs/requerimientos.md) disponible en la carpeta `docs`.

---

## Tecnologías Utilizadas

- **Frontend**: React, TypeScript, Tailwind.


- **Backend**: Java con Spring Boot, gestión de dependencias con Maven.


- **Base de Datos**: MySQL.


- **Seguridad:** SpringSecurity, autenticación con JWT (JSON Web Tokens)

  
- **Documentación:** Swagger/OpenAPI


- **Contenedores / Orquestación**: Docker y Docker Compose.


- **Pruebas Automatizadas**: Python, Pytest y Playwright.

---

## Instalación y Configuración

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/...
   cd ...

---


## Pruebas

El [Plan de Pruebas](docs/plan_de_pruebas.md), los [Casos de Prueba](docs/casos_de_prueba.md) y el [Reporte de Pruebas](docs/reporte_de_pruebas.md) se encuentran en la carpeta `docs`.

Las **pruebas automatizadas** están ubicadas en la carpeta `tests`. Dentro de esta carpeta encontrarás un **README** específico que describe en detalle la forma de ejecutar los scripts de automatización utilizando Python, Pytest y Playwright.  

