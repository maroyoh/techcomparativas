import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@techcomparativas/db/client';

/**
 * Configuración de NextAuth.
 *
 * Utiliza un proveedor de credenciales sencillo basado en usuarios almacenados en
 * la base de datos.  Este ejemplo no implementa hashing robusto; se
 * recomienda usar `bcrypt` o `argon2` en producción.  Se serializa el rol
 * del usuario en el token JWT y se expone en la sesión.
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credenciales',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'correo@ejemplo.com' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        // Advertencia: en este ejemplo se compara la contraseña en plano.  Sustituye
        // por una comparación con hash (ej. bcrypt.compare) en producción.
        if (user && user.passwordHash === credentials.password) {
          return { id: user.id, email: user.email, role: user.role } as any;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // @ts-ignore
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.user.id = token.id;
      // @ts-ignore
      session.user.role = token.role;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };