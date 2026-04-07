# QA-02 – Automated Tests (Cypress)

## 📌 Descripción

Este módulo contiene pruebas automatizadas End-to-End (E2E) utilizando **Cypress** para validar los flujos principales de la aplicación **Cowork Social**.

El objetivo es verificar el comportamiento funcional del sistema desde la perspectiva del usuario.

---

## 🧪 Flujos cubiertos

Se implementaron pruebas para los siguientes flujos críticos:

* Registro de usuario
* Inicio de sesión
* Navegación entre páginas
* Acceso al feed
* Visualización de perfil
* Acceso sin autenticación (detección de bugs)

---

## ⚙️ Tecnologías utilizadas

* Cypress
* JavaScript
* Node.js

---

## 🚀 Instalación

1. Navegar a la carpeta del proyecto:

```bash
cd qa/QA-02-automated-tests
```

2. Inicializar proyecto:

```bash
npm init -y
```

3. Instalar Cypress:

```bash
npm install --save-dev cypress
```

---

## ▶️ Ejecución de pruebas

### Modo interactivo:

```bash
npx cypress open
```

### Modo headless:

```bash
npx cypress run
```

---

## 🌐 Configuración

Archivo `cypress.config.js`:

```js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: true,
  },
})
```

⚠️ Asegúrate de que el frontend esté corriendo:

```bash
npm start
```

---

## 📁 Estructura de tests

```bash
cypress/e2e/
 ├── access.cy.js 
 ├── feed.cy.js 
 ├── login.cy.js
 ├── navigation.cy.js
 ├── profile.cy.js
 └── register.cy.js
```

---

## 📸 Evidencias

Cypress genera automáticamente:

* Screenshots en `cypress/screenshots/`
* Videos en `cypress/videos/`

---

## ⚠️ Notas importantes


* La aplicación permite acceso sin autenticación, lo cual es considerado un issue de seguridad.

---

## ✅ Conclusión

Las pruebas automatizadas permiten validar los flujos principales del sistema y detectar inconsistencias entre el comportamiento esperado y el actual.

Se recomienda:

* Implementar autenticación real
* Corregir funcionalidades no operativas
* Integrar testing automatizado en el flujo de desarrollo (CI/CD)
