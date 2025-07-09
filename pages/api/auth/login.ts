import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { ENV_CONFIG } from '@/utils/environmentConfig';

// 🔐 SECURITY: Development users from environment variables
const getDevUsers = () => {
  // Only load development users in development mode
  if (process.env.NODE_ENV !== 'development') {
    return [];
  }

  const devUsers = [];
  
  // Load development users from environment variables
  const devUser1Email = process.env['DEV_USER_1_EMAIL'];
  const devUser1Password = process.env['DEV_USER_1_PASSWORD'];
  const devUser2Email = process.env['DEV_USER_2_EMAIL'];
  const devUser2Password = process.env['DEV_USER_2_PASSWORD'];
  const devUser3Email = process.env['DEV_USER_3_EMAIL'];
  const devUser3Password = process.env['DEV_USER_3_PASSWORD'];

  if (devUser1Email && devUser1Password) {
    devUsers.push({ 
      id: 'dev-user-1', 
      email: devUser1Email, 
      password: devUser1Password,
      name: 'Development User 1'
    });
  }

  if (devUser2Email && devUser2Password) {
    devUsers.push({ 
      id: 'dev-user-2', 
      email: devUser2Email, 
      password: devUser2Password,
      name: 'Development User 2'
    });
  }

  if (devUser3Email && devUser3Password) {
    devUsers.push({ 
      id: 'dev-user-3', 
      email: devUser3Email, 
      password: devUser3Password,
      name: 'Development User 3'
    });
  }

  // Fallback to basic test users if no env vars are set
  if (devUsers.length === 0) {
    devUsers.push(
      { id: 'dev-user-1', email: 'dev@example.com', password: 'dev123', name: 'Dev User' },
      { id: 'dev-user-2', email: 'test@example.com', password: 'test123', name: 'Test User' }
    );
  }

  return devUsers;
};

// Ensure correct handler signature and returns
async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // 🔧 Enable verbose logging (only in development)
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email, password } = req.body as { email?: string, password?: string };

  if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
    res.status(400).json({ error: 'Email and password are required and must be strings' });
    return;
  }

  // Check if Supabase is configured
  if (!ENV_CONFIG.supabase.isConfigured) {
    if (isDevelopment) {
      console.log('🔧 LOGIN TRACE: Supabase not configured - using development authentication');
    }
    // 🔐 SECURITY: Use environment-based development authentication
    const devUsers = getDevUsers();
    const user = devUsers.find(u => u.email === email && u.password === password);
    if (user) {
      if (isDevelopment) {
        console.log('🔧 LOGIN TRACE: Development user authenticated successfully');
      }
      res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          email_verified: true,
          created_at: new Date().toISOString()
        },
        message: 'Development authentication successful'
      });
      return;
    } else {
      if (isDevelopment) {
        console.log('🔧 LOGIN TRACE: Development authentication failed');
        console.log('🔧 LOGIN TRACE: Available dev users:', devUsers.map(u => u.email));
      }
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }
  }

  try {
    // Use configured Supabase client
    const supabase = createClient(
      ENV_CONFIG.supabase.url,
      ENV_CONFIG.supabase.serviceRoleKey || ENV_CONFIG.supabase.anonKey
    );
    if (isDevelopment) {
      console.log('🔧 LOGIN TRACE: Attempting Supabase authentication');
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      if (isDevelopment) {
        console.error('🔧 LOGIN TRACE: Supabase authentication error:', error);
      }
      if (ENV_CONFIG.sentry.isConfigured) {
        Sentry.captureException(error, {
          tags: { context: 'login_api' },
          extra: { email }
        });
      }
      res.status(401).json({ error: error.message });
      return;
    }
    if (!data.user) {
      if (isDevelopment) {
        console.error('🔧 LOGIN TRACE: No user data returned from Supabase');
      }
      res.status(401).json({ error: 'Authentication failed' });
      return;
    }
    if (isDevelopment) {
      console.log('🔧 LOGIN TRACE: Supabase authentication successful');
    }
    res.status(200).json({
      user: data.user,
      session: data.session,
      message: 'Authentication successful'
    });
    return;
  } catch (error: any) {
    if (isDevelopment) {
      console.error('🔧 LOGIN TRACE: Unexpected error during authentication:', error);
    }
    if (ENV_CONFIG.sentry.isConfigured) {
      Sentry.captureException(error, {
        tags: { context: 'login_api_unexpected' },
        extra: { email }
      });
    }
    res.status(500).json({ 
      error: 'Internal server error',
      details: ENV_CONFIG.app.isDevelopment ? error.message : undefined
    });
    return;
  }
};

export default withErrorLogging(handler);
