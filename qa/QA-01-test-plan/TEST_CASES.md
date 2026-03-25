# Casos de Prueba – Cowork Social

Este documento describe los casos de prueba diseñados para validar el comportamiento funcional, la navegación y la experiencia de usuario de la aplicación Cowork Social.

## 🧭 Módulo: Navegación General

### TC-01 – Acceso a la página principal

**Descripción:** Verificar que la página principal cargue correctamente.

**Pasos:**

1. Abrir la aplicación
2. Acceder a la URL principal /

**Resultado esperado:**

- La página principal se carga correctamente
- Se visualiza el navbar
- Se muestran los botones principales

**Prioridad:** Alta
**Tipo:** Navegación
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

### TC-02 – Navegación desde el Navbar

**Descripción:** Verificar navegación de las opciones del navbar.

**Pasos:**

1. Hacer clic en "Feed"
2. Hacer clic en "Perfil"
3. Hacer clic en "Login"
4. Hacer clic en el nombre de la red social

**Resultado esperado:**

- Cada opción redirige a su página correspondiente

**Prioridad:** Alta
**Tipo:** Navegación
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail
---

### TC-03 – Registro de usuario con datos válidos

**Descripción:** Verificar registro de usuario.

**Pasos:**

1. Ir a la página Register
2. Completar el formulario con datos válidos
3. Hacer clic en registrarse

**Resultado esperado:**

- El sistema redirige a `/login`

**Prioridad:** Alta
**Tipo:** Funcional
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail
---

### TC-04 – Validación de campos vacíos en registro

**Descripción:** Verificar que no se puedan enviar campos vacíos.

**Pasos:**

1. Ir a /Register
2. Dejar campos vacíos
3. Intentar enviar formulario

**Resultado esperado:**

- El formulario no se envía
- Aparecen mensajes de validación en los campos obligatorios

**Prioridad:** Alta
**Tipo:** Validación de formulario
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

### TC-05 – Validación de contraseña

**Descripción:** Verificar que la contraseña tenga mínimo 8 caracteres.

**Pasos:**

1. Ingresar contraseña menor a 8 caracteres
2. Intentar registrarse

**Resultado esperado:**

- El formulario muestra un mensaje de error indicando que la contraseña no cumple con los requisitos

**Prioridad:** Alta
**Tipo:** Validación de formulario
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail
---

## 🔐 Módulo: Autenticación

### TC-06 – Inicio de sesión

**Descripción:** Verificar comportamiento del login.

**Pasos:**

1. Ir a `/login`
2. Ingresar:
   - email: test@example.com
   - password: Password123
3. Hacer clic en "Iniciar sesión"

**Resultado esperado:**

- El sistema autentica al usuario
- Redirección al feed /feed

**Resultado Actual:**

- Aparece mensaje:
"Login funcional pendiente de implementar. Redirigiendo al feed"
- Redirección a `/feed`

**Prioridad:** Alta
**Tipo:** Funcional
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

### TC-07 – Intento de login con campos vacíos

**Descripción:** Verificar validación de campos en login.

**Pasos:**

- Ir a /login
- Dejar los campos vacíos
- Intentar enviar el formulario

**Resultado esperado:**

- El formulario no se envía
- Aparecen validaciones

**Prioridad:** Alta
**Tipo:** Validación del formulario
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---
## 🔒 Módulo: Seguridad / Acceso

### TC-08 – Acceso al Feed sin autenticación

**Descripción:** Verificar acceso directo al feed sin iniciar sesión.

**Pasos:**

1. Ir a `/feed` sin iniciar sesión

**Resultado esperado:**

- El sistema debería bloquear acceso
- Redirigir al login

**Resultado actual:**

- Se permite acceso al feed sin autenticación

**Prioridad:** Alta
**Tipo:** Seguridad
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

### TC-09 – Acceso al perfil sin autenticación

**Descripción:** Verificar acceso directo al perfil.

**Pasos:**

1. Acceder a /profile/me sin iniciar sesión

**Resultado esperado:**

- El sistema debería requerir autenticación

**Resultado actual:**

- Permite acceso al perfil sin autenticación

**Prioridad:** Alta
**Tipo:** Seguridad
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

 ## 📰 Módulo: Feed

### TC-10 – Acceso al Feed

**Descripción:** Verificar visualización del feed.

**Pasos:**

- Navegar a /feed

**Resultado esperado:**

- Se muestran publicaciones en el feed
- Interfaz visible correctamente

**Prioridad:** Alta
**Tipo:** Funcional
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

### TC-11 – Funcionalidad de botones en Feed

**Descripción:** Verificar comportamiento de los botones del feed..

**Pasos:**

1. Ir a `/feed`
2. Intentar usar:

- Nueva publicación
- Me gusta
- Comentar
- Compartir

**Resultado esperado:**

- Las acciones deberían ejecutarse correctamente

**Resultado actual:**

- Los botones no realizan ninguna acción

**Prioridad:** Media
**Tipo:** Funcional
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

## 👤 Módulo: Perfil

### TC-12 – Visualización del perfil

**Descripción:** Verificar que el perfil del usuario se muestre correctamente.

**Pasos:**

- Navegar a /profile/me

**Resultado esperado:**

- Se muestra la información del perfil del usuario

**Prioridad:** Alta
**Tipo:** Funcional
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

### TC-13 – Edición de perfil 

**Descripción:** Verificar funcionalidad de edición de perfil. 

**Pasos:** 
1. Navegar a `/profile/me` 
2. Hacer clic en **Editar perfil** 

**Resultado esperado:** 
- Los campos del perfil se habilitan para edición 

**Prioridad:** Media 
**Tipo:** Funcional 
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

## 🔁 Módulo: Recuperación de contraseña

### TC-14 – Página olvidé contraseña

**Descripción:** Verificar acceso a recuperación de contraseña.

**Pasos:**

1. Ir a `/login`
2. Hacer clic en "Olvidé mi contraseña"

**Resultado esperado:**

- Página de recuperación

**Resultado actual:**

- Error 404

**Prioridad:** Media 
**Tipo:** Navegación 
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail

---

## 📱 Módulo: UI / Responsive

### TC-15 – Responsive design

**Descripción:** Verificar comportamiento del diseño en dispositivos móviles.

**Pasos:**

1. Abrir DevTools
2. Cambiar a vista móvil
3. Navegar entre páginas

**Resultado esperado:**

- Elementos se adaptan correctamente
- Texto no se desborda
- El navbar permanece visible

**Prioridad:** Media 
**Tipo:** UI / Responsive 
**Estado:** ⬜ Not Run | ✅ Pass | ❌ Fail