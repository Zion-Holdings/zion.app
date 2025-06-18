import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

// Check if Supabase is configured with real values
const isSupabaseConfigured = supabaseUrl && supabaseKey && 
  supabaseUrl !== 'https://your-supabase-url.supabase.co' && 
  supabaseKey !== 'your_supabase_service_role_key_here' &&
  !supabaseUrl.includes('placeholder') &&
  !supabaseKey.includes('placeholder');

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

    // If Supabase is not configured, fall back to development login
    if (!isSupabaseConfigured) {
      console.log('🔧 Supabase not configured, using development authentication');
      
      try {
        // Import and use the development login handler
        const { findUserByEmail } = await import('../users/data');
        const jwt = await import('jsonwebtoken');
        
        const user = findUserByEmail(email);
        
        if (!user) {
          console.log('🔧 Dev Login - User not found:', email);
          return res.status(401).json({
            error: 'Invalid credentials',
            message: 'User not found',
            code: 'INVALID_CREDENTIALS'
          });
        }

        if (user.password !== password) {
          console.log('🔧 Dev Login - Invalid password for:', email);
          return res.status(401).json({
            error: 'Invalid credentials', 
            message: 'Incorrect password',
            code: 'INVALID_CREDENTIALS'
          });
        }

        console.log('🔧 Dev Login - Login successful for:', email);

        // Generate JWT token
        const token = jwt.default.sign(
          { userId: user.id, email: user.email, name: user.name },
          'dev-secret-key',
          { expiresIn: '7d' }
        );

        // Set auth cookie
        const maxAge = 7 * 24 * 60 * 60;
        res.setHeader(
          'Set-Cookie',
          `authToken=${token}; Max-Age=${maxAge}; HttpOnly; Path=/; SameSite=Lax`
        );

        return res.status(200).json({
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            avatarUrl: user.avatarUrl
          },
          accessToken: token
        });
      } catch (devError: any) {
        console.error('🔧 Dev Login Error:', devError);
        return res.status(500).json({
          error: 'Development login failed',
          message: devError.message,
          code: 'DEV_LOGIN_FAILED'
        });
      }
    }

    // Create Supabase client for actual authentication
    const supabase = createClient(supabaseUrl, supabaseKey);
    
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
