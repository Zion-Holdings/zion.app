type Key = string;

interface RateBucket {
  tokens: number;
  lastRefillMs: number;
}

const buckets = new Map<Key, RateBucket>();

export interface RateLimitOptions {
  windowMs: number; // e.g., 60000 for 1 min
  max: number; // max requests per window
}

export function getClientKey(req: any): string {
  const ip =
    (req.headers['x-forwarded-for'] as string) ||
    req.socket?.remoteAddress ||
    req.connection?.remoteAddress ||
    'unknown';
  const path = req.url || 'unknown-path';
  return `${ip}::${path}`;
}

export function rateLimitCheck(key: Key, opts: RateLimitOptions): boolean {
  const now = Date.now();
  const refillRate = opts.max / opts.windowMs; // tokens per ms
  let bucket = buckets.get(key);
  if (!bucket) {
    bucket = { tokens: opts.max, lastRefillMs: now };
    buckets.set(key, bucket);
  }
  // Refill
  const elapsed = now - bucket.lastRefillMs;
  bucket.tokens = Math.min(opts.max, bucket.tokens + elapsed * refillRate);
  bucket.lastRefillMs = now;

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    return true;
  }
  return false;
}

export function withRateLimit<TContext = any>(
  handler: (req: any, res: any) => Promise<void> | void,
  options: RateLimitOptions = { windowMs: 60_000, max: 60 }
) {
  return async (req: any, res: any) => {
    const key = getClientKey(req);
    const ok = rateLimitCheck(key, options);
    if (!ok) {
      res.status(429).json({ error: 'Too many requests. Please slow down.' });
      return;
    }
    return handler(req, res);
  };
}