import type { NextApiRequest, NextApiResponse } from 'next';
import { errorDashboard } from '@/utils/errorReportingDashboard';
import { logAnalyzer } from '@/utils/logAnalyzer';
import { logInfo } from '@/utils/productionLogger';

interface HealthResponse {
  status: 'healthy' | 'warning' | 'critical';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  metrics: {
    errorRate: number;
    criticalErrors: number;
    responseTime: number;
    memoryUsage: number;
  };
  health: {
    status: string;
    score: number;
    issues: string[];
    recommendations: string[];
  };
  errors: {
    summary: {
      total: number;
      critical: number;
      high: number;
      medium: number;
      low: number;
    };
    topErrors: Array<{
      patternId: string;
      description: string;
      occurrences: number;
      severity: string;
      solution?: string;
    }>;
    byCategory: { [category: string]: number };
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const dashboardData = errorDashboard.getDashboardData();
    const exportMetrics = errorDashboard.exportMetrics();

    const response: HealthResponse = {
      status: dashboardData.health.status,
      timestamp: new Date().toISOString(),
      uptime: Math.floor(dashboardData.metrics.uptime / 1000), // seconds
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      metrics: {
        errorRate: dashboardData.metrics.errorRate,
        criticalErrors: dashboardData.metrics.criticalErrors,
        responseTime: dashboardData.metrics.responseTime,
        memoryUsage: dashboardData.metrics.memoryUsage,
      },
      health: dashboardData.health,
      errors: {
        summary: dashboardData.errorAnalysis.summary,
        topErrors: dashboardData.errorAnalysis.topErrors,
        byCategory: dashboardData.errorStats,
      }
    };

    // Log health check
    logInfo('Health check requested', {
      status: response.status,
      errorRate: response.metrics.errorRate,
      uptime: response.uptime
    });

    // Set appropriate cache headers
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    // Set status code based on health
    const statusCode = response.status === 'healthy' ? 200 : 
                      response.status === 'warning' ? 200 : 503;

    return res.status(statusCode).json(response);
  } catch (error) {
    logInfo('Health check failed', { error: error instanceof Error ? error.message : String(error) });
    return res.status(500).json({ 
      error: 'Internal server error during health check' 
    });
  }
} 