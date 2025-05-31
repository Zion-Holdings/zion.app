import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Basic types for Next.js API routes
type Req = {
  method?: string;
  headers?: { [key: string]: string | string[] | undefined };
  // In a real scenario, user would be populated by auth middleware
  // For now, we might need to simulate or get it from a session if available
  // For this task, let's assume a placeholder or a way to get user ID via Supabase auth helper for API routes
};
interface Res {
  status: (code: number) => Res;
  json: (data: any) => void;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; // Use service key for server-side operations

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase URL or Service Key for API route');
}

// Initialize Supabase client for server-side operations
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Helper function to get user from token (example, actual implementation might vary)
async function getUserIdFromRequest(req: Req, supabase: SupabaseClient): Promise<string | null> {
  const authHeader = req.headers?.authorization;

  let token: string | null = null;

  if (authHeader && typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (Array.isArray(authHeader) && authHeader.length > 0) {
    // Handle case where authHeader is an array, e.g., pick the first one
    const firstAuthHeader = authHeader[0];
    if (firstAuthHeader && firstAuthHeader.startsWith('Bearer ')) {
      token = firstAuthHeader.split(' ')[1];
    }
  }

  if (token) {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      console.warn('Failed to get user from token:', error?.message);
      return null;
    }
    return user.id;
  }

  // Fallback or other session mechanisms might be needed here
  // For example, if using Supabase SSR with cookies:
  // const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  // if (session?.user) return session.user.id;
  console.warn('No valid string Authorization header found or session not available for points API.');
  return null;
}


export default async function handler(req: Req, res: Res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  let userId: string | null = null;

  try {
    // In a real app, you'd get the user ID from an authenticated session.
    // Supabase's `getUser` with the JWT from the Authorization header is one way for API routes.
    // Or, if using NextAuth.js or other auth libraries, use their respective methods.
    // For this placeholder, we'll try to get it from Authorization header.
    userId = await getUserIdFromRequest(req, supabaseAdmin);

    if (!userId) {
      res.status(401).json({ error: 'Unauthorized: User not authenticated.' });
      return;
    }

    const { data, error } = await supabaseAdmin
      .from('points_ledger')
      .select('delta')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching points ledger:', error);
      throw error;
    }

    const balance = data ? data.reduce((sum, entry) => sum + entry.delta, 0) : 0;

    res.status(200).json({ points: balance });

  } catch (err: any) {
    console.error('API error fetching points:', err);
    res.status(500).json({ error: 'Failed to fetch points', details: err.message });
  }
}
