// API endpoint for enhanced error reporting
import { NextApiRequest, NextApiResponse } from 'next';
import { EnhancedError } from '@/utils/enhanced-error-logger';

interface ErrorReportRequest extends NextApiRequest {
  body: {
    error: EnhancedError;
    breadcrumbs: Array<{
      timestamp: number;
      category: string;
      message: string;
      level: 'info' | 'warn' | 'error';
    }>;
  };
}

export default async function handler(
  req: ErrorReportRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { error, breadcrumbs } = req.body;
    
    // Validate the error report structure
    if (!error || typeof error !== 'object') {
      res.status(400).json({ error: 'Invalid error report format' });
      return;
    }

    // Enhanced logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('🚨 Enhanced Error Report:', {
        id: error.id,
        message: error.message,
        severity: error.severity,
        source: error.source,
        count: error.count,
        environment: error.context.environment,
        url: error.context.url,
        timestamp: new Date(error.context.timestamp).toISOString()
      });

      // Log breadcrumbs for context
      if (breadcrumbs && breadcrumbs.length > 0) {
        console.log('📋 Error Breadcrumbs:');
        breadcrumbs.forEach((breadcrumb, index) => {
          console.log(`  ${index + 1}. [${breadcrumb.level}] ${breadcrumb.category}: ${breadcrumb.message}`);
        });
      }

      // Log stack trace for critical errors
      if (error.severity === 'critical' && error.stack) {
        console.log('🔍 Stack Trace:', error.stack);
      }
    }

    // Process error based on severity
    if (error.severity === 'critical') {
      // In production, you would:
      // 1. Send to error tracking service (Sentry, Bugsnag, etc.)
      // 2. Send Slack/email notifications
      // 3. Create incident tickets
      console.error('🔥 CRITICAL ERROR DETECTED:', error.message);
    }

    // Store error in memory for development (replace with database in production)
    if (typeof (global as any).errorReports === 'undefined') {
      (global as any).errorReports = [];
    }
    
    // Keep only the last 50 error reports in memory
    (global as any).errorReports.push({
      ...error,
      breadcrumbs,
      reportedAt: Date.now()
    });
    
    if ((global as any).errorReports.length > 50) {
      (global as any).errorReports = (global as any).errorReports.slice(-50);
    }

    // In production, you would integrate with:
    // 1. Error tracking services
    if (process.env.NODE_ENV === 'production' && process.env.ERROR_REPORTING_ENDPOINT) {
      try {
        await fetch(process.env.ERROR_REPORTING_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ERROR_REPORTING_API_KEY}`
          },
          body: JSON.stringify({
            type: 'enhanced-error',
            data: { error, breadcrumbs },
            timestamp: Date.now()
          })
        });
      } catch (reportingError) {
        console.error('Failed to send to external error service:', reportingError);
        // Don't fail the request if external service fails
      }
    }

    // 2. Database storage (example with different database types)
    // await storeErrorInDatabase(error, breadcrumbs);

    // 3. Analytics services
    // await sendErrorToAnalytics(error);

    // 4. Notification services for critical errors
    if (error.severity === 'critical') {
      // await sendCriticalErrorNotification(error);
    }

    // Response with error analysis
    const response = {
      success: true,
      message: 'Error report processed',
      errorId: error.id,
      severity: error.severity,
      recommendations: generateRecommendations(error)
    };

    res.status(200).json(response);

  } catch (processingError) {
    console.error('Error processing error report:', processingError);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process error report'
    });
  }
}

function generateRecommendations(error: EnhancedError): string[] {
  const recommendations: string[] = [];

  // Generate recommendations based on error type
  switch (error.source) {
    case 'javascript':
      recommendations.push('Check for undefined variables or null references');
      if (error.message.includes('Cannot read properties')) {
        recommendations.push('Add null/undefined checks before accessing object properties');
      }
      break;
      
    case 'promise':
      recommendations.push('Add proper error handling with try-catch or .catch()');
      recommendations.push('Check for unhandled async operations');
      break;
      
    case 'network':
      recommendations.push('Implement retry logic for network requests');
      recommendations.push('Add offline handling and error user feedback');
      break;
      
    case 'render':
      recommendations.push('Check component props and state initialization');
      recommendations.push('Add error boundaries around problematic components');
      break;
  }

  // Memory-related recommendations
  if (error.context.performanceMetrics?.memory && error.context.performanceMetrics.memory > 50000000) {
    recommendations.push('Monitor memory usage - potential memory leak detected');
  }

  return recommendations;
}