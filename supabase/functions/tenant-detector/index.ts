import { serve } from 'https://deno.land/std@0.208.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

interface TenantInfo {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: string;
}

// Enhanced CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-client-info, apikey, X-Client-Info',
  'Access-Control-Max-Age': '86400',
  'Access-Control-Expose-Headers': 'Content-Length',
  'Access-Control-Allow-Credentials': 'true',
};

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Required environment variables are not set');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Enhanced CORS preflight handling
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(req.url);
    const hostnameParam = url.searchParams.get('host');
    const subdomainParam = url.searchParams.get('subdomain');
    
    // Get hostname from parameters or headers
    const forwardedHost = req.headers.get('x-forwarded-host');
    const hostname = hostnameParam || 
      (forwardedHost ? forwardedHost.split(',')[0].trim().split(':')[0] : null) ||
      url.hostname;

    if (!hostname && !subdomainParam) {
      throw new Error('No hostname or subdomain provided');
    }

    // Extract tenant info
    let tenantInfo: TenantInfo | null = null;

    if (subdomainParam) {
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('subdomain', subdomainParam)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Database error:', error);
        throw new Error(`Database error: ${error.message}`);
      }

      tenantInfo = data as TenantInfo;
    } else {
      // Try matching custom domain first
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
        .eq('custom_domain', hostname)
        .eq('is_active', true)
        .single();

      // If no match on custom domain, try subdomain
      if (!data && !error) {
        const subdomain = hostname.split('.')[0];
        if (subdomain && !['www', 'app', 'local', 'localhost'].includes(subdomain)) {
          const subdomainResult = await supabase
            .from('whitelabel_tenants')
            .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
            .eq('subdomain', subdomain)
            .eq('is_active', true)
            .single();

          if (!subdomainResult.error) {
            tenantInfo = subdomainResult.data as TenantInfo;
          }
        }
      } else if (data) {
        tenantInfo = data as TenantInfo;
      }
    }

    return new Response(
      JSON.stringify({
        tenant: tenantInfo,
        status: 'success'
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  } catch (error) {
    console.error('Tenant detector error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        status: 'error',
        timestamp: new Date().toISOString(),
      }),
      {
        status: error.message.includes('No hostname') ? 400 : 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  }
});