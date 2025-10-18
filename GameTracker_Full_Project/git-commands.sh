#!/bin/bash
# Script with suggested git commands and commits (run inside each repo separately)
git init
git add .
git commit -m "Inicial: estructura del proyecto"
git add .
git commit -m "Modelos: Game, Review, User"
git add .
git commit -m "Controllers y rutas principales"
git add .
git commit -m "Auth: registro, login y middleware JWT"
git add .
git commit -m "Seed y utilidades"
git add .
git commit -m "Frontend: estructura y componentes base"
git add .
git commit -m "Integración: API client y manejo de tokens"
git add .
git commit -m "UI: estilos y mejoras"
git add .
git commit -m "Docs: README y ejemplos"
echo "Suggested 10 commits created (if run after adding files incrementally)."
