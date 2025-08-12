#!/usr/bin/env bash
set -euo pipefail

# Script de instalación para macOS/Linux.
#
# Este script crea la estructura del proyecto, instala las dependencias,
# configura Prisma y arranca el entorno de desarrollo.  Debes ejecutar
# este script desde la raíz del repositorio.

echo "⏳ Instalando dependencias con pnpm…"
pnpm install

echo "🔧 Generando cliente Prisma…"
pnpm --filter=packages/db exec prisma generate

echo "📦 Ejecutando migraciones de base de datos…"
pnpm prisma:generate
pnpm --filter=packages/db exec prisma migrate dev --name init

echo "🚀 Arrancando aplicación en modo desarrollo…"
pnpm --filter=apps/web dev