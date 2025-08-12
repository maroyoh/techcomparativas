'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode;
  /** Rol requerido para acceder al contenido.  Si se omite se permite cualquier usuario autenticado. */
  role?: string;
}

/**
 * Componente de protección de rutas en el cliente.
 *
 * Comprueba el estado de sesión proporcionado por NextAuth.  Si el usuario
 * no está autenticado redirige a `/api/auth/signin`.  Si se especifica un
 * rol, verifica que `session.user.role` coincide con el rol requerido y
 * redirige a la página de inicio en caso contrario.
 */
export default function AuthGuard({ children, role }: AuthGuardProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/api/auth/signin');
      return;
    }
    if (role && (session as any).role !== role) {
      router.push('/');
    }
  }, [status, session, role, router]);

  if (status === 'loading' || !session) {
    return <p className="p-4">Cargando…</p>;
  }
  return <>{children}</>;
}