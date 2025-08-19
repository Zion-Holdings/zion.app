
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

// Initialize Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Handle CORS for preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    const url = new URL(req.url);
    const hostname = url.hostname;
    
    // Extract tenant info
    let tenantInfo: TenantInfo | null = null;
    
    // First try matching custom domain
    let { data, error } = await supabase
      .from('whitelabel_tenants')
      .select('id, brand_name, subdomain, custom_domain, primary_color, logo_url, theme_preset')
      .eq('custom_domain', hostname)
      .eq('is_active', true)
      .single();
    
    // If no match on custom domain, try subdomain
    if (error || !data) {
      // Extract subdomain part (first part of the domain)
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
    } else {
      tenantInfo = data as TenantInfo;
    }

    return new Response(
      JSON.stringify({
        tenant: tenantInfo
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  }
});
