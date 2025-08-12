import { Suspense } from 'react';
<<<<<<< HEAD:apps/web/app/comparar/page.tsx
import { Button } from '@techcomparativas/ui';
import { prisma } from '@techcomparativas/db/client';
=======
import { Button } from '@/components/Button';
import { prisma } from '@/lib/prisma';
>>>>>>> 43bc350 (chore: fix prisma postinstall on Windows + add DATABASE_URL):apps/web/app/[locale]/comparar/page.tsx

/**
 * Página de comparación de productos.
 *
 * Permite seleccionar hasta 5 productos para compararlos en dos vistas: tabla
 * virtualizada y tarjetas.  Para simplificar, aquí solo se muestra un
 * listado de productos con casillas de selección.  La lógica de
 * virtualización y memoización se dejaría a un componente aparte.
 */
export default async function ComparePage() {
  const products = await prisma.product.findMany({ take: 100 });
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Comparar productos</h1>
      <p className="text-brand-muted max-w-prose">
        Selecciona hasta 5 productos para ver sus características lado a lado.
      </p>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <label
              key={product.id}
              className="flex items-center gap-2 bg-brand-surface rounded-lg p-3 hover:ring-2 hover:ring-brand-primary cursor-pointer"
            >
              <input
                type="checkbox"
                name="productIds"
                value={product.id}
                className="form-checkbox h-5 w-5 text-brand-primary rounded"
              />
              <span>{product.name}</span>
            </label>
          ))}
        </div>
        <Button variant="primary" type="submit">
          Comparar seleccionados
        </Button>
      </form>
    </main>
  );
}