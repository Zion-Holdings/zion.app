// API endpoint for performance metrics collection
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PerformanceReport } from '@/utils/performance-monitor';

interface PerformanceData {
  timestamp: string;
  url: string;
  userAgent: string;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  sessionId: string;
}

interface ErrorData {
  timestamp: string;
  url: string;
  userAgent: string;
  error: string;
  stack?: string;
  sessionId: string;
}

// In-memory storage for demo purposes
// In production, use a proper database
let performanceMetrics: PerformanceData[] = [];
let errorLogs: ErrorData[] = [];

export default function handler(
  req: NextApiRequest,
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
      }
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  } else if (req.method === 'GET') {
    try {
      const { type, limit = 100 } = req.query;
      
      if (type === 'performance') {
        const limitedMetrics = performanceMetrics
          .slice(-Number(limit))
          .map(metric => ({
            ...metric,
            timestamp: new Date(metric.timestamp).toLocaleString()
          }));

        res.status(200).json({
          success: true,
          data: limitedMetrics,
          total: performanceMetrics.length,
          average: calculateAverages(performanceMetrics)
        });
      } else if (type === 'error') {
        const limitedErrors = errorLogs
          .slice(-Number(limit))
          .map(error => ({
            ...error,
            timestamp: new Date(error.timestamp).toLocaleString()
          }));

        res.status(200).json({
          success: true,
          data: limitedErrors,
          total: errorLogs.length
        });
      } else if (type === 'summary') {
        res.status(200).json({
          success: true,
          summary: {
            performance: {
              total: performanceMetrics.length,
              average: calculateAverages(performanceMetrics),
              recent: performanceMetrics.slice(-10).length
            },
            errors: {
              total: errorLogs.length,
              recent: errorLogs.slice(-10).length
            }
          }
        });
      } else {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid type parameter' 
        });
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ 
      success: false, 
      message: `Method ${req.method} Not Allowed` 
    });
  }
}

function calculateAverages(metrics: PerformanceData[]) {
  if (metrics.length === 0) return null;

  const sums = metrics.reduce((acc, metric) => ({
    fcp: acc.fcp + metric.fcp,
    lcp: acc.lcp + metric.lcp,
    fid: acc.fid + metric.fid,
    cls: acc.cls + metric.cls,
    ttfb: acc.ttfb + metric.ttfb
  }), { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0 });

  return {
    fcp: Math.round(sums.fcp / metrics.length),
    lcp: Math.round(sums.lcp / metrics.length),
    fid: Math.round(sums.fid / metrics.length),
    cls: Math.round((sums.cls / metrics.length) * 1000) / 1000,
    ttfb: Math.round(sums.ttfb / metrics.length)
  };
}