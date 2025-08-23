import { supabase } from '@/utils/supabase/client'; // Use centralized client
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { ENV_CONFIG } from '@/utils/environmentConfig';
import { 
  logInfo, 
  logWarn, 
  logErrorToProduction, 
  logDebug 
} from '@/utils/productionLogger';


async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, password, userType, source, metadata } = req.body as {
    name?: string;
    email?: string;
    password?: string;
    userType?: string;
    source?: string;
    metadata?: Record<string, unknown>;
  };

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

  try {
    logInfo('Attempting to create user with Supabase:', { email, name, userType });

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
      logErrorToProduction('Supabase signup error:', { data: error });
      
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

    logInfo('Supabase signup successful:', { 
      userId: data.user?.id, 
      email: data.user?.email,
      needsVerification: !data.session 
    });

    // Check if email verification is required
    let emailVerificationRequired = !data.session && data.user && !data.user.email_confirmed_at;
    const appEnv = process.env.NEXT_PUBLIC_APP_ENV || 'production';

    if (emailVerificationRequired && data.user && (appEnv === 'development' || appEnv === 'staging')) {
      logInfo(`Auto-verifying email for user ${data.user.id} in ${appEnv} environment.`);

      // Ensure we have service role key for admin operations
      if (!ENV_CONFIG.supabase.serviceRoleKey) {
        logErrorToProduction('SUPABASE_SERVICE_ROLE_KEY is not configured. Cannot auto-verify email.');
        // Proceed without auto-verification, standard flow
        return res.status(201).json({
          message: 'Registration successful. Please check your email to verify your account. (Auto-verification skipped due to missing service key)',
          emailVerificationRequired: true,
          user: {
            id: data.user.id,
            email: data.user.email,
            display_name: name,
          },
        });
      }

      // Use the existing Supabase client if it was initialized with the service_role key,
      // or create a new one specifically for admin tasks if necessary.
      // The current 'supabase' instance should be fine if ENV_CONFIG.supabase.serviceRoleKey is set.
      const { error: adminUpdateError } = await supabase.auth.admin.updateUserById(
        data.user.id,
        { email_confirm: true } // Supabase uses email_confirm: true
      );

      if (adminUpdateError) {
        logErrorToProduction('Error auto-verifying email:', { data: adminUpdateError });
        // If auto-verification fails, fall back to requiring manual verification
        return res.status(201).json({
          message: 'Registration successful. Please check your email to verify your account. (Auto-verification failed)',
          emailVerificationRequired: true,
          user: {
            id: data.user.id,
            email: data.user.email,
            display_name: name,
          },
        });
      } else {
        logInfo(`Email for user ${data.user.id} auto-verified successfully.`);
        emailVerificationRequired = false; // Update status after successful auto-verification
        // The user object 'data.user' from signUp might not immediately reflect this change.
        // A fresh fetch of the user or session might be needed if exact up-to-date user object is returned.
        // For now, we'll just confirm it's done on the backend.
      }
    }


    if (emailVerificationRequired && data.user) {
      // This block will now only be reached if not auto-verified (e.g., in prod or if auto-verification failed)
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

    // Account created and (potentially auto-verified) ready to use
    return res.status(201).json({
      message: `Account created successfully!${!emailVerificationRequired ? ' (Email auto-verified)' : ''}`,
      emailVerificationRequired: false, // This will be false if auto-verified, true otherwise (handled above)
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
    logErrorToProduction('Registration error:', { data: error });
    return res.status(500).json({ 
      error: 'Internal server error during registration',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

export default withErrorLogging(handler); 