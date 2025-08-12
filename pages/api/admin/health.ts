import type { NextApiRequest, NextApiResponse } from 'next';
import { errorReportingDashboard, type HealthData } from '@/utils/errorReportingDashboard';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

interface HealthApiResponse {
  health: HealthData;
  success: boolean;
  timestamp: string;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthApiResponse>
) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({
        health: {} as HealthData,
        success: false,
        timestamp: new Date().toISOString(),
        message: 'Method not allowed'
      });
    }

    // Get comprehensive health data
    const healthData = errorReportingDashboard.getHealthData();

    // Determine response status based on health score
    let statusCode = 200;
    if (healthData.metrics.status === 'critical') {
      statusCode = 503; // Service Unavailable
    } else if (healthData.metrics.status === 'warning') {
      statusCode = 207; // Multi-Status (partial success)
    }

    // Log health check access
    logInfo('Health check accessed', {
      score: healthData.metrics.score,
      status: healthData.metrics.status,
      errorRate: healthData.metrics.errorRate,
      userAgent: req.headers['user-agent'] || 'unknown'
    });

    return res.status(statusCode).json({
      health: healthData,
      success: true,
      timestamp: new Date().toISOString(),
      message: `System health: ${healthData.metrics.status} (Score: ${healthData.metrics.score}/100)`
    });

  } catch (error) {
    logErrorToProduction('Health check API error', error);
    
    return res.status(500).json({
      health: {} as HealthData,
      success: false,
      timestamp: new Date().toISOString(),
      message: 'Internal server error during health check'
    });
  }
} 