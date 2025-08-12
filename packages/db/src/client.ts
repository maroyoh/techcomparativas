import { PrismaClient } from '@prisma/client';

/**
 * Cliente Prisma singleton.
 *
 * En entornos de desarrollo se almacena en `globalThis` para evitar
 * re-inicializaciones al usar `next dev` con recarga en caliente.  En
 * producción simplemente se instancia una vez.  La instancia se
 * importa en los API routes y servidores de renderizado para acceder a
 * la base de datos.
 */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;