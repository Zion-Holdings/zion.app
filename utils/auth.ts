import { NextApiRequest, NextApiResponse } from 'next';
import { parse, serialize } from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { UserSummary, UserRole } from './messaging/types';

const COOKIE_NAME = 'zion_user';

export function getUserFromRequest(req: NextApiRequest): UserSummary | null {
  const cookieHeader = req.headers.cookie || '';
  const cookies = parse(cookieHeader);
  const userJson = cookies[COOKIE_NAME];
  if (!userJson) return null;
  try {
    const user = JSON.parse(decodeURIComponent(userJson));
    if (user && user.id && user.name && user.role) return user as UserSummary;
  } catch (e) {
    return null;
  }
  return null;
}

export function setUserCookie(res: NextApiResponse, user: UserSummary) {
  const cookie = serialize(COOKIE_NAME, encodeURIComponent(JSON.stringify(user)), {
    httpOnly: false,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  });
  res.setHeader('Set-Cookie', cookie);
}

export function clearUserCookie(res: NextApiResponse) {
  const cookie = serialize(COOKIE_NAME, '', {
    httpOnly: false,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  res.setHeader('Set-Cookie', cookie);
}

export function requireUser(req: NextApiRequest, res: NextApiResponse): UserSummary | null {
  const user = getUserFromRequest(req);
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  return user;
}

export function ensureDemoUsers(): void {
  const usersPath = path.join(process.cwd(), 'data', 'messaging', 'users.json');
  const dir = path.dirname(usersPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(usersPath)) {
    const demo: UserSummary[] = [
      { id: 'client-demo', name: 'Acme Client', role: 'client' },
      { id: 'talent-demo', name: 'John Talent', role: 'talent' },
      { id: 'admin-demo', name: 'Admin', role: 'admin' },
    ];
    fs.writeFileSync(usersPath, JSON.stringify(demo, null, 2), 'utf8');
  }
}

export function upsertUser(user: UserSummary) {
  const usersPath = path.join(process.cwd(), 'data', 'messaging', 'users.json');
  ensureDemoUsers();
  const users: UserSummary[] = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
  const idx = users.findIndex((u) => u.id === user.id);
  if (idx >= 0) users[idx] = user;
  else users.push(user);
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), 'utf8');
}

export function generateUser(name: string, role: UserRole): UserSummary {
  return {
    id: uuidv4(),
    name,
    role,
  };
}