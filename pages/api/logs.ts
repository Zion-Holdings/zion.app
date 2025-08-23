import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import * as Sentry from '@sentry/nextjs';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';


// Type for individual log entry coming from ProductionLogger
interface ClientLogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
  sessionId: string;
  url?: string;
  userAgent?: string;
  userId?: string;
}

// Ensure log directory exists (best-effort, no throw on failure in read-only envs)
function ensureLogDir(dir: string) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch {
    // Ignored: Fail silently if the environment is read-only (e.g. Vercel serverless)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { entries } = req.body as { entries?: ClientLogEntry[] };

  if (!Array.isArray(entries) || entries.length === 0) {
    return res.status(400).json({ message: 'Invalid payload – expected { entries: ClientLogEntry[] }' });
  }

  try {
    // 1. Persist to local filesystem (if writable)
    const logDir = path.join(process.cwd(), 'logs');
    ensureLogDir(logDir);

    const filePath = path.join(
      logDir,
      `client-${new Date().toISOString().slice(0, 10)}.log`, // yyyy-mm-dd
    );

    const serialized = entries.map((e) => JSON.stringify(e)).join('\n') + '\n';

    try {
      fs.appendFileSync(filePath, serialized, 'utf8');
    } catch {
      // Ignore if file system not writable (e.g. serverless). Continue to forwarding.
    }

    // 2. Forward errors/warnings to Sentry if configured
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      entries.forEach((entry) => {
        if (entry.level === 'error' || entry.level === 'warn') {
          // Map our log levels to Sentry's SeverityLevel
          const sentryLevel: Sentry.SeverityLevel = entry.level === 'warn' ? 'warning' : entry.level;
          Sentry.captureMessage(entry.message, {
            level: sentryLevel,
            extra: {
              level: entry.level,
              context: entry.context,
              timestamp: entry.timestamp,
              sessionId: entry.sessionId,
              url: entry.url,
              userAgent: entry.userAgent,
              userId: entry.userId,
            },
          });
        }
      });
    }

    // 3. Optional: Forward to external webhook if configured via env
    if (process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL) {
      try {
        const doFetch = typeof fetch !== 'undefined' ? fetch : (await import('node-fetch')).default as unknown as typeof fetch;
        await doFetch(process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ entries }),
        });
      } catch (err) {
        // swallow – do not break client logging on webhook failure
        logWarn('Failed to forward logs to webhook:', { error: err });
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    // Log server-side failure
    logErrorToProduction('Error in /api/logs:', error);
    Sentry.captureException(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
} 