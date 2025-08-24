export type GovernanceMode = "Admin" | "DAO" | "Hybrid";

export interface Branding {
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  subdomain?: string;
}

export interface DeployModules {
  marketplace: boolean;
  gpt: boolean;
  academy: boolean;
  token: boolean;
  dao: boolean;
  nationBuilder: boolean;
  launchKit: boolean;
  bookBuilder: boolean;
  roadmapWhitepaper: boolean;
  apiDocsWiki: boolean;
  zionBrain: boolean;
  // Bonus
  globalMap?: boolean;
  franchiseOnboarding?: boolean;
  referralAmbassadors?: boolean;
  grantPortal?: boolean;
  trailer?: boolean;
  bookStore?: boolean;
}

export interface DeployInput {
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
  governanceMode: GovernanceMode;
  branding: Branding;
  modules: DeployModules;
  requestedRoutes?: string[];
}

export interface DeployLogEntry {
  timestamp: string;
  level: "info" | "warn" | "error";
  action: string;
  details?: Record<string, unknown> | string;
}

export interface GeneratedAsset {
  kind: "file" | "page" | "config" | "job" | "event";
  path: string;
  description?: string;
}

export interface DeployResult {
  success: boolean;
  instanceSlug: string;
  configPath: string;
  assets: GeneratedAsset[];
  logs: DeployLogEntry[];
  summary: string;
  version: string;
}

export interface AccessControlConfig {
  allowedRoles: ("Founder" | "Superadmin" | "DAOMultisig")[];
  adminKeyConfigured: boolean;
}