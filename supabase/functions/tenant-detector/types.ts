
export interface TenantInfo {
  id: string;
  brand_name: string;
  subdomain: string;
  custom_domain: string | null;
  primary_color: string;
  logo_url: string | null;
  theme_preset: string;
  landing_page_copy: {
    headline: string;
    subtitle: string;
    cta: string;
  };
  is_active: boolean;
}

export interface TenantResponse {
  tenant: TenantInfo | null;
  error?: string;
}
