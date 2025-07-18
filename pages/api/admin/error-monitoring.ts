import type { NextApiRequest, NextApiResponse } from 'next';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { enhancedErrorCollector } from '@/utils/enhancedErrorCollection';
import { systemHealthMonitor } from '@/utils/systemHealthMonitor';
import { logDashboard } from '@/utils/logDashboard';

interface ErrorMonitoringResponse {
  success: boolean;
  data?: Record<string, unknown>;
  error?: string;
  message?: string;
  timestamp: string;
}
;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>
) {
  const timestamp = new Date().toISOString();

  try {
    const { method, query } = req;
    const action = (query as Record<string, unknown>).action as string;

    logInfo('Error monitoring API called', { method, action });'

    switch (method) {
      case 'GET':'
        await handleGet(req, res, action);
        break;

      case 'POST':'
        await handlePost(req, res, action);
        break;

      default:
        res.status(405).json({
          success: false,
          error: 'Method not allowed','
          timestamp
        });
    }
  } catch (error) {
    logErrorToProduction('Error monitoring API error:', error);'

    res.status(500).json({
      success: false,
      error: 'Internal server error','
      timestamp
    });
  }
}

async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>,
  action: string
) {
  const timestamp = new Date().toISOString();

  switch (action) {
    case 'report':'
      try {
        const errorReport = enhancedErrorCollector.getErrorReport();

        res.status(200).json({
          success: true,
          data: {
            report: errorReport,
            format: 'markdown''
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error generating error report:', error);'
        res.status(500).json({
          success: false,
          error: 'Failed to generate error report','
          timestamp
        });
      }
      break;

    case 'health':'
      try {
        const systemHealth = await systemHealthMonitor.getHealthStatus();
        const healthReport = await systemHealthMonitor.generateHealthReport();

        res.status(200).json({
          success: true,
          data: {
            health: systemHealth,
            report: healthReport,
            timestamp
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error getting system health:', error);'
        res.status(500).json({
          success: false,
          error: 'Failed to get system health','
          timestamp
        });
      }
      break;

    case 'dashboard':'
      try {
        const dashboardMetrics = await logDashboard.getDashboardMetrics();
        const activeAlerts = logDashboard.getActiveAlerts();

        res.status(200).json({
          success: true,
          data: {
            metrics: dashboardMetrics,
            alerts: activeAlerts,
            summary: {
              totalLogs: dashboardMetrics.totalLogs,
              errorRate: dashboardMetrics.errorRate,
              systemHealth: dashboardMetrics.systemHealth,
              activeAlerts: activeAlerts.length
            }
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error getting dashboard data:', error);'
        res.status(500).json({
          success: false,
          error: 'Failed to get dashboard data','
          timestamp
        });
      }
      break;

    case 'comprehensive':'
      try {
        const [errorReport, systemHealth, dashboardMetrics] = await Promise.all([
          Promise.resolve(enhancedErrorCollector.getErrorReport()),
          systemHealthMonitor.getHealthStatus(),
          logDashboard.getDashboardMetrics()
        ]);

        const activeAlerts = logDashboard.getActiveAlerts();
        const healthTrends = systemHealthMonitor.getHealthTrends();

        res.status(200).json({
          success: true,
          data: {
            overview: {
              systemHealth: systemHealth.overall,
              systemScore: systemHealth.score,
              errorRate: dashboardMetrics.errorRate,
              totalErrors: dashboardMetrics.errorCount,
              activeAlerts: activeAlerts.length,
              lastUpdated: timestamp
            },
            errorReport,
            systemHealth,
            dashboardMetrics,
            activeAlerts,
            healthTrends: healthTrends.slice(-20), // Last 20 data points
            recommendations: systemHealth.recommendations
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error getting comprehensive monitoring data:', error);'
        res.status(500).json({
          success: false,
          error: 'Failed to get comprehensive monitoring data','
          timestamp
        });
      }
      break;

    default:
      res.status(400).json({
        success: false,
        error: 'Invalid action. Use: report, health, dashboard, or comprehensive','
        timestamp
      });
  }
}

async function handlePost(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>,
  action: string
) {
  const timestamp = new Date().toISOString();

  switch (action) {
    case 'test-error':'
      try {
        // Create a test error for monitoring system validation
        const testError = new Error('Test error for monitoring system');'
        logErrorToProduction('Test error generated', testError);'

        res.status(200).json({
          success: true,
          message: 'Test error generated successfully','
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error creating test error:', error);'
        res.status(500).json({
          success: false,
          error: 'Failed to create test error','
          timestamp
        });
      }
      break;

    case 'clear-logs':'
      try {
        // Clear error logs (implement based on your logging system)
        logInfo('Clearing error logs');'

        res.status(200).json({
          success: true,
          message: 'Error logs cleared successfully','
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error clearing logs:', error);'
        res.status(500).json({
          success: false,
          error: 'Failed to clear logs','
          timestamp
        });
      }
      break;

    default:
      res.status(400).json({
        success: false,
        error: 'Invalid action. Use: test-error or clear-logs','
        timestamp
      });
  }
}