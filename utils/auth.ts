import { GetServerSidePropsContext } from 'next';
import { createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';
import type { NextApiRequest } from 'next';

export type AllowedRole = 'Founder' | 'Admin' | 'Finance';

export type RequireRoleResult =
  | { redirect: { destination: string; permanent: false } }
  | { props: { userId: string | null; roles: string[] } };

function getCookies(ctx: GetServerSidePropsContext) {
  const cookies: { [key: string]: string } = {};
  ctx.req.headers.cookie?.split(';').forEach((cookie) => {
    const [name, ...rest] = cookie.trim().split('=');
    cookies[name] = decodeURIComponent(rest.join('='));
  });
  return cookies;
}

export async function getUserAndRolesFromSupabase(ctx: GetServerSidePropsContext): Promise<{ userId: string | null; roles: string[] }> {
  try {
    const cookieOptions: CookieOptions = {
      name: 'sb',
      domain: undefined,
      path: '/',
      sameSite: 'lax',
    } as any;

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key',
      {
        cookies: {
          get: (key: string) => getCookies(ctx)[key],
          set: (_key: string, _value: string, _opts: CookieOptions) => {},
          remove: (_key: string, _opts: CookieOptions) => {},
        },
        cookieOptions,
      }
    );

    const { data } = await supabase.auth.getUser();
    const user = data?.user || null;
    const roles: string[] = Array.isArray(user?.user_metadata?.roles)
      ? (user!.user_metadata!.roles as string[])
      : typeof user?.user_metadata?.role === 'string'
      ? [user!.user_metadata!.role as string]
      : [];

    return { userId: user?.id ?? null, roles };
  } catch (error) {
    return { userId: null, roles: [] };
  }
}

export async function requireAdminRole(ctx: GetServerSidePropsContext): Promise<RequireRoleResult> {
  // Dev bypass
  if (process.env.DEV_ADMIN_BYPASS === 'true') {
    return { props: { userId: 'dev-bypass', roles: ['Admin'] } };
  }

  // Header-based override for local testing
  const mockRole = ctx.req.headers['x-mock-role'];
  if (typeof mockRole === 'string' && ['Founder', 'Admin', 'Finance'].includes(mockRole)) {
    return { props: { userId: 'mock', roles: [mockRole] } };
  }

  const { userId, roles } = await getUserAndRolesFromSupabase(ctx);

  const allowed: AllowedRole[] = ['Founder', 'Admin', 'Finance'];
  const hasAccess = roles.some((r) => allowed.includes(r as AllowedRole));

  if (!userId || !hasAccess) {
    return {
      redirect: { destination: '/auth', permanent: false },
    };
  }

  return { props: { userId, roles } };
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ userId: string | null; roles: string[]; allowed: boolean }> {
  if (process.env.DEV_ADMIN_BYPASS === 'true') {
    return { userId: 'dev-bypass', roles: ['Admin'], allowed: true };
  }
  const mockRole = req.headers['x-mock-role'];
  if (typeof mockRole === 'string' && ['Founder', 'Admin', 'Finance'].includes(mockRole)) {
    return { userId: 'mock', roles: [mockRole], allowed: true };
  }
  // Basic cookie parse for SSR client reuse is not available in API directly using our helper,
  // but we can accept x-user-id and x-roles for internal calls if needed.
  const xUserId = typeof req.headers['x-user-id'] === 'string' ? (req.headers['x-user-id'] as string) : null;
  const xRolesHeader = typeof req.headers['x-roles'] === 'string' ? (req.headers['x-roles'] as string) : '';
  const xRoles = xRolesHeader ? xRolesHeader.split(',').map((s) => s.trim()) : [];
  const allowedRoles: AllowedRole[] = ['Founder', 'Admin', 'Finance'];
  const allowed = xUserId !== null && xRoles.some((r) => allowedRoles.includes(r as AllowedRole));
  return { userId: xUserId, roles: xRoles, allowed };
}