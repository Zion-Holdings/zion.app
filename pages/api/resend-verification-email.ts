import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.body;

  // Create Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({ error: 'Supabase configuration missing' });
  }
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    // Get user session to validate request
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    // Extract token from Bearer header
    const token = authHeader.replace('Bearer ', '');
    
    // Verify the session
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    
    if (userError || !user) {
      return res.status(401).json({ error: 'Invalid authentication token' });
    }

    // Check if email matches the authenticated user
    const emailToResend = email || user.email;
    if (!emailToResend) {
      return res.status(400).json({ error: 'Email address is required' });
    }

    if (emailToResend !== user.email) {
      return res.status(403).json({ error: 'You can only resend verification for your own email' });
    }

    // Resend verification email
    const { error: resendError } = await supabase.auth.resend({
      type: 'signup',
      email: emailToResend,
    });

    if (resendError) {
      console.error('Failed to resend verification email:', resendError);
      return res.status(500).json({ 
        error: 'Failed to resend verification email',
        details: resendError.message 
      });
    }

    return res.status(200).json({ 
      message: 'Verification email sent successfully. Please check your inbox.' 
    });

  } catch (error) {
    console.error('Error in resend verification email API:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

export default withErrorLogging(handler); 