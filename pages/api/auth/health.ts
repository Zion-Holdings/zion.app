import type { NextApiRequest, NextApiResponse } from 'next';
import {logErrorToProduction} from '@/utils/productionLogger';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Check Supabase configuration
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const missingVars = [];
  if (!supabaseUrl) missingVars.push('NEXT_PUBLIC_SUPABASE_URL');
  if (!supabaseAnonKey) missingVars.push('NEXT_PUBLIC_SUPABASE_ANON_KEY');

  if (missingVars.length > 0) {
    logErrorToProduction('Supabase configuration incomplete. Missing:', missingVars.join(', '));
    return res.status(500).json({ 
      message: 'Auth service not configured',
      missing: missingVars
    });
  }

  // Check if Supabase URL is a placeholder
  if (supabaseUrl && (supabaseUrl.includes('your-project') || supabaseUrl.includes('placeholder'))) {
    logErrorToProduction('Supabase URL appears to be a placeholder');
    return res.status(500).json({ 
      message: 'Authentication service configuration incomplete',
      details: 'Supabase URL is not properly configured'
    });
  }

  // Check if Supabase is reachable (optional)
  try {
    const healthUrl = `${supabaseUrl!}/rest/v1/`;
    const response = await fetch(healthUrl, {
      headers: {
        'apikey': supabaseAnonKey!,
        'Authorization': `Bearer ${supabaseAnonKey!}`
      }
    });
    
    if (!response.ok) {
      logErrorToProduction('Supabase health check failed with status', { data: response.status });
      return res.status(500).json({ 
        message: 'Authentication service is temporarily unavailable. Please try again later.' 
      });
    }
    
    return res.status(200).json({ 
      status: 'ok', 
      service: {
        name: 'Supabase',
        url: supabaseUrl,
        configured: true
      }
    });
  } catch (error: any) {
    logErrorToProduction('Supabase health check error:', { data: error });
    return res.status(500).json({ 
      message: 'Authentication service is temporarily unavailable. Please try again later.' 
    });
  }
} 