// API endpoint for performance metrics collection
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PerformanceReport } from '@/utils/performance-monitor';

interface PerformanceMetricsRequest extends NextApiRequest {
  body: PerformanceReport;
}

export default async function handler(
  req: PerformanceMetricsRequest,
  res: NextApiResponse
): Promise<void> {
  if (req['method'] !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const performanceReport = req['body'];
    
    // Validate the report structure
    if (!performanceReport.metrics || !Array.isArray(performanceReport.metrics)) {
      res.status(400).json({ error: 'Invalid performance report format' });
      return;
    }

    // Log performance metrics (in production, you would store these in a database)
    // Removed console.log('🔧 Performance Report:', { ... });

    // Log critical performance issues
    const poorMetrics = performanceReport.metrics.filter(m => m.rating === 'poor');
    if (poorMetrics.length > 0) {
      console.warn('⚠️ Poor Performance Metrics Detected:', poorMetrics.map(m => 
        `${m.name}: ${m.value}ms`
      ));
    }

    // In production, you would:
    // 1. Store metrics in a database (e.g., MongoDB, PostgreSQL)
    // 2. Send to analytics service (e.g., Google Analytics, DataDog)
    // 3. Trigger alerts for critical performance issues
    // 4. Aggregate metrics for performance dashboards

    // Example: Send to external analytics service
    if (process.env['NODE_ENV'] === 'production' && process.env['ANALYTICS_ENDPOINT']) {
      try {
        await fetch(process.env['ANALYTICS_ENDPOINT'], {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env['ANALYTICS_API_KEY']}`
          },
          body: JSON.stringify({
            type: 'performance',
            data: performanceReport,
            timestamp: Date.now()
          })
        });
      } catch (analyticsError) {
        console.error('Failed to send to analytics service:', analyticsError);
        // Don't fail the request if analytics fails
      }
    }

    // Store in memory for development (replace with database in production)
    if (typeof (global as Record<string, unknown>).performanceMetrics === 'undefined') {
      (global as Record<string, unknown>).performanceMetrics = [];
    }
    
    // Keep only the last 100 reports in memory
    (global as Record<string, unknown>).performanceMetrics.push(performanceReport);
    if ((global as Record<string, unknown>).performanceMetrics.length > 100) {
      (global as Record<string, unknown>).performanceMetrics = (global as Record<string, unknown>).performanceMetrics.slice(-100);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Performance metrics recorded',
      metricsCount: performanceReport.metrics.length
    });

  } catch (error) {
    console.error('Error processing performance metrics:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process performance metrics'
    });
  }
}