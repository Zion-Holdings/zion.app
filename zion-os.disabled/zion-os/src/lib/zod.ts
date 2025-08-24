import { z } from "zod";

export const FeatureKeys = [
  "marketplace",
  "zion_gpt",
  "resume_ai",
  "token_rewards",
  "onchain_contracts",
  "kyc_aml",
  "dao_voting",
  "incubator_grants",
  "academy",
  "partner_api",
  "regional_dashboards",
  "vendor_plugin",
  "web3_login",
  "multi_currency",
] as const;

export const deploymentInputSchema = z.object({
  instanceName: z.string().min(3),
  domain: z.string().optional(),
  subdomain: z.string().optional(),
  vertical: z.enum(["GENERAL", "HEALTH", "EDUCATION", "LAW", "GOV"]),
  defaultLanguage: z.string().default("en"),
  tokenSystem: z.enum(["SHARED", "LOCAL"]).default("SHARED"),
  governanceType: z.enum(["ADMIN", "DAO_LITE", "DAO_FULL"]).default("ADMIN"),
  region: z.string().optional(),
  country: z.string().optional(),
  features: z.record(z.enum(FeatureKeys), z.boolean()).default({} as any),
  addons: z.object({
    paymentGateway: z.string().optional(),
    sovereignTreasury: z.boolean().optional(),
    dualGovernance: z.boolean().optional(),
    aiModeration: z.boolean().optional(),
    affiliatePanel: z.boolean().optional(),
  }).default({}),
});

export type DeploymentInput = z.infer<typeof deploymentInputSchema>;