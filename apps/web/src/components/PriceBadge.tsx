export interface PriceBadgeProps {
  price: number;
  currency: string;
}

/**
 * Etiqueta de precio.
 *
 * Muestra el precio en una cápsula con fondo ligeramente más claro.  Se
 * utiliza en tarjetas o tablas para resaltar el valor monetario de los
 * productos.
 */
export default function PriceBadge({ price, currency }: PriceBadgeProps) {
  return (
    <span className="inline-block bg-brand-surface px-2 py-1 rounded-full text-sm font-medium">
      {price.toFixed(2)} {currency}
    </span>
  );
}