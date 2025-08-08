import type { NextApiRequest } from 'next';
import { useMemo } from 'react';

export type AppUser = {
  id: string;
  name: string;
  role: 'admin' | 'client' | 'talent' | 'guest';
};

function parseCookie(cookieHeader: string | undefined): Record<string, string> {
  if (!cookieHeader) return {};
  return cookieHeader.split(';').reduce((acc, part) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>);
}

export function parseUserFromRequest(req: NextApiRequest): AppUser {
  // Priority: x-user header (JSON) > cookie x-user (JSON)
  const headerUser = req.headers['x-user'];
  if (typeof headerUser === 'string') {
    try {
      const u = JSON.parse(headerUser);
      if (u && u.id && u.role) return { ...u, name: u.name || 'User' } as AppUser;
    } catch {}
  }
  const cookies = parseCookie(req.headers.cookie);
  const cookieUser = cookies['x-user'];
  if (cookieUser) {
    try {
      const u = JSON.parse(cookieUser);
      if (u && u.id && u.role) return { ...u, name: u.name || 'User' } as AppUser;
    } catch {}
  }
  return { id: 'guest', name: 'Guest', role: 'guest' };
}

export function ensureAdmin(user: AppUser) {
  if (user.role !== 'admin') {
    const err = new Error('Forbidden');
    // @ts-ignore
    err.statusCode = 403;
    throw err;
  }
}

export function ensureInvolvedOrAdmin(user: AppUser, clientId: string, talentId: string) {
  if (user.role === 'admin') return;
  if (user.id === clientId || user.id === talentId) return;
  const err = new Error('Forbidden');
  // @ts-ignore
  err.statusCode = 403;
  throw err;
}

export function useCurrentUser(): AppUser {
  // For demo, read from global injected by server or default guest
  // In real app, replace with actual auth provider (Supabase, etc.)
  const user = useMemo<AppUser>(() => {
    if (typeof window === 'undefined') return { id: 'guest', name: 'Guest', role: 'guest' };
    try {
      const data = window.localStorage.getItem('x-user');
      if (data) return JSON.parse(data);
    } catch {}
    return { id: 'guest', name: 'Guest', role: 'guest' };
  }, []);
  return user;
}