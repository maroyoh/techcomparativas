import { prisma } from './src/client';

/**
 * Semilla inicial de la base de datos.
 *
 * Crea algunas categorías, subcategorías y productos de ejemplo.  Esta
 * función es idempotente: utiliza `upsert` para no duplicar datos si se
 * ejecuta varias veces.  Ejecuta este script con `pnpm exec ts-node` o
 * mediante el comando definido en los scripts del monorepo.
 */
async function main() {
  // Crear categorías y subcategorías
  const electronica = await prisma.category.upsert({
    where: { slug: 'electronica' },
    update: {},
    create: {
      slug: 'electronica',
      name: 'Electrónica'
    }
  });
  const smartphones = await prisma.category.upsert({
    where: { slug: 'smartphones' },
    update: {},
    create: {
      slug: 'smartphones',
      name: 'Smartphones',
      parentId: electronica.id
    }
  });

  // Crear producto de ejemplo
  await prisma.product.upsert({
    where: { slug: 'telefono-ejemplo' },
    update: {},
    create: {
      slug: 'telefono-ejemplo',
      name: 'Teléfono Ejemplo',
      brand: 'MarcaX',
      categoryId: smartphones.id,
      price: 499.99,
      currency: 'EUR',
      images: ['https://via.placeholder.com/400x300?text=Producto'],
      specs: { pantalla: '6.1 pulgadas', memoria: '8 GB RAM', almacenamiento: '128 GB' },
      pros: ['Buen rendimiento', 'Cámara decente'],
      cons: ['Batería justa'],
      summaryMDX: 'Un teléfono de ejemplo con buenas prestaciones y precio contenido.',
      affiliateLinks: {
        create: {
          asin: 'B0EXAMPLE',
          marketplace: 'es',
          urlTemplate: 'https://www.amazon.es/dp/{asin}'
        }
      },
      published: true
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });