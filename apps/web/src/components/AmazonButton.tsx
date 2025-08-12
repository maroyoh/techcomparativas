'use client';

import type { FC } from 'react';
import { Button } from '@techcomparativas/ui';

export interface AmazonButtonProps {
  /** Código ASIN del producto */
  asin: string;
  /** Dominio de Amazon, por defecto España */
  marketplace?: 'es' | 'fr' | 'de' | 'it' | 'com';
}

/**
 * Botón para enlazar a un producto en Amazon con afiliación.
 *
 * Utiliza la variable de entorno `NEXT_PUBLIC_AMAZON_TAG` para añadir el
 * parámetro `tag` al enlace.  Si no se define `NEXT_PUBLIC_AMAZON_TAG`,
 * se generará una URL canónica sin identificador de afiliado.  El botón
 * abre el enlace en una nueva pestaña y aplica `rel="nofollow noreferrer"`.
 */
export const AmazonButton: FC<AmazonButtonProps> = ({ asin, marketplace = 'es' }) => {
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG;
  const url = tag
    ? `https://www.amazon.${marketplace}/dp/${asin}?tag=${tag}`
    : `https://www.amazon.${marketplace}/dp/${asin}`;
  return (
    <a href={url} target="_blank" rel="nofollow noreferrer">
      <Button variant="primary">Comprar en Amazon</Button>
    </a>
  );
};