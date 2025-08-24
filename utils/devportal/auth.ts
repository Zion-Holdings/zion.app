import crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { ApiKeyRecord, ApiLogRecord, ApiScope } from './types';
import { getApiKeys, saveApiKeys, getApiLogs, saveApiLogs } from './storage';

const TOKEN_PREFIX = 'zion_';

export function sha256(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

export function generateApiToken(): { token: string; hash: string } {
  const token = TOKEN_PREFIX + uuidv4().replace(/-/g, '') + uuidv4().replace(/-/g, '').slice(0, 8);
  return { token, hash: sha256(token) };
}

export function getUserIdFromRequest(req: NextApiRequest): string {
  const headerUserId = (req.headers['x-user-id'] as string) || '';
  return headerUserId || 'demo-user';
}

export function createApiKey(
  userId: string,
  name: string,
  scopes: ApiScope[],
  approved = false,
  rateLimitPerMinute = 60
): { key: ApiKeyRecord; token: string } {
  const { token, hash } = generateApiToken();
  const key: ApiKeyRecord = {
    id: uuidv4(),
    userId,
    name,
    tokenHash: hash,
    scopes,
    approved,
    createdAt: new Date().toISOString(),
    rateLimitPerMinute,
    successCount: 0,
    failureCount: 0,
  };
  const keys = getApiKeys();
  keys.push(key);
  saveApiKeys(keys);
  return { key, token };
}

export type AuthResult = {
  ok: boolean;
  status: number;
  errorCode?: string;
  errorMessage?: string;
  key?: ApiKeyRecord;
};

export function authenticateRequest(req: NextApiRequest, requiredScopes: ApiScope[] = []): AuthResult {
  const authHeader = (req.headers['authorization'] as string) || '';
  if (!authHeader.startsWith('Bearer ')) {
    return { ok: false, status: 401, errorCode: 'auth_missing', errorMessage: 'Missing Bearer token' };
  }
  const token = authHeader.slice('Bearer '.length).trim();
  const tokenHash = sha256(token);
  const keys = getApiKeys();
  const key = keys.find((k) => k.tokenHash === tokenHash && !k.revokedAt);
  if (!key) {
    return { ok: false, status: 401, errorCode: 'auth_invalid', errorMessage: 'Invalid API token' };
  }
  if (!key.approved) {
    return { ok: false, status: 403, errorCode: 'not_approved', errorMessage: 'API key not yet approved' };
  }
  const hasScopes = requiredScopes.every((s) => key.scopes.includes(s));
  if (!hasScopes) {
    return { ok: false, status: 403, errorCode: 'insufficient_scope', errorMessage: 'Missing required scope' };
  }
  return { ok: true, status: 200, key };
}

export function isRateLimited(key: ApiKeyRecord): boolean {
  const now = new Date();
  const minutePrefix = now.toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM
  const logs = getApiLogs();
  const countInWindow = logs.filter((l) => l.keyId === key.id && l.timestamp.startsWith(minutePrefix)).length;
  return countInWindow >= key.rateLimitPerMinute;
}

export function logApiRequest(
  req: NextApiRequest,
  resStatus: number,
  success: boolean,
  key?: ApiKeyRecord,
  errorCode?: string,
  errorMessage?: string
): void {
  const logs = getApiLogs();
  const log: ApiLogRecord = {
    id: uuidv4(),
    keyId: key?.id,
    userId: key?.userId,
    timestamp: new Date().toISOString(),
    method: req.method || 'GET',
    path: req.url || '',
    status: resStatus,
    success,
    errorCode,
    errorMessage,
    ip: (req.headers['x-forwarded-for'] as string) || (req.socket as any)?.remoteAddress || undefined,
  };
  logs.unshift(log);
  saveApiLogs(logs.slice(0, 5000));

  if (key) {
    const keys = getApiKeys();
    const idx = keys.findIndex((k) => k.id === key.id);
    if (idx >= 0) {
      keys[idx].lastUsedAt = new Date().toISOString();
      if (success) keys[idx].successCount += 1;
      else keys[idx].failureCount += 1;
      saveApiKeys(keys);
    }
  }
}

export function respondWithError(
  res: NextApiResponse,
  req: NextApiRequest,
  status: number,
  code: string,
  message: string,
  key?: ApiKeyRecord
) {
  logApiRequest(req, status, false, key, code, message);
  return res.status(status).json({ error: { code, message } });
}