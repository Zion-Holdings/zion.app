import { NextApiRequest, NextApiResponse } from 'next';

export type UserRole = 'investor' | 'franchisee' | 'superadmin';

function parseCookies(cookieHeader: string | undefined): Record<string, string> {
  if (!cookieHeader) return {};
  return cookieHeader.split(';').reduce<Record<string, string>>((acc, part) => {
    const [keyRaw, ...rest] = part.split('=');
    const key = keyRaw.trim();
    const value = rest.join('=').trim();
    if (key) acc[key] = decodeURIComponent(value || '');
    return acc;
  }, {});
}

export function getRoleFromRequest(req: NextApiRequest): UserRole | null {
  const cookies = parseCookies(req.headers.cookie);
  const role = cookies['zion_role'] as UserRole | undefined;
  return role ?? null;
}

export function requireRole(allowed: UserRole[], handler: (req: NextApiRequest, res: NextApiResponse) => void) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const role = getRoleFromRequest(req);
    if (!role || !allowed.includes(role)) {
      res.status(403).json({ error: 'Forbidden' } as any);
      return;
    }
    handler(req, res);
  };
}