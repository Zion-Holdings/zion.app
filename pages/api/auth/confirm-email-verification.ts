import { createClient } from '@supabase/supabase-js';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, serviceKey);
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // 1. Get user from Supabase session (JWT from cookie)
    // The prompt specifies `req.cookies['supabase-auth-token']`.
    // Note: Supabase client libraries often manage cookies automatically.
    // If `req.cookies` is not populated as expected or if there's a more direct way
    // for Supabase to get the user in an API route (e.g., just `await supabase.auth.getUser()`),
    // this might need adjustment in a real environment. For this task, following prompt.
    const jwt = req.cookies['supabase-auth-token'];
    if (!jwt) {
      // If NEXT_PUBLIC_SUPABASE_ANON_KEY is used, direct cookie access might be less reliable
      // than Supabase client's own session handling. Often, the token is `sb-access-token`
      // or prefixed like `sb-<project-id>-access-token`.
      // Let's try the more common Supabase cookie name as a fallback if the specified one isn't found.
      // This is a heuristic based on common Supabase usage.
      const commonSupabaseCookie = Object.keys(req.cookies).find(key => key.startsWith('sb-') && key.endsWith('-access-token'));
      const supabaseToken = jwt || (commonSupabaseCookie ? req.cookies[commonSupabaseCookie] : undefined);

      if (!supabaseToken) {
        console.log('No Supabase auth token cookie found. Checked for "supabase-auth-token" and common patterns like "sb-*-access-token".');
        return res.status(401).json({ message: 'Unauthorized: Auth token not found.' });
      }
      // Pass the found token to getUser
      const { data: { user }, error: authError } = await supabase.auth.getUser(supabaseToken);

      if (authError || !user) {
        console.error('Auth error with token:', authError);
        return res.status(401).json({ message: 'Unauthorized: No active session or auth error.' });
      }

      // User is authenticated, proceed to update Prisma
      if (!user.email) {
        // Should not happen for a verified user
        console.error('User object from Supabase does not contain an email.');
        return res.status(400).json({ message: 'Bad Request: User email not found in token.' });
      }

      const updatedUser = await prisma.user.update({
        where: { email: user.email },
        data: { emailVerified: true },
      });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found in our database.' });
      }
      return res.status(200).json({ message: 'Email successfully verified.', user: updatedUser });

    } else {
      // Original path if 'supabase-auth-token' was found
      const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);

      if (authError || !user) {
        console.error('Auth error with "supabase-auth-token":', authError);
        return res.status(401).json({ message: 'Unauthorized: No active session or auth error.' });
      }

      if (!user.email) {
        console.error('User object from Supabase (using "supabase-auth-token") does not contain an email.');
        return res.status(400).json({ message: 'Bad Request: User email not found in token.' });
      }

      const updatedUser = await prisma.user.update({
        where: { email: user.email },
        data: { emailVerified: true },
      });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found in our database.' });
      }
      return res.status(200).json({ message: 'Email successfully verified.', user: updatedUser });
    }

  } catch (error: any) {
    console.error('Error confirming email verification:', error);
    // Check for specific Prisma errors, e.g., record not found
    if (error.code === 'P2025') { // Prisma error code for "Record to update not found."
        return res.status(404).json({ message: 'User not found in our database.' });
    }
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
