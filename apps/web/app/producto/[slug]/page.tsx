import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@techcomparativas/db/client';
import { Button, Card } from '@techcomparativas/ui';

interface ProductPageProps {
  params: { slug: string };
}

/**
 * Página de detalle de producto.
 *
 * Recupera los datos del producto y sus enlaces de afiliado.  Se muestran
 * imágenes, especificaciones y pros/contras.  Al final de la página se
 * incluyen botones de compra que utilizan el componente `AmazonButton`
 * (definido en el paquete ui o directamente en esta app).  Para fines de
 * demostración, este ejemplo no implementa la totalidad de la interfaz.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      affiliateLinks: true
    }
  });
  if (!product) {
    return notFound();
  }
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Galería de imágenes */}
        <div className="flex-shrink-0 w-full lg:w-1/2 space-y-4">
          {product.images.length > 0 ? (
            product.images.map((src) => (
              <div key={src} className="relative w-full h-64">
                {/*
                  Se utiliza next/image para optimizar las imágenes.  La propiedad
                  `unoptimized` se usa para evitar errores en esta plantilla.
                */}
                <Image src={src} alt={product.name} fill className="object-contain" unoptimized />
              </div>
            ))
          ) : (
            <div className="w-full h-64 bg-brand-surface rounded-lg" />
          )}
        </div>
        {/* Información del producto */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-brand-muted">{product.brand}</p>
          <p className="text-lg font-semibold">
            {product.price.toFixed(2)} {product.currency}
          </p>
          {/* Pros y contras */}
          <div className="flex gap-8">
            <ul className="list-disc ml-5">
              {product.pros.map((pro) => (
                <li key={pro} className="text-sm">{pro}</li>
              ))}
            </ul>
            <ul className="list-disc ml-5">
              {product.cons.map((con) => (
                <li key={con} className="text-sm line-through">
                  {con}
                </li>
              ))}
            </ul>
          </div>
          {/* Enlaces de afiliado */}
          <div className="space-y-2">
            {product.affiliateLinks.map((link) => (
              <a
                key={link.id}
                href={link.urlTemplate.replace('{asin}', link.asin)}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Button variant="primary">Comprar en {link.marketplace.toUpperCase()}</Button>
              </a>
            ))}
          </div>
          <div>
            <Link href={`/comparar?product=${product.slug}`} className="inline-block mt-4">
              <Button variant="secondary">Comparar este producto</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Resumen en MDX (no renderizado en este ejemplo) */}
      <Card>
        <h2 className="text-2xl font-semibold mb-2">Resumen</h2>
        <p className="text-sm text-brand-muted">
          El resumen en formato MDX se mostrará aquí cuando el contenido esté
          disponible.
        </p>
      </Card>
    </main>
  );
}