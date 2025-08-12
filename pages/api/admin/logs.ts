import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {logErrorToProduction} from '@/utils/productionLogger';


interface LogEntry {
  id: string;
  timestamp: string;
  level: 'debug' | 'info' | 'warn' | 'error' | 'critical';
  message: string;
  category: string;
  context?: Record<string, unknown>;
  stack?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
  sessionId: string;
  source: 'client' | 'server' | 'middleware' | 'api';
  component?: string;
  feature?: string;
  error?: {
    name: string;
    message: string;
    stack?: string;
    cause?: unknown;
  };
  performance?: {
    memory?: number;
    timing?: number;
    fps?: number;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const logsDir = path.join(process.cwd(), 'logs');
    const logs: LogEntry[] = [];

    // Read all log files
    if (fs.existsSync(logsDir)) {
      const files = fs.readdirSync(logsDir);
      const logFiles = files.filter(file => file.endsWith('.log'));

      for (const file of logFiles) {
        try {
          const filePath = path.join(logsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const lines = content.split('\n').filter(line => line.trim());

          for (const line of lines) {
            try {
              const logEntry = JSON.parse(line);
              logs.push(logEntry);
            } catch (parseError) {
              // Skip malformed log entries
            }
          }
        } catch (fileError) {
          // Skip problematic files
        }
      }
    }

    // Sort logs by timestamp (newest first)
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Apply query filters
    let filtered = logs;
    const query = req.query as { level?: string; category?: string; source?: string; limit?: string };
    const level = query.level;
    const category = query.category;
    const source = query.source;
    const limit = query.limit || '100';

    if (level && typeof level === 'string') {
      filtered = filtered.filter(log => log.level === level);
    }

    if (category && typeof category === 'string') {
      filtered = filtered.filter(log => log.category === category);
    }

    if (source && typeof source === 'string') {
      filtered = filtered.filter(log => log.source === source);
    }

    // Limit results
    const limitNum = parseInt(limit as string, 10);
    if (!isNaN(limitNum)) {
      filtered = filtered.slice(0, limitNum);
    }

    // Calculate statistics
    const errorCount = logs.filter(log => log.level === 'error' || log.level === 'critical').length;
    const warningCount = logs.filter(log => log.level === 'warn').length;
    const totalCount = logs.length;

    return res.status(200).json({
      logs: filtered,
      statistics: {
        errorCount,
        warningCount,
        totalCount,
        filteredCount: filtered.length,
      },
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    logErrorToProduction('Error reading logs:', error);
    return res.status(500).json({ 
      message: 'Internal Server Error',
      logs: [],
      statistics: {
        errorCount: 0,
        warningCount: 0,
        totalCount: 0,
        filteredCount: 0,
      },
      lastUpdated: new Date().toISOString(),
    });
  }
} 