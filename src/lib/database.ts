import { PrismaClient, Prisma } from '@prisma/client';
import { logInfo, logErrorToProduction, logDebug } from '@/utils/productionLogger';
import type { PrismaClientOptions } from '@prisma/client';

// Global Prisma instance for connection reuse
let prisma: PrismaClient | null = null;

<<<<<<< HEAD
// Database connection options
const DB_OPTIONS: PrismaClientOptions = {
=======
// Database connection options (only valid PrismaClientOptions)
const DB_OPTIONS: Prisma.PrismaClientOptions = {
>>>>>>> 0eea3c02d0774aa77c244abe4cb7fd44590c35ef
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL || '',
    },
  },
<<<<<<< HEAD
  // Connection pool settings
  __internal: {
    engine: {
      connectTimeout: 5000,      // 5 seconds connection timeout
      queryTimeout: 10000,       // 10 seconds query timeout
      poolTimeout: 10000,        // 10 seconds pool timeout
    },
  },
=======
  // Remove __internal, as it's not a valid PrismaClientOptions property
>>>>>>> 0eea3c02d0774aa77c244abe4cb7fd44590c35ef
};

/**
 * Get or create a Prisma client instance with connection pooling
 */
export function getDatabaseClient(): PrismaClient {
  if (!prisma) {
    logInfo('Creating new Prisma client instance...');
    prisma = new PrismaClient(DB_OPTIONS);
    
    // Handle graceful shutdown
    process.on('beforeExit', async () => {
      if (prisma) {
        await prisma.$disconnect();
        prisma = null;
      }
    });
  }
  
  return prisma;
}

/**
 * Execute a database query with timeout and error handling
 */
export async function executeWithTimeout<T>(
  queryFn: (client: PrismaClient) => Promise<T>,
  timeoutMs: number = 5000,
  fallbackData?: T
): Promise<T> {
  const client = getDatabaseClient();
  
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error(`Database query timeout after ${timeoutMs}ms`)), timeoutMs);
  });

  try {
    const result = await Promise.race([
      queryFn(client),
      timeoutPromise
    ]);
    
    return result;
  } catch (error) {
    logErrorToProduction('Database query failed', error as Error);
    
    if (fallbackData !== undefined) {
      logDebug('Returning fallback data due to database error');
      return fallbackData;
    }
    
    throw error;
  }
}

/**
 * Test database connection
 */
export async function testDatabaseConnection(): Promise<boolean> {
  try {
    const client = getDatabaseClient();
    await client.$queryRaw`SELECT 1`;
    logInfo('Database connection successful');
    return true;
  } catch (error) {
    logErrorToProduction('Database connection failed', error as Error);
    return false;
  }
}

/**
 * Get database connection stats
 */
export async function getDatabaseStats() {
  try {
    const client = getDatabaseClient();
    
    // These might not be available in all Prisma versions
    const stats = {
      connected: true,
      pool: {
        // Add pool stats if available
        active: 'unknown',
        idle: 'unknown',
        total: 'unknown'
      }
    };
    
    return stats;
  } catch (error) {
    logErrorToProduction('Failed to get database stats', error as Error);
    return {
      connected: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Gracefully disconnect from database
 */
export async function disconnectDatabase(): Promise<void> {
  if (prisma) {
    try {
      await prisma.$disconnect();
      prisma = null;
    logInfo('Database disconnected successfully');
    } catch (error) {
    logErrorToProduction('Error disconnecting from database', error as Error);
    }
  }
}

/**
 * Health check for database
 */
export async function databaseHealthCheck(): Promise<{
  status: 'healthy' | 'unhealthy' | 'degraded';
  responseTime: number;
  error?: string;
}> {
  const startTime = Date.now();
  
  try {
    await executeWithTimeout(
      async (client) => client.$queryRaw`SELECT 1`,
      3000 // 3 second timeout for health check
    );
    
    const responseTime = Date.now() - startTime;
    
    return {
      status: responseTime > 1000 ? 'degraded' : 'healthy',
      responseTime
    };
  } catch (error) {
    return {
      status: 'unhealthy',
      responseTime: Date.now() - startTime,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export default {
  getClient: getDatabaseClient,
  executeWithTimeout,
  testConnection: testDatabaseConnection,
  getStats: getDatabaseStats,
  disconnect: disconnectDatabase,
  healthCheck: databaseHealthCheck
}; 