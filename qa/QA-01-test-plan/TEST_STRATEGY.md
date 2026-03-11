# Estrategia de Testing – Cowork Social

## 1. Objetivo

El objetivo de esta estrategia de testing es evaluar la calidad, estabilidad y comportamiento funcional de la aplicación Cowork Social, mediante la ejecución de pruebas manuales y exploratorias enfocadas en la experiencia del usuario y el correcto funcionamiento de las funcionalidades disponibles en el frontend.

Este documento define el alcance de las pruebas, los tipos de testing a realizar, el ambiente de pruebas y los criterios utilizados para determinar si la aplicación cumple con los estándares mínimos de calidad.

## 2. Alcance de las pruebas (Scope)

Las pruebas estarán enfocadas en las funcionalidades visibles y accesibles del frontend de la aplicación, incluyendo:

- Navegación entre páginas
- Registro de usuario
- Inicio de sesión
- Acceso al feed
- Visualización del perfil de usuario
- VAlidación de Formularios
- Comportamiento de la interfaz de usuario
- Diseño responsive en diferentes tamaños de pantalla

Las funcionalidades aún no implementadas serán reportadas como **pendientes de desarrollo** o **bugs funcionales**.

## 3. Fuera del alcance (Out of Scope)

Debido a que algunas funcionalidades aún no se encuentran completamente implementadas, los siguientes aspectos quedan fuera del alcance de esta fase de testing:

- Lógica completa de autenticación en backend
- Persistencia de datos en base de datos
- Funcionalidad completa de publicaciones (crear, comentar, compartir)
- Integraciones externas o servicios backend no implementados

Estas funcionalidades podrán ser evaluadas en fases posteriores del desarrollo.

## 4. Tipos de pruebas a realizar

### Pruebas funcionales
Tienen como objetivo verificar que cada funcionalidad de la aplicación se comporte según lo esperado.

Ejemplos de funcionalidades a verificar:

- Registro de usuario
- Inicio de sesión
- Acceso al feed
- Navegación mediante el navbar
- Acceso al perfil de usuario

### Pruebas de validación de formularios
Se verificará el correcto funcionamiento de las validaciones de entrada de datos en los formularios.

Se evaluará:

- Campos obligatorios
- Validación de longitud mínima de contraseña
- Comportamiento con datos invalidos
- Mensajes de validación mostrados al usuario

### Pruebas de navegación

Se validará que las redirecciones entre las diferentes rutas de la aplicación funcionen correctamente.

- Página principal (/)
- Login (/login)
- Registro (/register)
- Feed (/feed)
- Perfil (/profile/me)

### Pruebas de UI / UX

Se evaluará la correcta visualización de los elementos de la interfaz y la experiencia del usuario.

Se revisará:

- Visibilidad de botones y enlaces
- Consistencia visual de los componentes
- Mensajes informativos o de error
- Distribución de elementos en pantalla

### Pruebas de diseño responsive

Se evaluará la correcta visualización de los elementos de la interfaz y la experiencia del usuario.

Se evaluará:

- Adaptación del navbar
- Comportamiento de botones
- Distribución de elementos
- Legibilidad del contenido

### Pruebas exploratorias

Se realizarán pruebas exploratorias con el objetivo de detectar comportamientos inesperados o inconsistencias en la aplicación.

Ejemplos de escenarios evaluados:

- Acceso directo a páginas mediante URL
- Acceso a funcionalidades sin autenticación
- Elementos visibles que no ejecutan acciones
- Navegación no controlada entre secciones

## 5. Ambiente de pruebas

| Elemento | Detalle |
|--------|--------|
| Navegador principal | Google Chrome |
| Sistema operativo | Windows |
| Dispositivo | Desktop |
| Entorno | Localhost |
| URL del proyecto | http://localhost:3000/ |

## 6. Herramientas utilizadas

Las siguientes herramientas fueron utilizadas durante el proceso de testing:

- Google Chrome
- Chrome DevTools
- Consola del navegador
- GitHub para gestión del repositorio
- Documentación en Markdown

En fases posteriores se contempla el uso de herramientas de automatización de pruebas como Cypress

## 7. Criterios de inicio de pruebas (Entry Criteria)

Las pruebas pueden comenzar cuando:

- La aplicación se encuentra ejecutándose correctamente en el entorno local
- Las rutas principales de navegación están disponibles
- Los formularios son accesibles desde la interfaz

## 8. Criterios de finalización de pruebas (Exit Criteria)

Las pruebas se considerarán finalizadas cuando:

- Se hayan ejecutado todos los test cases definidos
- Se hayan documentado los bugs identificados
- Se haya completado la documentación de resultados de testing


## 9. Riesgos identificados

Durante la fase inicial de exploración se identificaron los siguientes riesgos potenciales:

- Acceso a páginas protegidas sin autenticación
- Funcionalidad de login aún no implementada completamente
- Elementos visibles en la interfaz que no ejecutan acciones
- Inconsistencias entre los datos mostrados y las funcionalidades disponibles

Estos hallazgos serán documentados en los reportes de bugs correspondientes para su revisión por parte del equipo de desarrollo.