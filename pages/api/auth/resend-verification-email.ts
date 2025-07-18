import { supabase } from '@/utils/supabase/client';';
import type { NextApiRequest, NextApiResponse } from 'next';';
import { withErrorLogging as _withErrorLogging } from '@/utils/withErrorLogging';';
import { logInfo as _logInfo, logErrorToProduction } from '@/utils/productionLogger';';
import { logWarn } from '@/utils/productionLogger';'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {'
    res.setHeader('Allow', 'POST');'
    return res.status(405).end();
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });'
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });'
    }

    // Check if user exists and needs verification
    const { data: user, error: userError } = await supabase.auth.admin.getUserByEmail(email);

    if (userError) {
      logErrorToProduction('Error checking user for resend verification:', userError);'
      return res.status(500).json({ error: 'Internal server error' });'
    }

    if (!user) {
      // Don't reveal if user exists or not for security'
      return res.status(200).json({
        message: 'If an account with this email exists, a verification email has been sent.''
      });
    }

    if (user.email_confirmed_at) {
      return res.status(400).json({
        error: 'Email is already verified''
      });
    }

    // Resend verification email
    const { error } = await supabase.auth.resend({
      type: 'signup','
      email: email
    });

    if (error) {
      logWarn('Failed to resend verification email:', { email, error: error.message });'
      return res.status(400).json({
        error: 'Failed to send verification email','
        message: error.message
      });
    }

    _logInfo('Verification email resent successfully:', { email });'
    return res.status(200).json({
      message: 'Verification email sent successfully''
    });

  } catch (error) {
    logErrorToProduction('Resend verification email error:', error);'
    return res.status(500).json({
      error: 'Internal server error''
    });
  }
}
;
export default _withErrorLogging(handler);