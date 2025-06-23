
# API - ToDoApp

Esta API REST permite gestionar tareas mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). No requiere autenticación.

---

## Formato de datos

Las tareas tienen el siguiente formato:

```json
{
  "_id": "1234567890abcdef",
  "title": "Hacer las compras",
  "description": "Comprar frutas y verduras",
  "completed": false,
  "createdAt": "2025-06-22T10:00:00.000Z",
  "updatedAt": "2025-06-22T12:00:00.000Z"
}
```

---

## Endpoints

### GET /tasks

Obtiene la lista completa de tareas.

- **URL**: `/tasks`
- **Método**: `GET`
- **Respuesta**: `200 OK`
- **Ejemplo**:

```json
[
  {
    "_id": "123",
    "title": "Estudiar",
    "description": "Repasar React",
    "completed": false
  },
  {
    "_id": "124",
    "title": "Salir a correr",
    "description": "5km por el parque",
    "completed": true
  }
]
```

---

### POST /tasks

Crea una nueva tarea.

- **URL**: `/tasks`
- **Método**: `POST`
- **Body (JSON)**:

```json
{
  "title": "Lavar el auto",
  "description": "Con agua y jabón"
}
```

- **Respuesta**: `201 Created`
- **Ejemplo**:

```json
{
  "task": {
    "_id": "125",
    "title": "Lavar el auto",
    "description": "Con agua y jabón",
    "completed": false
  }
}
```

---

### PUT /tasks/:id

Actualiza una tarea existente.

- **URL**: `/tasks/:id`
- **Método**: `PUT`
- **Parámetros**: `id` (en la URL)
- **Body (JSON)**:

```json
{
  "title": "Lavar el auto",
  "description": "Con agua y jabón",
  "completed": true
}
```

- **Respuesta**: `200 OK`
- **Ejemplo**:

```json
{
  "message": "Tarea actualizada correctamente",
  "task": {
    "_id": "125",
    "title": "Lavar el auto",
    "description": "Y pasar la aspiradora",
    "completed": true
  }
}
```

---

### DELETE /tasks/:id

Elimina una tarea por ID.

- **URL**: `/tasks/:id`
- **Método**: `DELETE`
- **Parámetros**: `id` (en la URL)
- **Respuesta**: `200 OK`
- **Ejemplo**:

```json
{
  "message": "Tarea eliminada correctamente",
  "result": {
        "acknowledged": true,
        "deletedCount": 1
  }
}
```

---

## Notas

- No requiere autenticación ni headers especiales.
- Las respuestas de error siguen el formato:

```json
{
  "message": "Error al realizar la operación",
  "error": { }
}
```
