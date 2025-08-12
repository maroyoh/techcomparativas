import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@techcomparativas/ui';

/**
 * Página principal de techComparativas.
 *
 * Presenta un mensaje de bienvenida y un botón para ir al comparador.
 * Los textos se obtienen a partir de los ficheros de traducción en
 * `app/locales/` según el idioma activo.
 */
export default function HomePage() {
  const t = useTranslations('Home');
  return (
    <main className="container mx-auto px-4 py-16 space-y-8">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="text-lg text-brand-muted max-w-2xl mx-auto">
          {t('description')}
        </p>
        <Link href="/comparar" className="inline-block">
          <Button variant="primary">{t('cta')}</Button>
        </Link>
      </section>
    </main>
  );
}