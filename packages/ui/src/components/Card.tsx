import type { ReactNode } from 'react';

/**
 * Un contenedor básico con esquinas redondeadas y fondo semioscuro.
 *
 * Este componente define una superficie ligeramente elevada que sigue
 * las directrices de diseño del modo oscuro.  Se utiliza en toda la
 * aplicación para agrupar contenido relacionado (por ejemplo tarjetas de
 * producto o secciones del panel de administración).  El color de fondo
 * se basa en la variable de Tailwind `brand.surface` definida en el
 * preset de Tailwind de `@techcomparativas/config`.
 */
export interface CardProps {
  /** Contenido que se mostrará dentro de la tarjeta */
  children: ReactNode;
  /** Clase adicional para personalización */
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl bg-brand-surface p-4 shadow-lg ${className}`}>
      {children}
    </div>
  );
}