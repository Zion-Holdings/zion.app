export interface AppStoreLinkInfo {
  iosAppId?: string; // e.g., 1234567890
  androidPackageName?: string; // e.g., com.zion.app
  iosStoreUrl?: string;
  androidStoreUrl?: string;
  appScheme?: string; // e.g., zionapp://
  webFallbackUrl?: string; // fallback landing URL
}

export interface AppChangelogEntry {
  version: string; // e.g., 1.0.3
  dateISO?: string; // e.g., 2025-08-08
  notes: string; // markdown/text
}

export interface AppMetadata {
  appTitle: string;
  shortDescription: string; // brief tagline (max ~80 chars typical)
  longDescription: string; // up to 4000 chars
  keywords: string[]; // for ASO; comma-separated in UI
  features: string[]; // bulleted list
  testimonials: { author: string; role?: string; quote: string }[];
  screenshots: string[]; // public URLs or relative paths under /public
  store: AppStoreLinkInfo;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  changelog: AppChangelogEntry[];
  updatedAtISO: string;
}

export interface AppInstallClickEvent {
  id: string;
  timestampISO: string;
  sourcePath?: string; // page path that triggered
  platform?: "ios" | "android" | "unknown";
}