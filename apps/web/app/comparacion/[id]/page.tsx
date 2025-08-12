import { notFound } from 'next/navigation';
<<<<<<< HEAD:apps/web/app/comparacion/[id]/page.tsx
import { prisma } from '@techcomparativas/db/client';
import { Card } from '@techcomparativas/ui';
=======
import { prisma } from '@/lib/prisma';
import { Card } from '@/components/Card';
>>>>>>> 43bc350 (chore: fix prisma postinstall on Windows + add DATABASE_URL):apps/web/app/[locale]/comparacion/[id]/page.tsx

interface ComparisonPageProps {
  params: { id: string };
}

/**
 * Página de visualización de una comparación específica.
 *
 * Muestra la tabla y las tarjetas comparativas de los productos incluidos.
 * Este ejemplo se centra en mostrar la estructura: se obtienen los productos
 * participantes y se renderiza una tabla simple con sus valores.  La
 * lógica de virtualización (react‑virtual) se puede incorporar en un
 * componente aparte (`CompareTableVirtualized`).
 */
export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const comparison = await prisma.comparison.findUnique({ where: { id: params.id } });
  if (!comparison) {
    return notFound();
  }
  const products = await prisma.product.findMany({ where: { id: { in: comparison.productIds } } });
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">{comparison.title}</h1>
      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-brand-surface text-brand-text uppercase">
            <tr>
              <th className="p-3">Producto</th>
              <th className="p-3">Marca</th>
              <th className="p-3">Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-brand-surface">
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3">{p.brand}</td>
                <td className="p-3">
                  {p.price.toFixed(2)} {p.currency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Card>
        <p className="text-brand-muted">
          La vista de tarjetas será implementada aquí usando el componente
          `CompareCards`.  En la versión final se aplicará una ponderación de
          criterios configurable.
        </p>
      </Card>
    </main>
  );
}