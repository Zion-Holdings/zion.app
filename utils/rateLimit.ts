import type { NextApiRequest, NextApiResponse } from 'next';

const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS = 30; // per IP per endpoint per window

const store: Map<string, number[]> = new Map();

export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const key = `${ip}:${req.url}`;
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (store.get(key) || []).filter((t) => t > windowStart);
  timestamps.push(now);
  store.set(key, timestamps);

  if (timestamps.length > MAX_REQUESTS) {
    res.setHeader('Retry-After', Math.ceil(WINDOW_MS / 1000).toString());
    res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    return false;
  }

  return true;
}