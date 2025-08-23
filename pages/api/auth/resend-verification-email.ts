import { supabase } from '@/utils/supabase/client'; // Use centralized client
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }

  const { email } = req.body as { email?: string };
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return res.status(503).json({ message: 'Auth provider not configured' });
  }

  try {
    const { error } = await supabase.auth.resend({ type: 'signup', email });
    
    if (error) {
      return res
        .status(error.status || 500)
        .json({ message: error.message || 'Failed to resend verification email' });
    }

    return res
      .status(200)
      .json({ message: 'Verification email resent successfully' });
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: 'Failed to resend verification email' });
  }
}

export default handler; 