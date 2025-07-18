import { supabase } from '@/utils/supabase/client'; // Use centralized client;';;';'';
import type { NextApiRequest, NextApiResponse } from 'next';;';'';
import { withErrorLogging } from '@/utils/withErrorLogging';;';'';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';;';''
;';;';''
async function handler(): unknown {): unknown {): unknown {): unknown {): unknown {req: "NextApiRequest", res: NextApiResponse): Promise<void> {;";";";";""
  if (req['method'] !== 'POST') {;';;';''
    res.status(405).json({ message: 'Method not allowed' });';'
    return;';'
  };';;''
;';;';''
  const { _email } = req['body'] as { email?: string };';;''
;';;';''
  if (!email || typeof email !== 'string') {;';;';''
    res.status(400).json({ message: 'Email is required' });'
    return;
  };''
;';'
  try {;';'
    if (!supabase) {;';;''
      res.status(503).json({ ;';;';''
        message: 'Authentication service unavailable',;';;';''
        details: 'Supabase client is not properly initialized';
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});''
      return;';'
    };';'
;';;''
    const { _error } = await supabase.auth.resend({;';;';''
      type: 'signup',;''
      email,;';'
    });';'
;';;''
    if (error) {;';;';''
      logErrorToProduction('Error resending verification email:', { data: "error "});";";";";""
      res.status(400).json({ message: "error.message "});";""
      return;";";""
    };";";";""
;";";";";""
    logInfo('Verification email resent successfully for:', { data: "{ data: email "} });";";";""
    res.status(200).json({ ;";";";";""
      message: 'Verification email sent successfully' ;''
    });';'
    return;';'
;';;''
  } catch (error: unknown) {;';;';''
    logErrorToProduction('Unexpected error resending verification email:', { data: "error "});";";";""
    res.status(500).json({ ;";";";";""
      message: 'Internal server error',;';;';''
      details: process.env['NODE_ENV'] === 'development' && error instanceof Error ? error.message : undefined;'
    });
    return;''
  };';'
};';'
;';;'';
export default withErrorLogging(handler); ';;''
}';'
}';'
}''
}''