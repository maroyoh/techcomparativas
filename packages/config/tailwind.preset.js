/**
 * Tailwind preset para techComparativas.
 *
 * Define una paleta de colores coherente con el modo oscuro por defecto.  
 * Exporta un objeto de configuración que puede ser extendido por cualquier
 * `tailwind.config.js` en las aplicaciones del monorepo.
 */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#0B0F13',
          surface: '#11161C',
          primary: '#22C55E',
          secondary: '#60A5FA',
          text: '#E5E7EB',
          muted: '#94A3B8',
          success: '#16A34A',
          warning: '#F59E0B',
          danger: '#EF4444'
        }
      }
    }
  },
  plugins: []
};