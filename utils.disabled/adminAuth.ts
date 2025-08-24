export type AdminSession = {
  username: string;
  issuedAt: number;
};

import crypto from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

const COOKIE_NAME = 'admin_session';

function getEnv(name: string, fallback?: string): string {
  const v = process.env[name] || fallback;
  if (!v) throw new Error(`Missing required env var ${name}`);
  return v;
}

export function signSession(session: AdminSession): string {
  const secret = getEnv('ADMIN_SESSION_SECRET', 'CHANGE_ME_DEV_SECRET');
  const payload = Buffer.from(JSON.stringify(session)).toString('base64');
  const hmac = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return `${payload}.${hmac}`;
}

export function verifySessionToken(token: string | undefined): AdminSession | null {
  if (!token) return null;
  const secret = getEnv('ADMIN_SESSION_SECRET', 'CHANGE_ME_DEV_SECRET');
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [payload, signature] = parts;
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, 'base64').toString()) as AdminSession;
    return session;
  } catch {
    return null;
  }
}

export function getSessionFromReq(req: NextApiRequest): AdminSession | null {
  const cookieHeader = req.headers.cookie || '';
  const cookie = cookieHeader
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!cookie) return null;
  const token = cookie.substring(COOKIE_NAME.length + 1);
  return verifySessionToken(token);
}

export function setSessionCookie(res: NextApiResponse, session: AdminSession): void {
  const token = signSession(session);
  const maxAge = 60 * 60 * 24; // 1 day
  const expires = new Date(Date.now() + maxAge * 1000).toUTCString();
  const cookie = `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}; Expires=${expires}`;
  res.setHeader('Set-Cookie', cookie);
}

export function clearSessionCookie(res: NextApiResponse): void {
  const cookie = `${COOKIE_NAME}=deleted; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  res.setHeader('Set-Cookie', cookie);
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  const key = req.headers['x-internal-key'];
  const expected = getEnv('AGENT_INTERNAL_KEY', 'DEV_INTERNAL_KEY');
  if (!key || Array.isArray(key)) return false;
  return crypto.timingSafeEqual(Buffer.from(key), Buffer.from(expected));
}