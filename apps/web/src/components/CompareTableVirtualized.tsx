import type { FC } from 'react';

export interface CompareTableVirtualizedProps {
  products: Array<{
    id: string;
    name: string;
    brand: string;
    price: number;
    currency: string;
    specs: Record<string, string>;
  }>;
}

/**
 * Tabla de comparación virtualizada.
 *
 * Este componente pretende utilizar `@tanstack/react-virtual` para renderizar
 * filas y columnas de manera eficiente cuando hay muchos productos y
 * características.  Aquí se muestra una implementación básica sin
 * virtualización.  En producción se reemplazaría la renderización simple
 * por un hook de virtualización para mejorar el rendimiento.
 */
export const CompareTableVirtualized: FC<CompareTableVirtualizedProps> = ({ products }) => {
  // Extraer todas las claves de especificaciones para construir cabecera
  const allKeys = Array.from(
    new Set(products.flatMap((p) => Object.keys(p.specs)))
  );
  return (
    <div className="overflow-auto border rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-brand-surface text-brand-text">
          <tr>
            <th className="p-2">Producto</th>
            {allKeys.map((key) => (
              <th key={key} className="p-2 capitalize whitespace-nowrap">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-brand-surface">
              <td className="p-2 font-medium">{product.name}</td>
              {allKeys.map((key) => (
                <td key={key} className="p-2 text-brand-muted">
                  {product.specs[key] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};