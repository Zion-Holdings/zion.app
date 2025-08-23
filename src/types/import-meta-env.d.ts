// src/types/import-meta-env.d.ts

interface ImportMetaEnv {
  // --- VITE specific variables (kept for potential Vitest/tooling use) ---
  readonly VITE_REOWN_PROJECT_ID?: string; // Example if Vitest needs it
  readonly VITE_API_URL?: string; // Example if Vitest needs it

  // --- NEXT_PUBLIC_ variables (for Next.js application code) ---
  readonly NEXT_PUBLIC_SUPABASE_URL?: string;
  readonly NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly NEXT_PUBLIC_REOWN_PROJECT_ID?: string;
  readonly NEXT_PUBLIC_VAPID_PUBLIC_KEY?: string;
  readonly NEXT_PUBLIC_API_URL?: string;
  readonly NEXT_PUBLIC_APP_ENV?: string;
  readonly NEXT_PUBLIC_OPENAI_API_KEY?: string;
  readonly NEXT_PUBLIC_FIREBASE_API_KEY?: string;
  readonly NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?: string;
  readonly NEXT_PUBLIC_FIREBASE_PROJECT_ID?: string;
  readonly NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?: string;
  readonly NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?: string;
  readonly NEXT_PUBLIC_FIREBASE_APP_ID?: string;
  readonly NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?: string;
  readonly NEXT_PUBLIC_STRIPE_PUBLIC_KEY?: string;
  readonly NEXT_PUBLIC_ANALYTICS_TRACKING_ID?: string;
  readonly NEXT_PUBLIC_DEVTOOLS?: string;
  readonly NEXT_PUBLIC_NETLIFY_CONTEXT?: string;
  readonly NEXT_PUBLIC_STRIPE_TEST_KEY?: string;
  readonly NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY?: string;
  readonly NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?: string;
  readonly NEXT_PUBLIC_STRIPE_PK?: string;
  readonly NEXT_PUBLIC_GA_ID?: string;
  readonly NEXT_PUBLIC_POSTHOG_KEY?: string;
  readonly NEXT_PUBLIC_POSTHOG_HOST?: string;
  readonly NEXT_PUBLIC_INTERCOM_APP_ID?: string;
  readonly NEXT_PUBLIC_SALESFORCE_URL?: string;
  readonly NEXT_PUBLIC_SALESFORCE_TOKEN?: string;
  readonly NEXT_PUBLIC_MAILCHIMP_API_KEY?: string;
  readonly NEXT_PUBLIC_MAILCHIMP_LIST_ID?: string;
  readonly NEXT_PUBLIC_TEAMS_WEBHOOK_URL?: string;
  readonly NEXT_PUBLIC_ERROR_WEBHOOK_URL?: string;
  readonly NEXT_PUBLIC_BASE_URL?: string;

  // Optional: Allow any other string keys
  readonly [key: string]: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
