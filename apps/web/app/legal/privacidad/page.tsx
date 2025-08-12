import { useTranslations } from 'next-intl';

/**
 * Página de política de privacidad.
 */
export default function PrivacyPage() {
  const t = useTranslations('Legal');
  return (
    <main className="container mx-auto px-4 py-8 space-y-4">
      <h1 className="text-3xl font-bold">{t('PrivacyTitle')}</h1>
      <p>{t('PrivacyContent')}</p>
    </main>
  );
}