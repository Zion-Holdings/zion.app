import { PrismaClient } from '@prisma/client';

/**
 * Attempts to connect the provided Prisma client within a timeout.
 * Rejects if the connection is not established in the given time.
 */
export async function connectWithTimeout(
  prisma: PrismaClient,
  timeoutMs = 3000
): Promise<void> {
  await Promise.race([
    prisma.$connect(),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Database connection timed out')), timeoutMs)
    ),
  ]);
}
