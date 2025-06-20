import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { ENV_CONFIG } from '@/utils/environmentConfig';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }

  const { email } = req.body as { email?: string };
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!ENV_CONFIG.supabase.isConfigured) {
    return res.status(503).json({ message: 'Auth provider not configured' });
  }

  const supabase = createClient(
    ENV_CONFIG.supabase.url,
    ENV_CONFIG.supabase.serviceRoleKey || ENV_CONFIG.supabase.anonKey
  );

  const { error } = await supabase.auth.resend({ type: 'signup', email });
  if (error) {
    return res
      .status(error.status || 500)
      .json({ message: error.message || 'Failed to resend verification email' });
  }

  return res
    .status(200)
    .json({ message: 'Verification email resent successfully' });
}

export default withErrorLogging(handler);
