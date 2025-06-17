import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).end();
    }

    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: String(email).toLowerCase(),
      password: String(password),
    });

    if (error) {
      const msg = error.message || 'Login failed';
      if (msg.toLowerCase().includes('email not confirmed')) {
        return res.status(403).json({
          error:
            'Email not confirmed. Please check your inbox to verify your email.',
          code: 'EMAIL_NOT_CONFIRMED',
        });
      }
      if (error.name === 'AuthApiError' && (error as any).status === 400) {
        return res
          .status(401)
          .json({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
      }
      return res
        .status(error.status || 500)
        .json({ error: msg, code: 'LOGIN_FAILED' });
    }

    if (!data?.session) {
      return res
        .status(401)
        .json({
          error: 'Invalid credentials - no session data',
          code: 'NO_SESSION_DATA',
        });
    }

    const maxAge = parseInt(process.env.AUTH_TOKEN_MAX_AGE || '604800', 10); // default 7 days
        const secure = process.env.NODE_ENV === 'production' ? 'Secure;' : '';
        res.setHeader(
          'Set-Cookie',
          `authToken=${data.session.access_token}; Max-Age=${maxAge}; HttpOnly; Path=/; ${secure} SameSite=Lax`
        );

    return res.status(200).json({
      user: data.user,
      accessToken: data.session.access_token,
      refreshToken: data.session.refresh_token,
    });
  } catch (err) {
    Sentry.captureException(err);
    await Sentry.flush(2000);
    console.error(err);
    return res
      .status(500)
      .json({ error: 'Login failed', code: 'LOGIN_FAILED' });
  }
}

export default withErrorLogging(handler);
