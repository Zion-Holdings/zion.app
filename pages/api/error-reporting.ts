import { NextApiRequest, NextApiResponse } from 'next';

interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
  viewport?: {
    width: number;
    height: number;
  } | null;
  [key: string]: unknown;
}

interface ErrorResponse {
  success: boolean;
  message: string;
  errorId?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
      error: 'Only POST method is supported'
    });
  }

  try {
    const errorReport: ErrorReport = req.body;

    // Validate required fields
    if (!errorReport.message || !errorReport.timestamp) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        error: 'message and timestamp are required'
      });
    }

    // Generate unique error ID
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Process error report
    const processedReport = {
      ...errorReport,
      errorId,
      processedAt: new Date().toISOString(),
      serverTimestamp: Date.now(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || 'unknown'
    };

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      // console.log('Error Report:', processedReport);
    }

    // Send to external error tracking service if configured
    if (process.env.EXTERNAL_ERROR_TRACKING_URL) {
      try {
        await fetch(process.env.EXTERNAL_ERROR_TRACKING_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.EXTERNAL_ERROR_TRACKING_API_KEY || ''}`
          },
          body: JSON.stringify(processedReport)
        });
      } catch {
        // Silently handle external error tracking failures
      }
    }

    // Store error report (in a real app, this would go to a database)
    // For now, we'll just acknowledge receipt

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Error report received successfully',
      errorId
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: errorMessage
    });
  }
}