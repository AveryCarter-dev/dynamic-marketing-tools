#!/bin/bash
# Script para iniciar el servidor de desarrollo con Node 22

# Cargar nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Usar Node 22
nvm use 22

# Ir al directorio del proyecto
cd "$(dirname "$0")"

# Iniciar el servidor
echo "🚀 Starting Astro dev server with Node $(node --version)..."
echo "📡 Server will be available at http://localhost:4321"
echo ""
npm run dev

