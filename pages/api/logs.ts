import { NextApiRequest, NextApiResponse } from 'next';
import {
  logInfo as serverLogInfo,
  logWarn as serverLogWarn,
  logError as serverLogError,
  logDebug as serverLogDebug
} from '@/utils/productionLogger'; // Renamed to avoid conflict with client-side logger variable if any

interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: Record<string, any>;
  timestamp: string;
  sessionId: string;
  correlationId?: string | null; // Added to match productionLogger's LogEntry
  url?: string;
  userAgent?: string;
  userId?: string | null; // Matched to productionLogger's LogEntry
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

    // Process all entries with server-side productionLogger
    for (const entry of entries) {
      const serverContext = {
        clientTimestamp: entry.timestamp,
        sessionId: entry.sessionId,
        url: entry.url,
        userAgent: entry.userAgent,
        userId: entry.userId,
        originalContext: entry.context,
      };

      switch (entry.level) {
        case 'debug':
          // Server-side debug logs from client are often too noisy for production
          // Only log them if server is also in debug mode or explicit client_debug mode is enabled
          if (process.env.NODE_ENV === 'development' || process.env.DEBUG === 'true' || process.env.CLIENT_DEBUG_LOGGING === 'true') {
            serverLogDebug(`Client Debug: ${entry.message}`, serverContext);
          }
          break;
        case 'info':
          serverLogInfo(`Client Info: ${entry.message}`, serverContext);
          break;
        case 'warn':
          serverLogWarn(`Client Warn: ${entry.message}`, serverContext);
          break;
        case 'error':
          serverLogError(`Client Error: ${entry.message}`, entry.context?.error || new Error(entry.message), serverContext);
          break;
        default:
          serverLogWarn(`Unknown client log level: ${entry.level} - Message: ${entry.message}`, serverContext);
          break;
      }
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