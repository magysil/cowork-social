# Reporte de Bugs – Cowork Social

Este documento contiene los bugs identificados durante el proceso de exploratory testing.

---

## BUG-001: Acceso al feed sin autenticación

**Severidad:** Alta <br>
**Prioridad:** Alta <br>
**Estado:** Open <br>
**Encontrado en:** v0.1.0 <br>
**Navegador:** Chrome <br>
**Device:** Desktop <br>

### 📝 Descripción:

El sistema permite acceder al feed (/feed) sin que el usuario haya iniciado sesión, exponiendo contenido que debería estar protegido.

### 🔁 Steps to Reproduce

1. Abrir la aplicación
2. Navegar directamente a `/feed`
3. Observar el acceso al contenido

### ✅ Expected Behavior

* El sistema debería requerir autenticación
* Redirigir a `/login` si el usuario no está autenticado

### ❌ Actual Behavior

* Se permite el acceso al feed sin autenticación

### 📸 Evidence


📸 Screenshot:
![Feed sin login](/qa/QA-03-bug-reports/screenshots/bug-001-feed-sin-login.png)

🎥 Video:
[Ver video](/qa/QA-03-bug-reports/screenshots/bug-001-feed-sin-login.mp4)
<video src="/qa/QA-03-bug-reports/screenshots/bug-001-feed-sin-login.mp4" width="100%" controls>
  Feed sin login
</video>


### 🛠 Workarounds

* Ninguno

### 📂 Categoría

 Seguridad

### 📌 Additional Notes

Se recomienda implementar protección de rutas (route guards) para evitar el acceso a usuarios no autenticados a vistas protegidas como el feed..

---

## BUG-002: Acceso al perfil sin autenticación

**Severidad:** Alta <br>
**Prioridad:** Alta<br>
**Estado:** Open<br>
**Encontrado en:** v0.1.0<br>
**Navegador:** Chrome<br>
**Device:** Desktop<br>

### 📝 Descripción

El perfil del usuario (/profile/me) es accesible sin iniciar sesión.

### 🔁 Steps to Reproduce

1. Navegar a `/profile/me`
2. Observar que el perfil carga sin autenticación

### ✅ Expected Behavior

* El acceso al perfil debería requerir login

### ❌ Actual Behavior

* El perfil es visible sin autenticación

### 📸 Evidence

📸 Screenshot:
![Acceso al perfil sin login](/qa/QA-03-bug-reports/screenshots/bug-002-profile-sin-login.png)

🎥 Video:
[Ver video](/qa/QA-03-bug-reports/screenshots/bug-002-profile-sin-login.mp4)
<video src="/qa/QA-03-bug-reports/screenshots/bug-002-profile-sin-login.mp4" width="100%" controls></video>

### 🛠 Workarounds

* Ninguno

## 📂 Categoría 

Seguridad

### 📌 Additional Notes

Se recomienda aplicar control de acceso a rutas privadas para evitar exposición de información del usuario.

---

## BUG-003: Login no implementa autenticación real

**Severidad:** Alta<br>
**Prioridad:** Alta<br>
**Estado:** Open<br>
**Encontrado en:** v0.1.0<br>
**Navegador:** Chrome<br>
**Device:** Desktop<br>

### 📝 Descripción

El login permite ingresar con cualquier credencial y no valida usuarios reales.

### 🔁 Steps to Reproduce

1. Ir a `/login`
2. Ingresar cualquier email y contraseña
3. Enviar formulario

### ✅ Expected Behavior

* Validación de credenciales contra backend
* Mostrar error si las credenciales son incorrectas

### ❌ Actual Behavior

* Se permite acceso con cualquier dato
* Mensaje: "Login funcional pendiente de implementar"

### 📸 Evidence

📸 Screenshot:
![Login no implementa autenticación real](/qa/QA-03-bug-reports/screenshots/bug-003-login-no-auth.png)

🎥 Video:
[Ver video](/qa/QA-03-bug-reports/screenshots/bug-003-login-no-auth.mp4)
<video src="/qa/QA-03-bug-reports/screenshots/bug-003-login-no-auth.mp4" width="100%" controls></video>

### 🛠 Workarounds

* Ninguno

### 📂 Categoría 

Funcional

### 📌 Additional Notes

Se recomienda implementar autenticación real y manejo de errores para credenciales inválidas.

---

## BUG-004: Botones del feed no ejecutan acciones

**Severidad:** Alta<br>
**Prioridad:** Alta<br>
**Estado:** Open<br>
**Encontrado en:** v0.1.0<br>
**Navegador:** Chrome<br>
**Device:** Desktop<br>

### 📝 Descripción

Los botones principales del feed (nueva publicación, me gusta, comentar, compartir) no ejecutan ninguna acción.

### 🔁 Steps to Reproduce

1. Ir a `/feed`
2. Hacer clic en:

   * Nueva publicación
   * Me gusta
   * Comentar
   * Compartir

### ✅ Expected Behavior

* Cada botón debería ejecutar su acción correspondiente

### ❌ Actual Behavior

* Ninguno de los botones responde

### 📸 Evidence

📸 Screenshot:
![Botones del feed no funcionan](/qa/QA-03-bug-reports/screenshots/bug-004-botones-feed.png)

🎥 Video:
[Ver video](/qa/QA-03-bug-reports/screenshots/bug-004-botones-feed.mp4)
<video src="/qa/QA-03-bug-reports/screenshots/bug-004-botones-feed.mp4" width="100%" controls></video>

### 🛠 Workarounds

* Ninguno

### 📂 Categoría 

Funcional

### 📌 Additional Notes

Las funcionalidades del feed parecen no estar implementadas o no están conectadas a lógica funcional.

---

## BUG-005: Página de recuperación de contraseña retorna error 404

**Severidad:** Media<br>
**Prioridad:** Media<br>
**Estado:** Open<br>
**Encontrado en:** v0.1.0<br>
**Navegador:** Chrome<br>
**Device:** Desktop<br>

### 📝 Descripción
El enlace de recuperación de contraseña redirige a una página inexistente.

### 🔁 Steps to Reproduce

1. Ir a `/login`
2. Hacer clic en "Olvidé mi contraseña"

### ✅ Expected Behavior

* Redirigir a una página funcional de recuperación de contraseña

❌ Actual Behavior

* Se muestra un error 404

### 📸 Evidence

📸 Screenshot:
![Página de recuperación de contraseña no existe](/qa/QA-03-bug-reports/screenshots/bug-005-404-forgot.png)

🎥 Video:
[Ver video](/qa/QA-03-bug-reports/screenshots/bug-005-404-forgot.mp4)
<video src="/qa/QA-03-bug-reports/screenshots/bug-005-404-forgot.mp4" width="100%" controls></video>

### 🛠 Workarounds

* Ninguno

### 📂 Categoría

Navegación

### 📌 Additional Notes 
 
Se recomienda implementar la vista de recuperación de contraseña o remover temporalmente el enlace.

---

## BUG-006: Edición de perfil no funcional

**Severidad:** Media<br>
**Prioridad:** Media<br>
**Estado:** Open<br>
**Encontrado en:** v0.1.0<br>
**Navegador:** Chrome<br>
**Device:** Desktop<br>

### 📝 Descripción

El botón **Editar perfil** cambia a estado de guardado, pero no permite modificar los campos del usuario.


### 🔁 Steps to Reproduce

1. Ir a `/profile/me`
2. Hacer clic en "Editar perfil"
3. Intentar modificar campos

### ✅ Expected Behavior

- Los campos del perfil deberían habilitarse para edición  
- Permitir guardar los cambios realizados  

### ❌ Actual Behavior

- Los campos no se pueden editar  
- El botón cambia de estado pero no ejecuta acción  

### 📸 Evidence

📸 Screenshot:
![No se puede editar perfil](/qa/QA-03-bug-reports/screenshots/bug-006-profile-no-funcional.png)

🎥 Video:
[Ver video](/qa/QA-03-bug-reports/screenshots/bug-006-profile-no-funcional.mp4)
<video src="/qa/QA-03-bug-reports/screenshots/bug-006-profile-no-funcional.mp4" width="100%" controls></video>

### 🛠 Workarounds

- Ninguno  

### 📂 Categoría

Funcional  

### 📌 Additional Notes

Posible falta de implementación del estado editable o conexión de inputs del formulario.

---

## BUG-007: Inconsistencia entre estadísticas y contenido del perfil

**Severidad:** Baja<br>
**Prioridad:** Baja<br>
**Estado:** Open<br>
**Encontrado en:** v0.1.0<br>
**Navegador:** Chrome<br>
**Device:** Desktop<br>

### 📝 Descripción

El perfil muestra estadísticas de publicaciones (ej: "45 publicaciones"), pero no se visualiza contenido en la sección de publicaciones.

### 🔁 Steps to Reproduce

1. Ir a `/profile/me`  
2. Revisar estadísticas  
3. Revisar sección de publicaciones  

### ✅ Expected Behavior

- Las publicaciones visibles deberían coincidir con las estadísticas  

### ❌ Actual Behavior

- Se muestran estadísticas sin contenido real  

### 📸 Evidence

📸 Screenshot:
![Estadisticas del perfil inconsistentes ](/qa/QA-03-bug-reports/screenshots/bug-007-profile-datos-inconsistentes.png)

🎥 Video:
[Ver video ](/qa/QA-03-bug-reports/screenshots/bug-007-profile-datos-inconsistentes.mp4)
<video src="/qa/QA-03-bug-reports/screenshots/bug-007-profile-datos-inconsistentes.mp4" width="100%" controls></video>


### 🛠 Workarounds

- Ninguno  

### 📂 Categoría

Usabilidad  

### 📌 Additional Notes

Podría tratarse de datos mock no sincronizados o falta de renderizado de publicaciones.