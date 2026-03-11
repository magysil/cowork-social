# Casos de Prueba – Cowork Social

## TC-01 – Acceso a la página principal

**Descripción:** Verificar que la página principal cargue correctamente.

**Pasos:**

1. Abrir la aplicación
2. Acceder a la URL principal

**Resultado esperado:**

- La página principal se carga
- Se visualiza el navbar
- Se muestran los botones principales

---

## TC-02 – Navegación desde el Navbar

**Descripción:** Verificar navegación de las opciones del navbar.

**Pasos:**

1. Hacer clic en "Feed"
2. Hacer clic en "Perfil"
3. Hacer clic en "Login"
4. Hacer clic en el nombre de la red social

**Resultado esperado:**

- Cada opción redirige a su página correspondiente

---

## TC-03 – Registro de usuario

**Descripción:** Verificar registro de usuario.

**Pasos:**

1. Ir a la página Register
2. Completar el formulario
3. Hacer clic en registrarse

**Resultado esperado:**

- El sistema redirige a `/login`

---

## TC-04 – Validación de campos vacíos en registro

**Descripción:** Verificar que no se puedan enviar campos vacíos.

**Pasos:**

1. Ir a Register
2. Dejar campos vacíos
3. Intentar enviar formulario

**Resultado esperado:**

- El formulario no se envía
- Aparecen validaciones

---

## TC-05 – Validación de contraseña

**Descripción:** Verificar que la contraseña tenga mínimo 8 caracteres.

**Pasos:**

1. Ingresar contraseña menor a 8 caracteres
2. Intentar registrarse

**Resultado esperado:**

- El formulario muestra error

---

## TC-06 – Inicio de sesión

**Descripción:** Verificar comportamiento del login.

**Pasos:**

1. Ir a `/login`
2. Ingresar:
   - email: test@example.com
   - password: Password123
3. Enviar formulario

**Resultado esperado:**

- Aparece mensaje:
"Login funcional pendiente de implementar. Redirigiendo al feed"
- Redirección a `/feed`

---

## TC-07 – Acceso al Feed sin autenticación

**Descripción:** Verificar acceso directo al feed.

**Pasos:**

1. Ir a `/feed` sin iniciar sesión

**Resultado esperado:**

- El sistema debería bloquear acceso

**Resultado actual:**

- Se permite acceso al feed

---

## TC-08 – Acceso al perfil sin autenticación

**Descripción:** Verificar acceso directo al perfil.

**Pasos:**

1. Ir a `/profile/me`

**Resultado esperado:**

- Debería requerir login

**Resultado actual:**

- Permite acceso sin autenticación

---

## TC-09 – Funcionalidad de botones en Feed

**Descripción:** Verificar botones del feed.

**Pasos:**

1. Ir a `/feed`
2. Intentar usar:

- Nueva publicación
- Me gusta
- Comentar
- Compartir

**Resultado esperado:**

- Las acciones deberían ejecutarse

**Resultado actual:**

- No realizan ninguna acción

---

## TC-10 – Página olvidé contraseña

**Descripción:** Verificar acceso a recuperación de contraseña.

**Pasos:**

1. Ir a `/login`
2. Hacer clic en "Olvidé mi contraseña"

**Resultado esperado:**

- Página de recuperación

**Resultado actual:**

- Error 404

---

## TC-11 – Responsive design

**Descripción:** Verificar diseño responsive.

**Pasos:**

1. Abrir DevTools
2. Cambiar a vista móvil

**Resultado esperado:**

- Elementos se adaptan correctamente
- Texto no se desborda
- Navbar visible