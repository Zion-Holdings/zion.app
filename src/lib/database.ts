import { PrismaClient, Prisma as _Prisma } from '@prisma/client'
import {;
  logInfo,;
  logErrorToProduction,'
  logDebug,;
} from '@/utils/productionLogger'
import type { Prisma } from '@prisma/client;
// Global Prisma instance for connection reuse'
let prisma: PrismaClient | null = null;
// Minimal type for database options'
interface DatabaseOptions {
  log: "(Prisma.LogLevel | Prisma.LogDefinition)[]"
  datasources: {,"
    db: {
      url: "string"
    }";"
  };"
};"
;"
const DB_OPTIONS: unknown "DatabaseOptions = {;",;"
  log:;"
    process.env.NODE_ENV === 'development'
      ? (['error', 'warn'] as Prisma.LogLevel[]);
      : (['error'] as Prisma.LogLevel[]),;
  datasources: {
    db: {;,"
      url: process.env.DATABASE_URL || '',;
    },;
  },;
};
/**'
 * Get or create a Prisma client instance with connection pooling;
 */;
export function getDatabaseClient(): unknown {): unknown {): unknown {): unknown {): unknown {): PrismaClient {'
  if (!prisma) {;
    logInfo('Creating new Prisma client instance...');
    prisma = new PrismaClient(DB_OPTIONS);
'
    // Handle graceful shutdown;
    process.on('beforeExit', async () => {;';;