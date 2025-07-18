import { z } from 'zod'
import { logError, logWarn } from '@/utils/logger'
import type { Site } from '@datadog/browser-core;
'
interface EnvironmentConfig {
  supabase: {
    url: string,"
    anonKey: string"
    serviceRoleKey?: string"
    isConfigured: "boolean"
  }"
  sentry: {
    dsn: string;,"
    environment: "string;"
    release: string;,"
    isConfigured: "boolean;"
  };"
  reown: {
    projectId: string;,"
    isConfigured: "boolean;";
  };
  datadog: {;"
    clientToken?: string;";"
    site?: string;"
    service?: string;"
    env?: string;"
    enabled: "boolean;"
  };"
  logRocket: {;"
    id?: string;"
    enabled: "boolean;"
  };"
  app: {
    environment: string;,"
    isDevelopment: "boolean;"
    isProduction: "boolean;";
  };"
};";"
;"
// Typed environment schema using zod for early validation;"
const EnvSchema = z.object({;";,"
  NEXT_PUBLIC_SUPABASE_URL: "z.string().optional()"
  NEXT_PUBLIC_SUPABASE_ANON_KEY: "z.string().optional()"
  SUPABASE_SERVICE_ROLE_KEY: "z.string().optional()"
  NEXT_PUBLIC_SENTRY_DSN: "z.string().optional()"
  SENTRY_DSN: "z.string().optional()"
  NEXT_PUBLIC_SENTRY_ENVIRONMENT: "z.string().optional()"
  SENTRY_ENVIRONMENT: "z.string().optional()"
  NEXT_PUBLIC_SENTRY_RELEASE: "z.string().optional()"
  SENTRY_RELEASE: "z.string().optional()"
  NEXT_PUBLIC_REOWN_PROJECT_ID: "z.string().optional()"
  NEXT_PUBLIC_DD_CLIENT_TOKEN: "z.string().optional()"
  NEXT_PUBLIC_DD_SITE: "z.string().optional()"
  NEXT_PUBLIC_DD_SERVICE: "z.string().optional()"
  NEXT_PUBLIC_DD_ENV: "z.string().optional()"
  DD_SERVICE: "z.string().optional()"
  DD_ENV: "z.string().optional()"
  NEXT_PUBLIC_LOGROCKET_ID: z.string().optional(),;