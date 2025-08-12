# techComparativas

**techComparativas** es una plataforma moderna para descubrir, comparar y analizar productos tecnológicos.  
Este repositorio está diseñado como un monorepo con Turborepo y ofrece una aplicación web construida con Next.js 14, base de datos con Prisma/PostgreSQL y panel administrativo.  

## Objetivos del proyecto

* **Comparador visual**: permite ver los productos en una tabla virtualizada o en tarjetas conmutables, asignando puntuaciones y resaltando los ganadores con insignias.
* **CMS ligero**: edita el contenido en formato MDX con un editor WYSIWYG (Tiptap) directamente desde el panel de administración.
* **Afiliados Amazon.es**: incluye botones de compra compatibles con el programa de afiliados de Amazon España y admite enlaces a otras tiendas con afiliación.
* **SEO y accesibilidad**: usa buenas prácticas de estructura semántica, atributos `alt`, contraste adecuado y microdatos [`schema.org`](https://schema.org/).  
  El objetivo de Lighthouse es conseguir **≥ 90** en todas las categorías.
* **Despliegue sencillo**: pensado para desplegarse en Vercel con dominio propio de GoDaddy.  
  Se incluyen guías paso a paso en este documento y scripts automáticos para macOS/Linux y Windows.

## Estructura del monorepo

```text
techComparativas/
├─ apps/
│  └─ web/                # Aplicación Next.js 14 (App Router)
├─ packages/
│  ├─ ui/                 # Componentes compartidos basados en shadcn/ui
│  ├─ config/             # Configuraciones de Tailwind, ESLint y TS
│  └─ db/                 # Cliente Prisma y esquema de base de datos
├─ turbo.json             # Configuración de Turborepo
├─ package.json           # Configuración de workspaces y scripts globales
└─ README.md              # Este documento
```

Cada paquete tiene su propio `package.json` con las dependencias y scripts específicos.  Las dependencias pesadas se declaran en la raíz para optimizar la caché.

## Instalación y puesta en marcha

> ⚠️ Este repositorio asume que usas **pnpm** como gestor de paquetes.  Se puede adaptar a npm/yarn modificando los scripts.

Clona el repositorio y ejecuta los siguientes comandos dependiendo de tu plataforma.  Los scripts crean la estructura, instalan dependencias, inicializan Prisma y arrancan el entorno de desarrollo.

### macOS o Linux

```bash
# Crea el directorio del proyecto y posiciónate en él
mkdir -p ~/Desktop/techComparativas && cd ~/Desktop/techComparativas

# Inicializa el monorepo (esto ya ha sido ejecutado en esta plantilla)
pnpm install

# Genera el cliente Prisma y aplica migraciones
pnpm prisma:generate && pnpm prisma migrate dev

# Arranca la aplicación en modo desarrollo
pnpm dev
```

### Windows (PowerShell)

```powershell
New-Item -ItemType Directory -Path "$env:USERPROFILE\Desktop\techComparativas" -Force | Out-Null
Set-Location "$env:USERPROFILE\Desktop\techComparativas"

# Instala dependencias
pnpm install

# Genera el cliente Prisma y aplica migraciones
pnpm prisma:generate
pnpm prisma migrate dev

# Arranca la aplicación
pnpm dev
```

> Consulta también el fichero **setup_scripts** en la raíz para ver ejemplos más detallados de instalación y despliegue.

## Despliegue en Vercel y configuración de dominio

1. **Vercel:** crea un nuevo proyecto y vincula este repositorio.  Activa la opción de despliegue continuo.  Añade las variables de entorno definidas en `.env.example`.
2. **GoDaddy:** configura el DNS de tu dominio para apuntar al subdominio proporcionado por Vercel.  Si usas un dominio raíz, añade un registro `A` y un registro `CNAME` según las instrucciones de Vercel.
3. **Revisión:** tras desplegar, ejecuta las pruebas `pnpm test` y verifica que Lighthouse supera 90 puntos en rendimiento, accesibilidad, buenas prácticas y SEO.

## Contribución y notas de desarrollo

El código se escribe en **TypeScript** con el modo estricto activado.  Los componentes se documentan con comentarios extensos que explican las decisiones de arquitectura, rendimiento, accesibilidad, SEO y pruebas.  Se utiliza **Vitest** para pruebas unitarias y **Playwright** para E2E; los archivos de prueba se encuentran en el mismo directorio que el componente con extensión `.test.tsx`.

> **ADR (Architecture Decision Records):** las decisiones relevantes se registran en `/docs/adr/`, donde se explica por qué se eligieron determinadas bibliotecas (por ejemplo `next-intl` frente a `i18next`).

Este proyecto pretende ser modular y fácil de extender: puedes añadir nuevas categorías y productos desde el panel de administración.  Las futuras mejoras (por ejemplo soporte para nuevas fuentes de afiliados) pueden implementarse añadiendo nuevos modelos Prisma y componentes de UI.