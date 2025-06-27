import { NextApiRequest, NextApiResponse } from 'next';
import { logger } from '../../src/utils/logger';

interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: Record<string, any>;
  timestamp: string;
  sessionId: string;
  url?: string;
  userAgent?: string;
  userId?: string;
}

interface LogsRequestBody {
  entries: LogEntry[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { entries } = req.body as LogsRequestBody;

    if (!entries || !Array.isArray(entries)) {
      return res.status(400).json({ error: 'Invalid request body. Expected entries array.' });
    }

    // Validate entries
    for (const entry of entries) {
      if (!entry.level || !entry.message || !entry.timestamp) {
        return res.status(400).json({ error: 'Invalid log entry format' });
      }
    }

    // In production, you might want to:
    // 1. Store logs in a database
    // 2. Forward to a logging service like Datadog, New Relic, etc.
    // 3. Filter sensitive information
    
    // For now, just acknowledge receipt
    if (process.env.NODE_ENV === 'development') {
      console.log(`[API] Received ${entries.length} log entries:`, {
        sessionIds: [...new Set(entries.map(e => e.sessionId))],
        levels: entries.reduce((acc, e) => {
          acc[e.level] = (acc[e.level] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
      });
    }

    // Forward critical errors to server-side logging
    const errorEntries = entries.filter(entry => entry.level === 'error');
    for (const entry of errorEntries) {
      logger.error(`Client Error: ${entry.message}`, {
        context: entry.context,
        clientContext: {
          sessionId: entry.sessionId,
          url: entry.url,
          userAgent: entry.userAgent,
          userId: entry.userId,
          timestamp: entry.timestamp,
        },
      });
    }

    return res.status(200).json({ 
      success: true,
      processed: entries.length,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Error processing logs:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process log entries',
    });
  }
} 