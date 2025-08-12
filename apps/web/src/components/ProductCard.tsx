import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@techcomparativas/ui';

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  brand: string;
  price: number;
  currency: string;
  image?: string;
}

/**
 * Tarjeta de producto reutilizable.
 *
 * Muestra la imagen, nombre, marca y precio.  Al hacer clic se
 * redirige a la página de detalles.  Este componente puede utilizarse
 * tanto en listados como en comparaciones.
 */
export default function ProductCard({ id, name, slug, brand, price, currency, image }: ProductCardProps) {
  return (
    <Link href={`/producto/${slug}`} className="block">
      <Card className="space-y-3 hover:ring-2 hover:ring-brand-primary transition">
        <div className="relative w-full h-32 bg-brand-surface rounded-md overflow-hidden">
          {image ? (
            <Image src={image} alt={name} fill className="object-contain" unoptimized />
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-brand-muted">
              Sin imagen
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg leading-snug">{name}</h3>
          <p className="text-sm text-brand-muted">{brand}</p>
        </div>
        <p className="font-medium">
          {price.toFixed(2)} {currency}
        </p>
      </Card>
    </Link>
  );
}