import { useTranslations } from 'next-intl';

/**
 * Página de aviso sobre el programa de afiliados.
 */
export default function AffiliatesPage() {
  const t = useTranslations('Legal');
  return (
    <main className="container mx-auto px-4 py-8 space-y-4">
      <h1 className="text-3xl font-bold">{t('AffiliatesTitle')}</h1>
      <p>{t('AffiliatesContent')}</p>
    </main>
  );
}