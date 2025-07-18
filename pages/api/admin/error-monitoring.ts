import type { NextApiRequest, NextApiResponse } from 'next';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { enhancedErrorCollector } from '@/utils/enhancedErrorCollection';
import { systemHealthMonitor } from '@/utils/systemHealthMonitor';
import { logDashboard } from '@/utils/logDashboard';

interface ErrorMonitoringResponse {
  success: boolean;
  data?: Record<string, unknown>;
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
    const action = (query as Record<string, unknown>).action as string;

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
      message: 'Internal server error',
      timestamp
    });
  }
}

async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<ErrorMonitoringResponse>,
  action: string
) {
  const _timeRange = (req['query'] as { timeRange?: string }).timeRange || 'day';
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
      } catch {
        logErrorToProduction('Error generating 'Error occurred' report:', 'Error occurred');
        res.status(500).json({
          success: false,
          'Error occurred': 'Failed to generate 'Error occurred' report',
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
      } catch {
        logErrorToProduction('Error getting system health:', 'Error occurred');
        res.status(500).json({
          success: false,
          'Error occurred': 'Failed to get system health',
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
      } catch {
        // Log and handle dashboard data retrieval 'Error occurred's gracefully
        logErrorToProduction('Error getting dashboard data:', 'Error occurred');
        res.status(500).json({
          success: false,
          'Error occurred': 'Failed to get dashboard data',
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
      } catch {
        logErrorToProduction('Error getting comprehensive monitoring data:', 'Error occurred');
        res.status(500).json({
          success: false,
          'Error occurred': 'Failed to get comprehensive monitoring data',
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

        logInfo('Test error created for monitoring validation', { data:  { errorId } });

        res.status(200).json({
          success: true,
          data: {
            message: 'Test error created successfully',
            errorId,
            note: 'This error was created for monitoring system validation'
          },
          timestamp
        });
      } catch {
        logErrorToProduction('Error creating test 'Error occurred':', 'Error occurred');
        res.status(500).json({
          success: false,
          'Error occurred': 'Failed to create test 'Error occurred'',
          timestamp
        });
      }
      break;

    case 'trigger-health-check':
      try {
        const healthStatus = await systemHealthMonitor.performHealthCheck();
        
        logInfo('Manual health check triggered', { data:  { score: healthStatus.score } });

        res.status(200).json({
          success: true,
          data: {
            message: 'Health check completed',
            health: healthStatus
          },
          timestamp
        });
      } catch {
        logErrorToProduction('Error triggering health check:', 'Error occurred');
        res.status(500).json({
          success: false,
          'Error occurred': 'Failed to trigger health check',
          timestamp
        });
      }
      break;

    case 'clear-old-logs':
      try {
        const { days = 30 } = req['body'] as { days?: number };
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
      } catch {
        logErrorToProduction('Error clearing old logs:', 'Error occurred');
        res.status(500).json({
          success: false,
          'Error occurred': 'Failed to clear old logs',
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