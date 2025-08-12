<#
  Script de instalación para Windows usando PowerShell.

  Crea y configura el proyecto techComparativas, instala las dependencias
  necesarias, genera el cliente Prisma y arranca el entorno de
  desarrollo.  Ejecuta este script en PowerShell en la raíz del
  repositorio.
#>

Write-Host "⏳ Instalando dependencias con pnpm…"
pnpm install

Write-Host "🔧 Generando cliente Prisma…"
pnpm --filter=packages/db exec prisma generate

Write-Host "📦 Ejecutando migraciones de base de datos…"
pnpm prisma:generate
pnpm --filter=packages/db exec prisma migrate dev --name init

Write-Host "🚀 Arrancando aplicación en modo desarrollo…"
pnpm --filter=apps/web dev