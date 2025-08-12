import type { FC } from 'react';
import ProductCard from './ProductCard';

export interface CompareCardsProps {
  products: Array<{
    id: string;
    name: string;
    slug: string;
    brand: string;
    price: number;
    currency: string;
    image?: string;
  }>;
}

/**
 * Vista de tarjetas para la comparación.
 *
 * Presenta cada producto como una tarjeta individual.  Se puede añadir
 * puntuación y distintivos (por ejemplo "Mejor compra") superponiendo
 * etiquetas en la esquina superior de la tarjeta.
 */
export const CompareCards: FC<CompareCardsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          slug={p.slug}
          brand={p.brand}
          price={p.price}
          currency={p.currency}
          image={p.image}
        />
      ))}
    </div>
  );
};