import { NextApiRequest, NextApiResponse, NextPageContext } from 'next';

const SUPERADMIN_EMAILS = (process.env.SUPERADMIN_EMAILS || '').split(',').map((s) => s.trim()).filter(Boolean);
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const ADMIN_2FA_CODE = process.env.ADMIN_2FA_CODE || '';

export type SessionUser = {
  email: string;
  role: 'superadmin' | 'finance' | 'legal' | 'ceo';
  twofaVerified: boolean;
};

export function parseCookies(cookieHeader?: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(';').forEach((pair) => {
    const [name, ...rest] = pair.trim().split('=');
    cookies[name] = decodeURIComponent(rest.join('='));
  });
  return cookies;
}

export function getUserFromCookies(cookieHeader?: string): SessionUser | null {
  try {
    const cookies = parseCookies(cookieHeader);
    const session = cookies['session'];
    if (!session) return null;
    const parsed = JSON.parse(Buffer.from(session, 'base64').toString('utf8')) as SessionUser;
    return parsed;
  } catch {
    return null;
  }
}

export function createSessionCookie(user: SessionUser): string {
  const payload = Buffer.from(JSON.stringify(user), 'utf8').toString('base64');
  return `session=${payload}; Path=/; HttpOnly; SameSite=Lax`;
}

export function clearSessionCookie(): string {
  return `session=deleted; Path=/; HttpOnly; Max-Age=0; SameSite=Lax`;
}

export function validateCredentials(email: string, password: string, code: string): { ok: boolean; role?: SessionUser['role'] } {
  const isSuperadmin = SUPERADMIN_EMAILS.includes(email);
  if (!isSuperadmin) return { ok: false };
  if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) return { ok: false };
  if (!ADMIN_2FA_CODE || code !== ADMIN_2FA_CODE) return { ok: false };
  return { ok: true, role: 'superadmin' };
}

export function requireSuperadminSSR(ctx: NextPageContext) {
  const req = ctx.req as NextApiRequest | undefined;
  const res = ctx.res as NextApiResponse | undefined;
  if (!req || !res) return { props: {} };

  const user = getUserFromCookies(req.headers.cookie);
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.statusCode = 302;
    res.setHeader('Location', '/auth');
    res.end?.();
    return { props: {} } as any;
  }
  return { props: { user } } as any;
}
