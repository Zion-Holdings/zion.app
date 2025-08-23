import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { logWarn } from '@/utils/productionLogger';

export interface WhitelabelTenant {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
  landing_page_copy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  is_active: boolean;
  created_at: string;
  updated_at: string;
  account_manager_id: string | null;
  dns_verified: boolean;
  email_template_override: Record<string, any> | null;
}

export function useWhitelabelTenant(externalSubdomain?: string) {
  const [tenant, setTenant] = useState<WhitelabelTenant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 5;

  useEffect(() => {
    const loadTenant = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Get the current hostname, fallback to localhost if not available
        const hostname = window.location.hostname || 'localhost';
        
        // Some dev hosts generate long ephemeral subdomains that our edge function
        // does not recognise. In those cases fall back to localhost.
        const sanitizedHostname = /webcontainer-api\.io$/.test(hostname)
          ? 'localhost'
          : hostname;
        
        const functionName = 'tenant-detector';
        
        // Build the query parameters
        const params = externalSubdomain
          ? `?subdomain=${encodeURIComponent(externalSubdomain)}`
          : `?host=${encodeURIComponent(sanitizedHostname)}`;

        const { data, error: functionError } = await supabase.functions.invoke(
          `${functionName}${params}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'x-client-info': 'supabase-js-web',
            },
          }
        );

        if (functionError) {
          logWarn('Edge Function error:', {
            error: functionError,
            params,
            hostname,
            retryCount,
          });

          throw new Error(functionError.message || 'Failed to load tenant configuration');
        }

        if (!data) {
          logWarn('No tenant data received', { params, hostname });
          setTenant(null);
          return;
        }

        if ((data as any)?.tenant) {
          setTenant((data as any).tenant);
          setRetryCount(0); // Reset retry count on success
        } else {
          setTenant(null);
        }
      } catch (err: any) {
        logWarn('Error loading tenant:', {
          error: err,
          retryCount,
          timestamp: new Date().toISOString(),
        });

        setError('Unable to load tenant configuration. Retrying...');
        setTenant(null);

        // Implement retry with exponential backoff
        if (retryCount < MAX_RETRIES) {
          const retryDelay = Math.min(Math.pow(2, retryCount) * 1000, 8000);
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, retryDelay);
        } else {
          setError('Unable to load tenant configuration after multiple attempts. Please check your connection.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTenant();
  }, [externalSubdomain, retryCount]);

  return { tenant, isLoading, error };
}

// Hook to check if current user is a tenant admin
export function useTenantAdminStatus(tenantId?: string) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!tenantId) {
        setIsAdmin(false);
        setIsLoading(false);
        return;
      }

      try {
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) {
          logWarn('Session error:', { data: sessionError });
          setIsAdmin(false);
          return;
        }

        if (!sessionData.session) {
          setIsAdmin(false);
          return;
        }

        const userId = (sessionData as any).session?.user?.id;
        const { data, error } = await supabase
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single();

        if (error) {
          logWarn('Error checking admin status:', { data: error });
        }

        setIsAdmin(!!data && !error);
      } catch (err) {
        logWarn('Error checking tenant admin status:', { data: err });
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [tenantId]);

  return { isAdmin, isLoading };
}