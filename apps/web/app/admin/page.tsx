import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import type { NextAuthOptions } from 'next-auth';

// Opciones de autenticación mínimas: este ejemplo utiliza un proveedor de
// credenciales con roles.  Consulta `/pages/api/auth/[...nextauth].ts` para
// la configuración completa.
const authOptions: NextAuthOptions = {
  providers: [],
  callbacks: {
    async session({ session, token }) {
      if (token?.role) {
        (session as any).role = token.role;
      }
      return session;
    }
  }
};

/**
 * Página de administración.
 *
 * Verifica si el usuario tiene rol `ADMIN` y redirige al inicio de sesión si
 * no está autenticado.  En caso contrario muestra el panel de control,
 * incluyendo el editor MDX y gestión de productos y categorías.
 */
export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session || (session as any).role !== 'ADMIN') {
    // Si no hay sesión o el rol no es ADMIN, redirigimos a la ruta de login
    return redirect('/api/auth/signin');
  }
  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold">Panel de administración</h1>
      <p className="text-brand-muted">
        Aquí podrás gestionar productos, categorías y generar borradores con IA.
      </p>
      {/* El editor MDX y el cargador de imágenes se implementarán con Tiptap y S3
          compat.  Esta zona está reservada para el componente `AdminEditorMDX`. */}
      <div className="bg-brand-surface rounded-lg p-4 border border-brand-surface/50 text-center">
        <p className="italic">Editor MDX próximamente…</p>
      </div>
    </main>
  );
}