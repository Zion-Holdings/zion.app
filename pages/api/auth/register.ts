import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { ENV_CONFIG } from '@/utils/environmentConfig';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, password, userType, source, metadata } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    return res.status(400).json({ 
      error: 'Missing required fields: name, email, and password are required' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Validate password strength
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  if (!ENV_CONFIG.supabase.isConfigured) {
    return res.status(503).json({ 
      error: 'Authentication service not configured',
      details: 'Supabase credentials are not properly set up'
    });
  }

  const supabase = createClient(
    ENV_CONFIG.supabase.url,
    ENV_CONFIG.supabase.serviceRoleKey || ENV_CONFIG.supabase.anonKey
  );

  try {
    console.log('Attempting to create user with Supabase:', { email, name, userType });

    // Create user with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
          full_name: name,
          user_type: userType || 'user',
          signup_source: source || 'direct',
          ...(metadata && { metadata })
        }
      }
    });

    if (error) {
      console.error('Supabase signup error:', error);
      
      // Handle specific Supabase errors
      if (error.message?.includes('already registered')) {
        return res.status(409).json({ 
          error: 'An account with this email already exists. Please try logging in instead.',
          code: 'EMAIL_ALREADY_EXISTS'
        });
      }
      
      if (error.message?.includes('Password should be')) {
        return res.status(400).json({ 
          error: error.message,
          code: 'WEAK_PASSWORD'
        });
      }
      
      return res.status(400).json({ 
        error: error.message || 'Failed to create account',
        code: error.status || 'SIGNUP_ERROR'
      });
    }

    console.log('Supabase signup successful:', { 
      userId: data.user?.id, 
      email: data.user?.email,
      needsVerification: !data.session 
    });

    // Check if email verification is required
    const emailVerificationRequired = !data.session && data.user && !data.user.email_confirmed_at;

    if (emailVerificationRequired && data.user) {
      return res.status(201).json({
        message: 'Registration successful. Please check your email to verify your account.',
        emailVerificationRequired: true,
        user: {
          id: data.user.id,
          email: data.user.email,
          display_name: name
        }
      });
    }

    // Account created and ready to use
    return res.status(201).json({
      message: 'Account created successfully!',
      emailVerificationRequired: false,
      user: {
        id: data.user?.id,
        email: data.user?.email,
        display_name: name
      },
      ...(data.session && { 
        session: {
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token
        }
      })
    });

  } catch (error: any) {
    console.error('Registration error:', error);
    return res.status(500).json({ 
      error: 'Internal server error during registration',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

export default withErrorLogging(handler); 