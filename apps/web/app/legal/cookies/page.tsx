import { useTranslations } from 'next-intl';

/**
 * Página de política de cookies.
 */
export default function CookiesPage() {
  const t = useTranslations('Legal');
  return (
    <main className="container mx-auto px-4 py-8 space-y-4">
      <h1 className="text-3xl font-bold">{t('CookiesTitle')}</h1>
      <p>{t('CookiesContent')}</p>
    </main>
  );
}