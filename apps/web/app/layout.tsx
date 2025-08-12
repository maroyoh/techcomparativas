import './globals.css';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';

// Cargamos la fuente Inter con subset latino para mejorar la legibilidad
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'techComparativas',
  description: 'Descubre y compara productos tecnológicos con facilidad.'
};

/**
 * Componente de layout raíz.
 *
 * Envuelve todas las páginas en los proveedores de internacionalización e
 * intercambio de temas.  Se carga el fichero de traducciones según el
 * parámetro de locale en el routing de Next.js.  El modo oscuro está
 * activado por defecto usando `next-themes`.
 */
export default function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  // Carga perezosa de los mensajes según el locale.  Si el locale no
  // existe, se hace fallback a español.
  let messages: Record<string, any>;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    messages = require(`../locales/${locale}.json`);
  } catch {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    messages = require('../locales/es.json');
  }
  return (
    <html lang={locale} className="dark">
      <body
        className={`${inter.className} bg-brand-background text-brand-text min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {/*
              Se incluye un contenedor principal para que el footer quede al final
              y el contenido crezca según corresponda.
            */}
            <div className="flex-1 flex flex-col">
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}