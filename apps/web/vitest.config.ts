import { defineConfig } from 'vitest/config';

/**
 * Configuración de Vitest para la aplicación web.
 *
 * Usa el entorno `jsdom` para poder renderizar componentes React en las
 * pruebas.  Además se habilitan las `globals` para poder usar funciones
 * como `describe` o `it` sin importar explícitamente desde Vitest.
 */
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: []
  }
});