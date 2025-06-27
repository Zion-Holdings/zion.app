import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { logWarn, logError } from '@/utils/productionLogger';


async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.body as { email?: unknown };

  // Create Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({ error: 'Supabase configuration missing' });
  }
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // For public resend endpoint, we allow email to be provided without auth
    // This is common for verification email resending before login
    let emailToResend = email;
    
    // If auth header is provided, validate and use authenticated user's email
    const authHeader = req.headers.authorization;
    if (authHeader) {
      try {
        const authHeaderString = Array.isArray(authHeader) ? authHeader[0] : authHeader;
        if (authHeaderString) {
          const token = authHeaderString.replace('Bearer ', '');
          const { data: { user }, error: userError } = await supabase.auth.getUser(token);
          
          if (!userError && user?.email) {
            emailToResend = user.email; // Use authenticated user's email
          }
        }
      } catch (authError) {
        logWarn('Auth validation failed, proceeding with provided email:', authError);
      }
    }

    if (!emailToResend || typeof emailToResend !== 'string') {
      return res.status(400).json({ error: 'Email address is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailToResend)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Resend verification email using admin client
    const { error: resendError } = await supabase.auth.resend({
      type: 'signup',
      email: emailToResend,
    });

    if (resendError) {
      logError('Failed to resend verification email:', resendError);
      return res.status(500).json({ 
        error: 'Failed to resend verification email',
        details: resendError.message 
      });
    }

    return res.status(200).json({ 
      message: 'Verification email sent successfully. Please check your inbox.' 
    });

  } catch (error) {
    logError('Error in resend verification email API:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

export default withErrorLogging(handler); 