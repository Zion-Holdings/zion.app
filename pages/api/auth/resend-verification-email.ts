import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { ENV_CONFIG } from '@/utils/environmentConfig';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }

  const { email } = req.body || {};
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!ENV_CONFIG.supabase.isConfigured) {
    return res.status(503).json({ message: 'Authentication service not configured' });
  }

  try {
    const supabase = createClient(
      ENV_CONFIG.supabase.url,
      ENV_CONFIG.supabase.serviceRoleKey || ENV_CONFIG.supabase.anonKey
    );

    const { error } = await supabase.auth.resend({ type: 'signup', email: email.toLowerCase() });

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    return res.status(200).json({ message: 'Verification email resent successfully.' });
  } catch (err: any) {
    console.error('Resend verification error:', err);
    return res.status(500).json({ message: 'Failed to resend verification email' });
  }
}

export default withErrorLogging(handler);
