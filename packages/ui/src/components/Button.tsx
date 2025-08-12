import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Variantes de color disponibles para el botón.
 * - `primary`: usa el color principal de la marca para acciones importantes.
 * - `secondary`: usa el color secundario (azul) para acciones de soporte.
 * - `ghost`: botón transparente con acento al pasar el ratón.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

/**
 * Botón reutilizable con variantes de color.
 *
 * Implementa estilos accesibles: tamaño generoso, enfoque visible y
 * contraste adecuado entre texto y fondo.  Puedes extenderlo añadiendo
 * iconos o estados de carga según sea necesario.
 */
export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-lg px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2';
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-brand-primary text-brand-background hover:bg-brand-primary/90',
    secondary: 'bg-brand-secondary text-brand-background hover:bg-brand-secondary/90',
    ghost: 'bg-transparent text-brand-primary hover:bg-brand-primary/10'
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}