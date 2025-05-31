import type { Request, Response } from 'express';
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Service Role Key is not defined for admin trust scores endpoint.")
}

const supabaseAdmin = createClient(supabaseUrl!, supabaseServiceKey!)

// Placeholder for admin authentication
const isAdminAuthenticated = (req: Request): boolean => {
  // In a real app, verify a JWT, session, or use a proper auth system.
  // For this example, we'll use a simple header check.
  // IMPORTANT: This is NOT secure for production.
  const adminSecret = req.headers['x-admin-secret'] as string; // Express headers are string | string[] | undefined
  if (process.env.NODE_ENV === 'development' && !process.env.ADMIN_SECRET_KEY) {
    console.warn("ADMIN_SECRET_KEY not set in development, allowing access. THIS IS INSECURE.")
    return true;
  }
  return adminSecret === process.env.ADMIN_SECRET_KEY;
}

interface UserWithTrustScore {
  id: number;
  name: string | null;
  email: string | null;
  trustScore: number | null;
  operatorGptAnalysis: string | null;
  trustScoreId: number | null;
  trustScoreUpdatedAt: string | null;
}

export default async function handler(
  req: Request,
  res: Response
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET'); // Express uses string value for setHeader
    return res.status(405).send(`Method ${req.method} Not Allowed`); // Use .send for text/plain
  }

  if (!isAdminAuthenticated(req)) {
    return res.status(403).json({ error: 'Forbidden: Admin privileges required.' });
  }

  try {
    // Fetch all users
    const { data: users, error: usersError } = await supabaseAdmin
      .from('User')
      .select('id, name, email')
      .order('id', { ascending: true });

    if (usersError) {
      console.error('Error fetching users:', usersError);
      return res.status(500).json({ error: 'Failed to fetch users.', details: usersError.message });
    }

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found.' });
    }

    // For each user, fetch their latest TrustScore
    const usersWithTrustScores: UserWithTrustScore[] = await Promise.all(
      users.map(async (user) => {
        const { data: trustScore, error: scoreError } = await supabaseAdmin
          .from('TrustScore')
          .select('id, score, operatorGptAnalysis, updatedAt')
          .eq('userId', user.id)
          .order('updatedAt', { ascending: false })
          .limit(1)
          .single(); // Assuming one user has at most one active trust score

        if (scoreError && scoreError.code !== 'PGRST116') { // PGRST116: single row not found
          console.warn(`Error fetching trust score for user ${user.id}:`, scoreError.message);
          // Continue processing other users, but this user will have null score info
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          trustScore: trustScore?.score ?? null,
          operatorGptAnalysis: trustScore?.operatorGptAnalysis ?? null,
          trustScoreId: trustScore?.id ?? null,
          trustScoreUpdatedAt: trustScore?.updatedAt ?? null,
        };
      })
    );

    // Basic pagination (example)
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedResults = usersWithTrustScores.slice(startIndex, endIndex);

    return res.status(200).json({
      data: paginatedResults,
      page,
      limit,
      total: usersWithTrustScores.length,
      totalPages: Math.ceil(usersWithTrustScores.length / limit),
    });

  } catch (err: any) {
    console.error('Unexpected error in /api/admin/trust-scores:', err);
    return res.status(500).json({ error: 'An unexpected server error occurred.', details: err.message });
  }
}
