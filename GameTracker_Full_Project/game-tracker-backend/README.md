# GameTracker - Backend

API RESTful en Node.js + Express + MongoDB.

## Scripts
- `npm install`
- `cp .env.example .env` y editar variables
- `npm run seed` -> poblar datos de ejemplo (crea usuario admin@example.com / password)
- `npm run dev` -> iniciar en desarrollo (nodemon)
- `npm start` -> iniciar en producción

## Endpoints principales
- `POST /api/auth/register` registro
- `POST /api/auth/login` login
- `GET /api/games` listar juegos (público)
- `POST /api/games` crear juego (requiere token Bearer)
- `GET /api/reviews` listar reseñas
- `POST /api/reviews` crear reseña (requiere token Bearer)

JWT en header `Authorization: Bearer <token>`
