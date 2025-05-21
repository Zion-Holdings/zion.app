
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

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

  useEffect(() => {
    const loadTenant = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // If subdomain is provided, fetch that specific tenant
        if (externalSubdomain) {
          const { data, error } = await supabase
            .from('whitelabel_tenants')
            .select('*')
            .eq('subdomain', externalSubdomain)
            .eq('is_active', true)
            .single();

          if (error) throw error;
          setTenant(data as WhitelabelTenant);
          return;
        }

        // Otherwise try to detect tenant from hostname
        const hostname = window.location.hostname;
        
        // Check if it's a custom domain
        const { data: customDomainData, error: customDomainError } = await supabase
          .from('whitelabel_tenants')
          .select('*')
          .eq('custom_domain', hostname)
          .eq('is_active', true)
          .single();

        if (!customDomainError && customDomainData) {
          setTenant(customDomainData as WhitelabelTenant);
          return;
        }

        // Check if it's a subdomain
        const detectedSubdomain = hostname.split('.')[0];
        
        if (detectedSubdomain && !['www', 'app', 'local', 'localhost'].includes(detectedSubdomain)) {
          const { data: subdomainData, error: subdomainError } = await supabase
            .from('whitelabel_tenants')
            .select('*')
            .eq('subdomain', detectedSubdomain)
            .eq('is_active', true)
            .single();

          if (!subdomainError && subdomainData) {
            setTenant(subdomainData as WhitelabelTenant);
            return;
          }
        }

        // No tenant found
        setTenant(null);
      } catch (err: any) {
        console.error('Error loading tenant:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadTenant();
  }, [externalSubdomain]);

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
        if (sessionError || !sessionData.session) {
          setIsAdmin(false);
          return;
        }

        const userId = sessionData.session.user.id;
        const { data, error } = await supabase
          .from('tenant_administrators')
          .select('*')
          .eq('tenant_id', tenantId)
          .eq('user_id', userId)
          .single();

        setIsAdmin(!!data && !error);
      } catch (err) {
        console.error('Error checking tenant admin status:', err);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [tenantId]);

  return { isAdmin, isLoading };
}
