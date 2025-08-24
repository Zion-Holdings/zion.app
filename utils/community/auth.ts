import type { UserRole } from './types';

export type RequestUser = {
  id: string;
  name: string;
  role: UserRole;
} | null;

export function getRequestUser(req: any): RequestUser {
  const id = req.headers?.['x-user-id'] as string | undefined;
  const name = (req.headers?.['x-user-name'] as string | undefined) || 'User';
  const role = (req.headers?.['x-user-role'] as string | undefined) as UserRole | undefined;
  if (id && role) return { id, name, role } as RequestUser;

  try {
    const cookie = (req.headers?.['cookie'] as string | undefined) || '';
    const match = cookie.match(/community_user=([^;]+)/);
    if (match) {
      const decoded = JSON.parse(decodeURIComponent(match[1]));
      if (decoded?.id && decoded?.name && decoded?.role) return decoded as RequestUser;
    }
  } catch {}

  return null;
}

export function requireAuth(user: RequestUser) {
  if (!user) throw Object.assign(new Error('Unauthorized'), { statusCode: 401 });
}

export function requireModerator(user: RequestUser) {
  if (!user || !['Moderator', 'Admin'].includes(user.role)) {
    throw Object.assign(new Error('Forbidden'), { statusCode: 403 });
  }
}

export function requireAdmin(user: RequestUser) {
  if (!user || user.role !== 'Admin') {
    throw Object.assign(new Error('Forbidden'), { statusCode: 403 });
  }
}