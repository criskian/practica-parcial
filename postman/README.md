# Colecciones de Postman - Boards & Threads API

Esta carpeta contiene las colecciones de Postman para probar la API de Boards (Tableros) y Threads (Hilos de discusión).

## 📦 Archivos

- **Boards.postman_collection.json** - Endpoints para gestión de Boards
- **Threads.postman_collection.json** - Endpoints para gestión de Threads y Replies

## 🚀 Cómo importar en Postman

1. Abre Postman
2. Click en "Import" (esquina superior izquierda)
3. Arrastra los archivos `.json` o selecciónalos manualmente
4. Las colecciones aparecerán en tu sidebar

## 📋 Flujo de prueba recomendado

### 1. Crear un Board
- Usa: `POST /board/create`
- Copia el `_id` del Board creado

### 2. Crear un Thread
- Usa: `POST /thread/create`
- Reemplaza `BOARD_ID_AQUI` con el ID del Board del paso 1
- Copia el `_id` del Thread creado

### 3. Agregar Replies al Thread
- Usa: `POST /thread/reply/:threadId`
- Reemplaza `:threadId` con el ID del Thread del paso 2
- Puedes agregar múltiples respuestas

### 4. Consultar datos
- `GET /board/` - Ver todos los Boards
- `GET /thread/board/:boardId` - Ver todos los Threads de un Board
- `GET /thread/:id` - Ver un Thread con todas sus respuestas

### 5. Actualizar y Eliminar
- `PUT /board/update/:id` - Actualizar Board
- `DELETE /board/delete/:id` - Eliminar Board
- `DELETE /thread/delete/:id` - Eliminar Thread

## 💡 Notas

- Asegúrate de que el servidor esté corriendo en `http://localhost:3000`
- Los endpoints están listos para usar con ejemplos pre-configurados
- Reemplaza los IDs de ejemplo con IDs reales de tu base de datos

