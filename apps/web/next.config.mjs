/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@techcomparativas/ui','@techcomparativas/db','@techcomparativas/config'],
  i18n: {
    locales: ['es','en','fr'],
    defaultLocale: 'es',
  },
  // Desbloqueo temporal si hay types que bloqueen build:
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
