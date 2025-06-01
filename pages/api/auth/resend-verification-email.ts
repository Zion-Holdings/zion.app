import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// As per prompt: try with anon key first for supabase.auth.resend for user-initiated flow.
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing for resend-verification-email. Check .env variables.');
  // This would ideally prevent the handler from being exported or used.
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // 1. Get user from Supabase session (JWT from cookie)
    // Consistent with confirm-email-verification.ts: check for 'supabase-auth-token' then common patterns.
    let jwt = req.cookies['supabase-auth-token'];
    if (!jwt) {
      const commonSupabaseCookieKey = Object.keys(req.cookies).find(key => key.startsWith('sb-') && key.endsWith('-access-token'));
      if (commonSupabaseCookieKey) {
        jwt = req.cookies[commonSupabaseCookieKey];
      }
    }

    if (!jwt) {
      console.log('No Supabase auth token cookie found in resend-verification-email.');
      return res.status(401).json({ message: 'Unauthorized: Auth token not found.' });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);

    if (authError || !user) {
      console.error('Auth error in resend-verification-email:', authError?.message);
      return res.status(401).json({ message: authError?.message || 'Unauthorized: No active session or auth error.' });
    }

    if (!user.email) {
      console.error('User object from Supabase does not contain an email for resend.');
      return res.status(400).json({ message: 'Bad Request: User email not found in token.' });
    }

    // 2. Resend confirmation email using Supabase
    const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; // Fallback for local dev
    const emailRedirectTo = `${siteURL}/auth/verify-email`;

    // Using supabase.auth.resend method
    const { error: resendError } = await supabase.auth.resend({
        type: 'signup', // This type is for resending the confirmation email for a new signup
        email: user.email,
        options: {
            emailRedirectTo: emailRedirectTo,
        }
    });

    if (resendError) {
      console.error('Supabase resend error:', resendError.message);
      // Handle specific known errors
      if (resendError.message.toLowerCase().includes('already confirmed')) {
        return res.status(400).json({ message: 'Email is already verified.' });
      }
      if (resendError.message.toLowerCase().includes('rate limit')) { // Example: "For security purposes, you can only request this once every X minutes"
        return res.status(429).json({ message: 'Rate limit exceeded. Please try again later.' });
      }
      return res.status(500).json({ message: resendError.message || 'Failed to resend verification email.' });
    }

    return res.status(200).json({ message: 'Verification email successfully resent to ' + user.email + '.' });

  } catch (error: any) {
    console.error('Unexpected error in resend-verification-email:', error.message);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
