# ADR 0001: Elección de librería de internacionalización

## Contexto

El proyecto techComparativas requiere soporte multilingüe para español, inglés y francés.  Hay dos bibliotecas principales de internacionalización compatibles con Next.js 14:

1. **next-intl**: proporciona utilidades de carga de mensajes por idioma, integración con el App Router y componentes como `useTranslations`.  Requiere la creación manual de ficheros de traducción JSON por idioma y es muy ligera.
2. **i18next**: es una librería de internacionalización más completa con características como namespaces, fallback jerárquico y pluralización avanzada.  Existe un paquete `react-i18next` para React y puede integrarse en Next.js usando middlewares.

## Decisión

Se ha optado por **next-intl** por las siguientes razones:

- **Simplicidad**: la configuración es mínima y se integra de forma nativa con el App Router de Next.js mediante proveedores como `NextIntlClientProvider`.
- **Tamaño reducido**: next-intl añade muy poco peso al bundle final.  En contraste, i18next incluye características que no se utilizan en este proyecto.
- **Compatibilidad con RSC**: next-intl soporta React Server Components de Next.js de forma oficial.
- **Mantenimiento**: next-intl está específicamente diseñado para Next.js, mientras que i18next es una solución generalista que requiere configuraciones adicionales.

## Consecuencias

Se crean ficheros `json` en `app/locales/` con las cadenas traducibles.  Durante la renderización, los mensajes se cargan dinámicamente según el `locale` de la ruta.  Si en el futuro se necesitan características avanzadas (por ejemplo, interpolación compleja o pluralización), se evaluará la migración a i18next.