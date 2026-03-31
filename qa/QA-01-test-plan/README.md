# 🚀 QA Testing: Proyecto Cowork Social

Este repositorio centraliza la documentación de aseguramiento de calidad (QA) para la plataforma **Cowork Social**. El objetivo principal de esta fase es evaluar la estabilidad funcional, la navegación y la experiencia de usuario (UX) del frontend.

---

## 📋 Resumen de la Documentación

El proceso de testing se articula a través de tres documentos estratégicos:

### 1. [Estrategia de Testing](./TEST_STRATEGY.md)
Define el marco de trabajo y el alcance de las pruebas.
* **Objetivo:** Evaluar la calidad y estabilidad funcional mediante pruebas manuales y exploratorias.
* **Alcance:** Incluye navegación, registro, login, feed, perfil y diseño responsive.
* **Fuera de Alcance:** Lógica de backend, persistencia de datos e integraciones externas no implementadas.
* **Riesgos:** Se identificó acceso a rutas protegidas sin autenticación y botones de interfaz sin acciones vinculadas.

### 2. [Casos de Prueba (Test Cases)](./TEST_CASES.md)
Detalla los **15 escenarios** validados en la aplicación.
* **Módulos Cubiertos:** Navegación General, Autenticación, Seguridad, Feed, Perfil y Recuperación de Contraseña.
* **Hallazgos Críticos:**
    * **Seguridad:** El sistema permite el acceso al Feed (TC-08) y al Perfil (TC-09) sin previa autenticación.
    * **Funcionalidad:** Los botones de interacción en el feed (likes, comentarios) no ejecutan acciones (TC-11).
    * **Navegación:** La recuperación de contraseña redirige actualmente a un Error 404 (TC-14).

### 3. [Matriz de Compatibilidad](./COMPATIBILITY_MATRIX.md)
Registra el comportamiento del software en diferentes entornos.
* **Navegador:** Validado en Google Chrome bajo entorno Windows.
* **Diseño Responsive:** Los elementos se adaptan correctamente, sin desbordamiento de texto ni superposición de componentes en vista móvil.

---

## 🛠️ Metodología y Herramientas

* **Tipo de Testing:** Manual, Funcional, UI/UX y Exploratorio.
* **Ambiente de Pruebas:** Localhost:3000 utilizando Chrome DevTools y consola del navegador.
* **Criterios de Salida:** Las pruebas finalizan al ejecutar todos los casos definidos y documentar los bugs identificados.

---

## ⚠️ Estado del Proyecto
Actualmente, la aplicación presenta una interfaz sólida y responsive, pero requiere atención inmediata en la **lógica de seguridad (protección de rutas)** y en la **implementación de funcionalidades interactivas** en el feed para cumplir con los estándares mínimos de producción.

---
> **Nota:** Esta documentación refleja el estado de la aplicación en su fase de desarrollo frontend.