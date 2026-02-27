# Backend Node.js - CoWork Social

**Proyecto by [ID For IDeas](https://linkedin.com/company/idforideas)**

API REST con Express usando datos en memoria (arrays).

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
```

API disponible en: `http://localhost:5000`

## 🎯 2 Tareas a Completar (BE-01 y BE-02)

🔥 **IMPORTANTE**: Debes completar las **2 tareas**, no solo 1.

### BE-01: API de Usuarios 👤

**Qué hacer:**
- CRUD completo de usuarios
- Endpoints: GET, POST, PUT, DELETE `/api/users`
- Datos mock en un array
- Swagger documentation

**Estructura de Usuario:**
```json
{
  "id": "1",
  "name": "Ana García",
  "email": "ana@example.com",
  "bio": "Full Stack Developer",
  "skills": ["React", "Node.js"]
}
```

**Endpoints:**
- `GET /api/users` - Listar todos
- `GET /api/users/:id` - Obtener uno
- `POST /api/users` - Crear
- `PUT /api/users/:id` - Actualizar
- `DELETE /api/users/:id` - Eliminar

---

### BE-02: API de Posts 📝

**Qué hacer:**
- CRUD completo de publicaciones
- Endpoints: GET, POST, PUT, DELETE `/api/posts`
- Datos mock en un array
- Swagger documentation
- Incluir contador de likes

**Estructura de Post:**
```json
{
  "id": "1",
  "userId": "1",
  "content": "Mi primer post!",
  "likes": 10,
  "createdAt": "2026-02-27T10:00:00Z"
}
```

**Endpoints:**
- `GET /api/posts` - Listar todos
- `GET /api/posts/:id` - Obtener uno
- `POST /api/posts` - Crear
- `PUT /api/posts/:id` - Actualizar
- `DELETE /api/posts/:id` - Eliminar
- `POST /api/posts/:id/like` - Incrementar likes

---

## 📦 Estructura del Proyecto

```
nodejs/
├── src/
│   ├── routes/
│   │   ├── users.js       # BE-01
│   │   └── posts.js       # BE-02
│   ├── data/
│   │   └── mockData.js    # Arrays con datos
│   └── server.js          # Express app
├── docs/
│   └── swagger.json       # Swagger docs
└── package.json
```

## 🔧 Setup Swagger

Instala:
```bash
npm install swagger-ui-express swagger-jsdoc
```

Accede a: `http://localhost:5000/api-docs`

## 📦 Deploy en Render

1. Crea cuenta en [render.com](https://render.com)
2. Conecta tu repo de GitHub
3. Crea "New Web Service"
4. Selecciona tu repo y la carpeta `backend/nodejs`
5. Build command: `npm install`
6. Start command: `npm start`
7. Copia el URL del deploy

## 📝 Cómo hacer tu PR

1. Crea tu API en esta carpeta
2. Incluye archivo `swagger.json` con documentación
3. Crea archivo `TUTORIAL.md` con ejemplos de uso
4. Deploy en Render
5. PR con:
   - Link al API: `https://tu-api.onrender.com`
   - Link a docs: `https://tu-api.onrender.com/api-docs`
   - Screenshots de Swagger
   - Collection de Postman (opcional)

## 🧪 Ejemplo de Código

```javascript
// src/routes/users.js
const express = require('express');
const router = express.Router();

// Mock data
let users = [
  { id: '1', name: 'Ana García', email: 'ana@example.com' },
  { id: '2', name: 'Carlos López', email: 'carlos@example.com' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

## 💬 ¿Necesitas Ayuda?

Únete al canal **#cowork** en Discord: [https://discord.gg/Vg5uACSs](https://discord.gg/Vg5uACSs)

¡La comunidad de ID For IDeas está lista para ayudarte! 🚀

// POST create user
router.post('/', (req, res) => {
  const newUser = {
    id: String(users.length + 1),
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
router.put('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'User not found' });
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// DELETE user
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.status(204).send();
});

module.exports = router;
```

## 🎓 Recursos

- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Swagger Setup](https://swagger.io/docs/specification/about/)
- [Render Docs](https://render.com/docs)
