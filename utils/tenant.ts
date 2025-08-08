import { supabaseAdmin } from "./supabase/server";

export type ThemePreset = "light" | "dark" | "neon" | "corporate" | "startup";

export type Tenant = {
  id: string;
  brandName: string;
  subdomain: string | null;
  customDomain: string | null;
  primaryColor: string;
  logoUrl: string | null;
  themePreset: ThemePreset;
  navbarLinks: Array<{ label: string; href: string }>;
  footerText: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  suspended: boolean;
};

export const defaultTenant: Tenant = {
  id: "default",
  brandName: "Zion",
  subdomain: null,
  customDomain: null,
  primaryColor: "#4f46e5",
  logoUrl: null,
  themePreset: "light",
  navbarLinks: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ],
  footerText: "© " + new Date().getFullYear() + " Zion Tech Solutions",
  heroTitle: "Build with Zion",
  heroSubtitle: "AI tools and services for modern teams.",
  suspended: false,
};

export function hostnameFromReqHeaders(headers?: Record<string, string | string[] | undefined>): string | null {
  if (!headers) return null;
  const hostHeader = headers["x-forwarded-host"] || headers["host"];
  const host = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader;
  return host || null;
}

export function subdomainFromHost(host: string, apexDomain: string): string | null {
  if (!host.endsWith(apexDomain)) return null;
  const raw = host.replace(new RegExp(`\\.${apexDomain}$`), "");
  if (raw === host) return null;
  // If raw still contains dots, take the left-most
  const parts = raw.split(".");
  if (parts.length === 0) return null;
  return parts[0] === "www" ? null : parts[0];
}

export async function getTenantByHost(host?: string | null): Promise<Tenant> {
  if (!host) return defaultTenant;
  const apex = process.env.APEX_DOMAIN || "ziontechmarketplace.com";

  // Normalize host
  const normalizedHost = host.toLowerCase();

  // Try custom domain first
  let { data: customMatches, error: customErr } = await supabaseAdmin
    .from("tenants")
    .select("*")
    .eq("custom_domain", normalizedHost)
    .limit(1);

  if (!customErr && customMatches && customMatches.length > 0) {
    return mapTenant(customMatches[0]);
  }

  // Then subdomain under apex
  const sub = subdomainFromHost(normalizedHost, apex);
  if (sub) {
    let { data: subMatches } = await supabaseAdmin
      .from("tenants")
      .select("*")
      .eq("subdomain", sub)
      .limit(1);
    if (subMatches && subMatches.length > 0) {
      return mapTenant(subMatches[0]);
    }
  }

  return defaultTenant;
}

function mapTenant(row: any): Tenant {
  return {
    id: row.id,
    brandName: row.brand_name ?? "Zion",
    subdomain: row.subdomain ?? null,
    customDomain: row.custom_domain ?? null,
    primaryColor: row.primary_color ?? "#4f46e5",
    logoUrl: row.logo_url ?? null,
    themePreset: (row.theme_preset as ThemePreset) ?? "light",
    navbarLinks: row.navbar_links ?? defaultTenant.navbarLinks,
    footerText: row.footer_text ?? defaultTenant.footerText,
    heroTitle: row.hero_title ?? defaultTenant.heroTitle,
    heroSubtitle: row.hero_subtitle ?? defaultTenant.heroSubtitle,
    suspended: !!row.suspended,
  };
}