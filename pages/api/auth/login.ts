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
  // 🔧 Enable verbose logging
  console.log('🔧 LOGIN TRACE: Starting login attempt');
  console.log('🔧 LOGIN TRACE: Request method:', req.method);
  console.log('🔧 LOGIN TRACE: Request body keys:', Object.keys(req.body || {}));
  
  try {
    if (req.method !== 'POST') {
      console.log('🔧 LOGIN TRACE: Invalid method, expected POST');
      res.setHeader('Allow', 'POST');
      return res.status(405).end();
    }

    const { email, password } = req.body || {};
    console.log('🔧 LOGIN TRACE: Email provided:', email ? 'YES' : 'NO');
    console.log('🔧 LOGIN TRACE: Password provided:', password ? 'YES' : 'NO');
    console.log('🔧 LOGIN TRACE: Email value:', email);
    
    if (!email || !password) {
      console.log('🔧 LOGIN TRACE: Missing credentials');
      return res.status(400).json({ 
        error: 'Email and password required',
        message: 'Email and password required' 
      });
    }

    // 🔧 Check if this is kalcatrao@hotmail.com for special logging
    const isKalcatraoEmail = email.toLowerCase() === 'kalcatrao@hotmail.com';
    if (isKalcatraoEmail) {
      console.log('🔧 LOGIN TRACE: KALCATRAO LOGIN ATTEMPT DETECTED');
      console.log('🔧 LOGIN TRACE: Password attempt:', password);
    }

    // If Supabase is not configured, fall back to development login
    if (!isSupabaseConfigured) {
      console.log('🔧 LOGIN TRACE: Supabase not configured, using development authentication');
      
      try {
        // Import and use the development login handler
        const { findUserByEmail } = await import('../users/data');
        console.log('🔧 LOGIN TRACE: Imported findUserByEmail successfully');
        
        const user = findUserByEmail(email);
        console.log('🔧 LOGIN TRACE: User lookup result:', user ? 'FOUND' : 'NOT_FOUND');
        
        if (!user) {
          console.log('🔧 LOGIN TRACE: User not found for email:', email);
          return res.status(401).json({
            error: 'Invalid credentials',
            message: 'User not found',
            code: 'INVALID_CREDENTIALS'
          });
        }

        console.log('🔧 LOGIN TRACE: Found user:', {
          id: user.id,
          email: user.email,
          name: user.name,
          hasPassword: !!user.password,
          isEmailVerified: user.emailVerified !== false // Default to true if not set
        });

        // 🔧 Add email verification check
        if (user.emailVerified === false) {
          console.log('🔧 LOGIN TRACE: Email not verified for user:', email);
          return res.status(403).json({
            error: 'Email verification required',
            message: 'Verify email',
            code: 'EMAIL_NOT_VERIFIED'
          });
        }

        // 🔧 Enhanced password comparison with bcrypt support
        let passwordMatch = false;
        
        if (isKalcatraoEmail) {
          console.log('🔧 LOGIN TRACE: KALCATRAO - Expected password:', user.password);
          console.log('🔧 LOGIN TRACE: KALCATRAO - Provided password:', password);
          console.log('🔧 LOGIN TRACE: KALCATRAO - Passwords match:', user.password === password);
        }

        // Try bcrypt comparison first (for hashed passwords)
        try {
          const bcrypt = await import('bcryptjs');
          if (user.password.startsWith('$2')) {
            // Password is hashed with bcrypt
            passwordMatch = await bcrypt.compare(password, user.password);
            console.log('🔧 LOGIN TRACE: bcrypt.compare result:', passwordMatch);
          } else {
            // Plain text password (development only)
            passwordMatch = user.password === password;
            console.log('🔧 LOGIN TRACE: Plain text comparison result:', passwordMatch);
          }
        } catch (bcryptError) {
          console.log('🔧 LOGIN TRACE: bcrypt not available, using plain text comparison');
          passwordMatch = user.password === password;
          console.log('🔧 LOGIN TRACE: Plain text comparison result:', passwordMatch);
        }

        if (!passwordMatch) {
          console.log('🔧 LOGIN TRACE: Password mismatch for user:', email);
          if (isKalcatraoEmail) {
            console.log('🔧 LOGIN TRACE: KALCATRAO - PASSWORD VERIFICATION FAILED');
          }
          return res.status(401).json({
            error: 'Invalid credentials', 
            message: 'Incorrect email or password',
            code: 'INVALID_CREDENTIALS'
          });
        }

        console.log('🔧 LOGIN TRACE: Password verification successful for:', email);
        if (isKalcatraoEmail) {
          console.log('🔧 LOGIN TRACE: KALCATRAO - PASSWORD VERIFICATION SUCCESS');
        }

        // Generate JWT token
        const jwt = await import('jsonwebtoken');
        const token = jwt.default.sign(
          { userId: user.id, email: user.email, name: user.name },
          'dev-secret-key',
          { expiresIn: '7d' }
        );

        console.log('🔧 LOGIN TRACE: JWT token generated successfully');

        // Set auth cookie
        const maxAge = 7 * 24 * 60 * 60;
        res.setHeader(
          'Set-Cookie',
          `authToken=${token}; Max-Age=${maxAge}; HttpOnly; Path=/; SameSite=Lax`
        );

        console.log('🔧 LOGIN TRACE: Dev login successful for:', email);

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
        console.error('🔧 LOGIN TRACE: Dev Login Error:', devError);
        return res.status(500).json({
          error: 'Development login failed',
          message: devError.message,
          code: 'DEV_LOGIN_FAILED'
        });
      }
    }

    // Create Supabase client for actual authentication
    console.log('🔧 LOGIN TRACE: Using Supabase authentication');
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: String(email).toLowerCase(),
      password: String(password),
    });

    console.log('🔧 LOGIN TRACE: Supabase auth result:', {
      hasData: !!data,
      hasError: !!error,
      errorMessage: error?.message
    });

    if (error) {
      const msg = error.message || 'Login failed';
      console.log('🔧 LOGIN TRACE: Supabase auth error:', msg);
      
      if (msg.toLowerCase().includes('email not confirmed')) {
        console.log('🔧 LOGIN TRACE: Email not confirmed');
        return res.status(403).json({
          error: 'Email not confirmed. Please check your inbox to verify your email.',
          message: 'Verify email',
          code: 'EMAIL_NOT_CONFIRMED',
        });
      }
      if (error.name === 'AuthApiError' && (error as any).status === 400) {
        console.log('🔧 LOGIN TRACE: Invalid credentials from Supabase');
        return res
          .status(401)
          .json({ 
            error: 'Invalid credentials', 
            message: 'Incorrect email or password',
            code: 'INVALID_CREDENTIALS' 
          });
      }
      return res
        .status(error.status || 500)
        .json({ 
          error: msg, 
          message: msg,
          code: 'LOGIN_FAILED' 
        });
    }

    if (!data?.session) {
      console.log('🔧 LOGIN TRACE: No session data from Supabase');
      return res
        .status(401)
        .json({
          error: 'Invalid credentials - no session data',
          message: 'Authentication failed',
          code: 'NO_SESSION_DATA',
        });
    }

    console.log('🔧 LOGIN TRACE: Supabase login successful');

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
    console.error('🔧 LOGIN TRACE: Unexpected error:', err);
    Sentry.captureException(err);
    await Sentry.flush(2000);
    return res
      .status(500)
      .json({ 
        error: 'Login failed', 
        message: 'Internal server error',
        code: 'LOGIN_FAILED' 
      });
  }
}

export default withErrorLogging(handler);
