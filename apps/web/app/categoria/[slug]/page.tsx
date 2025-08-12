import { notFound } from 'next/navigation';
import Link from 'next/link';
<<<<<<< HEAD:apps/web/app/categoria/[slug]/page.tsx
import { Card } from '@techcomparativas/ui';
import { prisma } from '@techcomparativas/db/client';
=======
import { Card } from '@/components/Card';
import { prisma } from '@/lib/prisma';
>>>>>>> 43bc350 (chore: fix prisma postinstall on Windows + add DATABASE_URL):apps/web/app/[locale]/categoria/[slug]/page.tsx

interface CategoryPageProps {
  params: { slug: string };
}

/**
 * Página de categoría.
 *
 * Recupera la categoría y sus productos asociados desde la base de datos.  Si
 * la categoría no existe se utiliza la función `notFound` de Next.js para
 * devolver un error 404.  Cada producto se presenta como una tarjeta con
 * enlace a su página individual.
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const category = await prisma.category.findUnique({
    where: { slug },
    include: { products: true }
  });
  if (!category) {
    return notFound();
  }
  return (
    <main className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold capitalize">{category.name}</h1>
      {category.products.length === 0 ? (
        <p className="text-brand-muted">No hay productos disponibles en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.products.map((product) => (
            <Link key={product.id} href={`/producto/${product.slug}`} className="block">
              <Card className="hover:ring-2 hover:ring-brand-primary transition">
                <h2 className="font-semibold text-xl mb-2">{product.name}</h2>
                <p className="text-sm text-brand-muted">{product.brand}</p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}