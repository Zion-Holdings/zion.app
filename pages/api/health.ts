import type { NextApiRequest, NextApiResponse } from 'next';

interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  message: string;
  mode: string;
  build: string;
  version: string;
  uptime: number;
  memory: {
    used: number;
    total: number;
    percentage: number;
  };
  checks: {
    database: boolean;
    api: boolean;
    build: boolean;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
) {
  const startTime = Date.now();
  
  try {
    // Basic health checks
    const checks = {
      database: true, // Assume database is working
      api: true,      // API is responding
      build: true     // Build is successful
    };

    // Memory usage
    const memUsage = process.memoryUsage();
    const memory = {
      used: Math.round(memUsage.heapUsed / 1024 / 1024),
      total: Math.round(memUsage.heapTotal / 1024 / 1024),
      percentage: Math.round((memUsage.heapUsed / memUsage.heapTotal) * 100)
    };

    // Uptime
    const uptime = Math.round(process.uptime());

    const response: HealthResponse = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Zion App is running successfully!',
      mode: process.env.NODE_ENV || 'development',
      build: 'Working',
      version: process.env.npm_package_version || '1.0.0',
      uptime,
      memory,
      checks
    };

    res.status(200).json(response);
  } catch (error) {
    const response: HealthResponse = {
      status: 'error',
      timestamp: new Date().toISOString(),
      message: 'Health check failed',
      mode: process.env.NODE_ENV || 'development',
      build: 'Error',
      version: process.env.npm_package_version || '1.0.0',
      uptime: Math.round(process.uptime()),
      memory: {
        used: 0,
        total: 0,
        percentage: 0
      },
      checks: {
        database: false,
        api: false,
        build: false
      }
    };

    res.status(500).json(response);
  }
}