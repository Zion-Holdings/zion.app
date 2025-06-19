import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { ENV_CONFIG } from '@/utils/environmentConfig';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 🔧 Enable verbose logging
  console.log('🔧 LOGIN TRACE: Starting login attempt');
  console.log('🔧 LOGIN TRACE: Request method:', req.method);
  console.log('🔧 LOGIN TRACE: Request body keys:', Object.keys(req.body || {}));
  console.log('🔧 LOGIN TRACE: Environment config status:', {
    supabaseConfigured: ENV_CONFIG.supabase.isConfigured,
    sentryConfigured: ENV_CONFIG.sentry.isConfigured,
    environment: ENV_CONFIG.app.environment
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Check if Supabase is configured
  if (!ENV_CONFIG.supabase.isConfigured) {
    console.log('🔧 LOGIN TRACE: Supabase not configured - using development authentication');
    
    // Development fallback authentication
    const devUsers = [
      { id: 'dev-user-1', email: 'kalcatrao@hotmail.com', password: 'kalc2024!' },
      { id: 'dev-user-2', email: 'dev@example.com', password: 'dev123' },
      { id: 'dev-user-3', email: 'test@example.com', password: 'test123' }
    ];

    const user = devUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      console.log('🔧 LOGIN TRACE: Development user authenticated successfully');
      return res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          email_verified: true,
          created_at: new Date().toISOString()
        },
        message: 'Development authentication successful'
      });
    } else {
      console.log('🔧 LOGIN TRACE: Development authentication failed');
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  }

  try {
    // Use configured Supabase client
    const supabase = createClient(
      ENV_CONFIG.supabase.url,
      ENV_CONFIG.supabase.serviceRoleKey || ENV_CONFIG.supabase.anonKey
    );

    console.log('🔧 LOGIN TRACE: Attempting Supabase authentication');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('🔧 LOGIN TRACE: Supabase authentication error:', error);
      
      if (ENV_CONFIG.sentry.isConfigured) {
        Sentry.captureException(error, {
          tags: { context: 'login_api' },
          extra: { email }
        });
      }
      
      return res.status(401).json({ error: error.message });
    }

    if (!data.user) {
      console.error('🔧 LOGIN TRACE: No user data returned from Supabase');
      return res.status(401).json({ error: 'Authentication failed' });
    }

    console.log('🔧 LOGIN TRACE: Supabase authentication successful');
    
    return res.status(200).json({
      user: data.user,
      session: data.session,
      message: 'Authentication successful'
    });

  } catch (error: any) {
    console.error('🔧 LOGIN TRACE: Unexpected error during authentication:', error);
    
    if (ENV_CONFIG.sentry.isConfigured) {
      Sentry.captureException(error, {
        tags: { context: 'login_api_unexpected' },
        extra: { email }
      });
    }
    
    return res.status(500).json({ 
      error: 'Internal server error',
      details: ENV_CONFIG.app.isDevelopment ? error.message : undefined
    });
  }
}

export default withErrorLogging(handler);
