import { createClient } from '@supabase/supabase-js';';
import type { NextApiRequest, NextApiResponse } from 'next';';
import { withErrorLogging } from '@/utils/withErrorLogging';';
import { ENV_CONFIG } from '@/utils/environmentConfig';';
import { logInfo as _logInfo, logWarn as _logWarn, logErrorToProduction } from '@/utils/productionLogger';'

// Development users from environment variables;
const getDevUsers = () => {
  // Only load development users in development mode
  if (process.env.NODE_ENV !== 'development') {'
    return [];
  }

  const devUsers = [];

  // Load development users from environment variables
  const devUser1Email = process.env['DEV_USER_1_EMAIL'];'
  const devUser1Password = process.env['DEV_USER_1_PASSWORD'];'
  const devUser2Email = process.env['DEV_USER_2_EMAIL'];'
  const devUser2Password = process.env['DEV_USER_2_PASSWORD'];'
  const devUser3Email = process.env['DEV_USER_3_EMAIL'];'
  const devUser3Password = process.env['DEV_USER_3_PASSWORD'];'

  if (devUser1Email && devUser1Password) {
    devUsers.push({
      id: 'dev-user-1','
      email: devUser1Email,
      password: devUser1Password,
      name: 'Development User 1''
    });
  }

  if (devUser2Email && devUser2Password) {
    devUsers.push({
      id: 'dev-user-2','
      email: devUser2Email,
      password: devUser2Password,
      name: 'Development User 2''
    });
  }

  if (devUser3Email && devUser3Password) {
    devUsers.push({
      id: 'dev-user-3','
      email: devUser3Email,
      password: devUser3Password,
      name: 'Development User 3''
    });
  }

  return devUsers;
};
;
export default withErrorLogging(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {'
    return res.status(405).json({ error: 'Method not allowed' });'
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });'
    }

    // Check development users first
    const devUsers = getDevUsers();
    const devUser = devUsers.find(user => user.email === email && user.password === password);

    if (devUser) {
      _logInfo('Development user login successful:', { email });'
      return res.status(200).json({
        success: true,
        user: {
          id: devUser.id,
          email: devUser.email,
          name: devUser.name
        },
        message: 'Development login successful''
      });
    }

    // For production, use Supabase authentication
    const supabase = createClient(
      ENV_CONFIG.SUPABASE_URL,
      ENV_CONFIG.SUPABASE_ANON_KEY
    );

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      _logWarn('Login failed:', { email, error: error.message });'
      return res.status(401).json({
        error: 'Invalid credentials','
        message: error.message
      });
    }

    if (data.user) {
      _logInfo('User login successful:', { email: data.user.email });'
      return res.status(200).json({
        success: true,
        user: {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.name || data.user.email
        },
        session: data.session
      });
    }

    return res.status(401).json({
      error: 'Invalid credentials''
    });

  } catch (error) {
    logErrorToProduction('Login error:', error);'
    return res.status(500).json({
      error: 'Internal server error''
    });
  }
});