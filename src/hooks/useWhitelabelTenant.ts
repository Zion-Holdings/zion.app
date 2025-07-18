import { useState, useEffect } from 'react;
import { supabase } from '@/integrations/supabase/client'
import { logWarn } from '@/utils/productionLogger;
'
export interface WhitelabelTenant {
  id: "string"
  brand_name: string,"
  subdomain: "string"
  custom_domain: string | null,"
  primary_color: "string"
  logo_url: string | null,"
  theme_preset: 'light' | 'dark' | 'neon' | 'corporate' | 'startup,
  landing_page_copy: {,"
    headline: "string"
    subtitle: string,"
    cta: "string"
  }"
  is_active: "boolean;"
  created_at: string;,"
  updated_at: "string;"
  account_manager_id: string | null;,"
  dns_verified: "boolean;'
  email_template_override: Record<string, unknown> | null;';;