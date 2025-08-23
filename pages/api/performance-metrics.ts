import type { NextApiRequest, NextApiResponse } from 'next';

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
) {
  if (req.method === 'POST') {
    try {
      const { type, data } = req.body;

      if (type === 'performance') {
        const performanceData: PerformanceData = {
          timestamp: new Date().toISOString(),
          url: data.url || req.headers.referer || 'unknown',
          userAgent: data.userAgent || req.headers['user-agent'] || 'unknown',
          fcp: data.fcp || 0,
          lcp: data.lcp || 0,
          fid: data.fid || 0,
          cls: data.cls || 0,
          ttfb: data.ttfb || 0,
          sessionId: data.sessionId || 'unknown'
        };

        performanceMetrics.push(performanceData);
        
        // Keep only last 1000 entries
        if (performanceMetrics.length > 1000) {
          performanceMetrics = performanceMetrics.slice(-1000);
        }

        res.status(200).json({ 
          success: true, 
          message: 'Performance data recorded',
          count: performanceMetrics.length
        });
      } else if (type === 'error') {
        const errorData: ErrorData = {
          timestamp: new Date().toISOString(),
          url: data.url || req.headers.referer || 'unknown',
          userAgent: data.userAgent || req.headers['user-agent'] || 'unknown',
          error: data.error || 'Unknown error',
          stack: data.stack,
          sessionId: data.sessionId || 'unknown'
        };

        errorLogs.push(errorData);
        
        // Keep only last 500 entries
        if (errorLogs.length > 500) {
          errorLogs = errorLogs.slice(-500);
        }

        res.status(200).json({ 
          success: true, 
          message: 'Error data recorded',
          count: errorLogs.length
        });
      } else {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid data type' 
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