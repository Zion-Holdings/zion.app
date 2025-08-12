import type { NextApiRequest, NextApiResponse } from 'next';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { enhancedErrorCollector } from '@/utils/enhancedErrorCollection';
import { systemHealthMonitor } from '@/utils/systemHealthMonitor';
import { logDashboard } from '@/utils/logDashboard';

interface ErrorMonitoringResponse {
  success: boolean;
  data?: any;
  error?: string;
  timestamp: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>
) {
  const timestamp = new Date().toISOString();

  try {
    const { method, query } = req;
    const action = (query as any).action as string;

    logInfo('Error monitoring API called', { method, action });

    switch (method) {
      case 'GET':
        await handleGet(req, res, action);
        break;
      
      case 'POST':
        await handlePost(req, res, action);
        break;
      
      default:
        res.status(405).json({
          success: false,
          error: 'Method not allowed',
          timestamp
        });
    }
  } catch (error) {
    logErrorToProduction('Error monitoring API error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp
    });
  }
}

async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>,
  action: string
) {
  const { timeRange = 'day' } = req.query as any;
  const timestamp = new Date().toISOString();

  switch (action) {
    case 'report':
      try {
        const errorReport = enhancedErrorCollector.getErrorReport();
        
        res.status(200).json({
          success: true,
          data: {
            report: errorReport,
            format: 'markdown'
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error generating error report:', error);
        res.status(500).json({
          success: false,
          error: 'Failed to generate error report',
          timestamp
        });
      }
      break;

    case 'health':
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
        logErrorToProduction('Error getting system health:', error);
        res.status(500).json({
          success: false,
          error: 'Failed to get system health',
          timestamp
        });
      }
      break;

    case 'dashboard':
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
        // Log and handle dashboard data retrieval errors gracefully
        logErrorToProduction('Error getting dashboard data:', error);
        res.status(500).json({
          success: false,
          error: 'Failed to get dashboard data',
          timestamp
        });
      }
      break;

    case 'comprehensive':
      try {
        // Get all monitoring data in one response
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
        logErrorToProduction('Error getting comprehensive monitoring data:', error);
        res.status(500).json({
          success: false,
          error: 'Failed to get comprehensive monitoring data',
          timestamp
        });
      }
      break;

    default:
      res.status(400).json({
        success: false,
        error: 'Invalid action. Use: report, health, dashboard, or comprehensive',
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
    case 'test-error':
      try {
        // Create a test error for monitoring system validation
        const testError = new Error('Test error for monitoring system validation');
        const errorId = enhancedErrorCollector.collectError(testError, {
          severity: 'low',
          category: 'system',
          tags: ['test', 'monitoring'],
          context: {
            source: 'monitoring-test',
            timestamp,
            test: true,
            api: {
              endpoint: '/api/admin/error-monitoring',
              method: 'POST',
              statusCode: 200
            },
            userId: 'test-user'
          }
        });

        logInfo('Test error created for monitoring validation', { errorId });

        res.status(200).json({
          success: true,
          data: {
            message: 'Test error created successfully',
            errorId,
            note: 'This error was created for monitoring system validation'
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error creating test error:', error);
        res.status(500).json({
          success: false,
          error: 'Failed to create test error',
          timestamp
        });
      }
      break;

    case 'trigger-health-check':
      try {
        const healthStatus = await systemHealthMonitor.performHealthCheck();
        
        logInfo('Manual health check triggered', { score: healthStatus.score });

        res.status(200).json({
          success: true,
          data: {
            message: 'Health check completed',
            health: healthStatus
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error triggering health check:', error);
        res.status(500).json({
          success: false,
          error: 'Failed to trigger health check',
          timestamp
        });
      }
      break;

    case 'clear-old-logs':
      try {
        const { days = 30 } = req.body as any;
        const clearedCount = await logDashboard.clearOldLogs(Number(days));
        
        logInfo('Old logs cleared', { days, clearedCount });

        res.status(200).json({
          success: true,
          data: {
            message: `Cleared ${clearedCount} old logs`,
            days: Number(days),
            clearedCount
          },
          timestamp
        });
      } catch (error) {
        logErrorToProduction('Error clearing old logs:', error);
        res.status(500).json({
          success: false,
          error: 'Failed to clear old logs',
          timestamp
        });
      }
      break;

    default:
      res.status(400).json({
        success: false,
        error: 'Invalid action. Use: test-error, trigger-health-check, or clear-old-logs',
        timestamp
      });
  }
} 