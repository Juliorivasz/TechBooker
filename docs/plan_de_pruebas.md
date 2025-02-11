# Plan de Testing  
## MVP Gestión de Dispositivos Tecnológicos en Instituciones Educativas

---

## 1. Introducción  

### 1.1 Objetivo del Plan de Testing  
El propósito de este plan es definir la estrategia de pruebas para evaluar la funcionalidad y estabilidad del MVP de la aplicación web de gestión de dispositivos tecnológicos en instituciones educativas. Se ejecutarán pruebas manuales y automatizadas para verificar el correcto funcionamiento de las funcionalidades clave.  

### 1.2 Alcance del Testing  

**Incluido en el alcance:**  
- **Pruebas de API:**  
  - Pruebas de autenticación y control de acceso.  
  - Creación, modificación y eliminación de entidades clave.  
  - Validación de respuestas ante escenarios positivos y negativos.  
- **Pruebas del frontend (en entorno local):**  
  - Evaluación manual del formulario de registro.  
  - Automatización de casos de prueba del formulario de registro, utilizando Python, Pytest y Playwright.  

**Incluido en el alcance de forma condicional:**   
- Pruebas End-to-End de funcionalidades además del registro, en caso de contar con una versión desplegada de la app y acceso a su UI y API.
- Validaciones directas en la base de datos, en caso de contar con una versión desplegada de la app y acceso a la base de datos. 

---

## 2. Estrategia de Testing  

### 2.1 Tipos de Pruebas a Realizar  

**Pruebas de API:**  
- Evaluación de funcionalidad y estructura de respuestas.  
- Manejo de errores y validaciones.  

**Pruebas del Frontend:**  
- Verificación del comportamiento del formulario de registro a partir de casos de prueba diseñados. 
- Automatización de validaciones del formulario de registro.

**Pruebas End-to-End:**
- Exploración y verificación de funcionalidades a través de testing exploratorio.

---

## 3. Herramientas a Utilizar  
- **Swagger** para pruebas manuales de API.  
- **Python, Pytest y Playwright** para la automatización de pruebas de frontend.  

---

## 4. Entregables  
- Casos de prueba para el formulario de registro.
- Reportes de pruebas manuales con hallazgos documentados.  
- Scripts de automatización para validación de formulario de registro.  
- Informes de sesiones de testing exploratorio (en caso de contar con la aplicación desplegada).
- Reporte final de pruebas con resumen de los principales hallazgos, observaciones y acciones a futuro.

---

## 5. Conclusión  
Este plan de testing define una estrategia para validar la funcionalidad y estabilidad del MVP mediante pruebas manuales y automatizadas. Se prioriza la evaluación del formulario de registro y la API, con posibilidad de ampliar el alcance si hay una versión desplegada. Los entregables garantizarán una documentación completa para la mejora del sistema.
