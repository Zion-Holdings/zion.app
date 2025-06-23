import { PrismaClient } from '@prisma/client';

// Global Prisma instance for connection reuse
let prisma: PrismaClient | null = null;

// Database connection options
const DB_OPTIONS = {
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Connection pool settings
  __internal: {
    engine: {
      connectTimeout: 5000,      // 5 seconds connection timeout
      queryTimeout: 10000,       // 10 seconds query timeout
      poolTimeout: 10000,        // 10 seconds pool timeout
    },
  },
} as any;

/**
 * Get or create a Prisma client instance with connection pooling
 */
export function getDatabaseClient(): PrismaClient {
  if (!prisma) {
    console.log('Creating new Prisma client instance...');
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
    console.error('Database query failed:', error);
    
    if (fallbackData !== undefined) {
      console.log('Returning fallback data due to database error');
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
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
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
    console.error('Failed to get database stats:', error);
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
      console.log('Database disconnected successfully');
    } catch (error) {
      console.error('Error disconnecting from database:', error);
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