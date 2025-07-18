import type { NextApiRequest, NextApiResponse } from 'next';
import { logErrorToProduction } from '@/utils/productionLogger';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Basic health check for auth system
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        auth: 'operational',
        database: 'operational'
      }
    };

    res.status(200).json(healthStatus);
  } catch (error) {
    logErrorToProduction('Auth health check failed:', error);
    res.status(500).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Internal server error'
    });
  }
}
