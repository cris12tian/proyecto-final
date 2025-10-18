# GameTracker - Full Project (Backend + Frontend)

Este ZIP contiene dos carpetas:
- game-tracker-backend
- game-tracker-frontend

Incluye autenticación con JWT, seed de datos, READMEs, .gitignore y un script con comandos `git` sugeridos.

## Quick start (local)
1. Backend:
   - cd game-tracker-backend
   - npm install
   - cp .env.example .env (editar MONGO_URI y JWT_SECRET)
   - npm run seed
   - npm run dev

2. Frontend:
   - cd ../game-tracker-frontend
   - npm install
   - (opcional) crear .env con REACT_APP_API_URL=http://localhost:5000/api
   - npm start

La cuenta creada por el seed es `admin@example.com` con contraseña `password`.
