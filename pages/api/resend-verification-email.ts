import { supabase } from '@/utils/supabase/client'; // Use centralized client
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body as { email?: string };

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    });

    if (error) {
      logErrorToProduction('Error resending verification email:', { data: error });
      return res.status(400).json({ message: error.message });
    }

    logInfo('Verification email resent successfully for:', { data: email });
    return res.status(200).json({ 
      message: 'Verification email sent successfully' 
    });

  } catch (error: any) {
    logErrorToProduction('Unexpected error resending verification email:', { data: error });
    return res.status(500).json({ 
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

export default withErrorLogging(handler); 