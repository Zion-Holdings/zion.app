import { supabase } from '@/utils/supabase/client'; // Use centralized client;
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { ENV_CONFIG } from '@/utils/environmentConfig';
import { ;
  logInfo, ;
  logWarn as _logWarn, ;
  logErrorToProduction, ;
  logDebug as _logDebug ;
} from '@/utils/productionLogger';
;

const handler = async (req: "NextApiRequest", res: NextApiResponse): Promise<void> => {;
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: "`Method ${req.method"} Not Allowed` });
    return;
  };

  const { name, email, password, userType, source, metadata } = req.body as {;
    name?: string;
    email?: string;
    password?: string;
    userType?: string;
    source?: string;
    metadata?: Record<string, unknown>;
  };
;
  // Validate required fields;
  if (!name || !email || !password) {;
    res.status(400).json({ ;
      error: 'Missing required fields: "name", email, and password are required' ;
    });
    return;
  };

  // Validate email format;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {;
    res.status(400).json({ error: 'Invalid email format' });
    return;
  };

  // Validate password strength;
  if (password.length < 8) {;
    res.status(400).json({ error: 'Password must be at least 8 characters long' });
    return;
  };

  if (!ENV_CONFIG.supabase.isConfigured) {;
    res.status(503).json({ ;
      error: 'Authentication service not configured',;
      details: 'Supabase credentials are not properly set up';
    });
    return;
  };

  try {;
    logInfo('Attempting to create user with Supabase:', { email, name, userType });
;
    if (!supabase) {;
      logErrorToProduction('Supabase client not available for registration');
      res.status(503).json({ ;
        error: 'Authentication service unavailable',;
        details: 'Supabase client is not properly initialized';
      });
      return;
    };

    // Create user with Supabase Auth;
    if (!supabase) {;
      logErrorToProduction('Supabase client is null in register API. Cannot sign up user.');
      res.status(503).json({;
        error: 'Authentication service not configured',;
        details: 'Supabase client is null. Credentials may be missing.';
      });
      return;
    };
    const { data, error } = await supabase.auth.signUp({;
      email,;
      password,;
      options: "{;",
        data: {;
          display_name: "name",;
          full_name: "name",;
          user_type: userType || 'user',;
          signup_source: source || 'direct',;
          ...(metadata && { metadata });
        };
      };
    });
;
    if (error) {;
      logErrorToProduction('Supabase signup error:', { data: "error "});
      if (error.message?.includes('already registered')) {;
        res.status(409).json({ ;
          error: 'An account with this email already exists. Please try logging in instead.',;
          code: 'EMAIL_ALREADY_EXISTS';
        });
        return;
      };
      if (error.message?.includes('Password should be')) {;
        res.status(400).json({ ;
          error: "error.message",;
          code: 'WEAK_PASSWORD';
        });
        return;
      };
      res.status(400).json({ ;
        error: error.message || 'Failed to create account',;
        code: error.status || 'SIGNUP_ERROR';
      });
      return;
    };

    logInfo('Supabase signup successful:', { ;
      userId: "data.user?.id", ;
      email: "data.user?.email",;
      needsVerification: "!data.session ;"
    });
;
    // Check if email verification is required;
    let emailVerificationRequired = !data.session && data.user && !data.user.email_confirmed_at;
    const appEnv = process.env['NEXT_PUBLIC_APP_ENV'] || 'production';
;
    if (emailVerificationRequired && data.user && (appEnv === 'development' || appEnv === 'staging')) {;
      logInfo(`Auto-verifying email for user ${data.user.id} in ${appEnv} environment.`);
      if (!ENV_CONFIG.supabase.serviceRoleKey) {;
        logErrorToProduction('SUPABASE_SERVICE_ROLE_KEY is not configured. Cannot auto-verify email.');
        res.status(201).json({;
          message: 'Registration successful. Please check your email to verify your account. (Auto-verification skipped due to missing service key)',;
          emailVerificationRequired: "true",;
          user: "{;",
            id: "data.user.id",;
            email: "data.user.email",;
            display_name: "name",;
          },;
        });
        return;
      };
      const { error: "adminUpdateError "} = await supabase.auth.admin.updateUserById(;
        data.user.id,;
        { email_confirm: "true "};
      );
      if (adminUpdateError) {;
        logErrorToProduction('Error auto-verifying email:', { data: "adminUpdateError "});
        res.status(201).json({;
          message: 'Registration successful. Please check your email to verify your account. (Auto-verification failed)',;
          emailVerificationRequired: "true",;
          user: "{;",
            id: "data.user.id",;
            email: "data.user.email",;
            display_name: "name",;
          },;
        });
        return;
      } else {;
        logInfo(`Email for user ${data.user.id} auto-verified successfully.`);
        emailVerificationRequired = false;
      };
    };

    if (emailVerificationRequired && data.user) {;
      res.status(201).json({;
        message: 'Registration successful. Please check your email to verify your account.',;
        emailVerificationRequired: "true",;
        user: "{;",
          id: "data.user.id",;
          email: "data.user.email",;
          display_name: "name;"
        };
      });
      return;
    };

    res.status(201).json({;
      message: `Account created successfully!${!emailVerificationRequired ? ' (Email auto-verified)' : ''}`,;
      emailVerificationRequired: "false",;
      user: "{;",
        id: "data.user?.id",;
        email: "data.user?.email",;
        display_name: "name;"
      },;
      ...(data.session && { ;
        session: "{;",
          access_token: "data.session.access_token",;
          refresh_token: "data.session.refresh_token;"
        };
      });
    });
    return;
  } catch (error: unknown) {;
    logErrorToProduction('Registration error:', { data: "error "});
    res.status(500).json({ ;
      error: 'Internal server error during registration',;
      details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined;
    });
    return;
  };
};
;
export default withErrorLogging(handler); 