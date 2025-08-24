import { supabase } from './supabase/client';

export type UserRole = 'admin' | 'client' | 'talent' | 'guest';

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();
  return data?.user || null;
}

export async function getCurrentUserRole(): Promise<UserRole> {
  const user = await getCurrentUser();
  if (!user) return 'guest';
  // Placeholder: adjust to your profiles table/claims
  const role = (user.user_metadata?.role as UserRole) || 'guest';
  return role;
}

export async function requireRole(allowed: UserRole[]): Promise<boolean> {
  const role = await getCurrentUserRole();
  return allowed.includes(role);
}
