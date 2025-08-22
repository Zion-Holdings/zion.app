import { NextApiRequest, NextApiResponse } from 'next';

interface AnalyticsData {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  page: string;
  userAgent: string;
  referrer: string;
  url: string;
  [key: string]: unknown;
}

interface AnalyticsResponse {
  success: boolean;
  message: string;
  data?: AnalyticsData;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyticsResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
      error: 'Only POST method is supported'
    });
  }

  try {
    const data: AnalyticsData = req.body;

    // Validate required fields
    if (!data.event || !data.sessionId || !data.timestamp) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        error: 'event, sessionId, and timestamp are required'
      });
    }

    // Process analytics data
    const processedData = {
      ...data,
      processedAt: new Date().toISOString(),
      serverTimestamp: Date.now()
    };

    // Store analytics data (in a real app, this would go to a database)
    // For now, we'll just log it to the server console
    if (process.env.NODE_ENV === 'development') {
      // console.log('Analytics Event:', processedData);
    }

    // Send to external analytics service if configured
    if (process.env.EXTERNAL_ANALYTICS_URL) {
      try {
        await fetch(process.env.EXTERNAL_ANALYTICS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.EXTERNAL_ANALYTICS_API_KEY || ''}`
          },
          body: JSON.stringify(processedData)
        });
      } catch {
        // Silently handle external analytics failures
      }
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Analytics data processed successfully',
      data: processedData
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