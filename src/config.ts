import 'dotenv/config';
import { z } from 'zod';

const ConfigSchema = z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(10),
  RESEND_API_KEY: z.string().optional(),
  SENDGRID_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().default('Zion <team@example.com>'),
  OPENAI_API_KEY: z.string().optional(),
  INACTIVITY_HOURS: z.coerce.number().int().positive().default(72),
  REMINDER_COOLDOWN_DAYS: z.coerce.number().int().positive().default(7),
  MAX_EMAILS_PER_RUN: z.coerce.number().int().positive().default(200),
  APP_BASE_URL: z.string().default('https://app.example.com'),
  DASHBOARD_DEEP_LINK_TALENT: z.string().default('/onboarding'),
  DASHBOARD_DEEP_LINK_CLIENT: z.string().default('/jobs'),
  DRY_RUN: z
    .string()
    .optional()
    .transform((v) => (v ? v.toLowerCase() : 'false'))
    .transform((v) => v === '1' || v === 'true')
});

export type AppConfig = z.infer<typeof ConfigSchema>;

export const config: AppConfig = ConfigSchema.parse(process.env);

export const DEEP_LINKS = {
  talent: `${config.APP_BASE_URL}${config.DASHBOARD_DEEP_LINK_TALENT}`,
  client: `${config.APP_BASE_URL}${config.DASHBOARD_DEEP_LINK_CLIENT}`
};