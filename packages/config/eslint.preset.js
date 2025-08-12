/**
 * Configuración de ESLint compartida para el monorepo de techComparativas.
 *
 * Incluye reglas recomendadas para TypeScript, React y accesibilidad.
 * Los proyectos pueden extender esta configuración en sus propios
 * `.eslintrc.js` mediante `require('@techcomparativas/config/eslint.preset')`.
 */
module.exports = {
  root: false,
  env: {
    browser: true,
    es2024: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Habilitar estrictamente TypeScript
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Facilitar la accesibilidad
    'jsx-a11y/anchor-is-valid': 'off',
    // Adaptar las reglas de React
    'react/react-in-jsx-scope': 'off'
  }
};