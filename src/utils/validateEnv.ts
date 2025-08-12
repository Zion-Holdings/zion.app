import { logInfo } from '@/utils/productionLogger';

// src/utils/validateEnv.ts

interface EssentialEnvVars {
  NEXT_PUBLIC_REOWN_PROJECT_ID: string;
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
}

// List of critical environment variables that must be defined
const CRITICAL_ENV_VARS: Array<keyof EssentialEnvVars> = [
  'NEXT_PUBLIC_REOWN_PROJECT_ID',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
];

// Placeholder/default values that are considered invalid for VITE_REOWN_PROJECT_ID
const INVALID_PROJECT_ID_FALLBACKS: string[] = [
  'YOUR_PROJECT_ID', // Common placeholder from WalletContext
  'dummy', // Common placeholder from WalletContext
  'fallback', // Common placeholder from WalletContext
  'YOUR_DEFAULT_PROJECT_ID_ENV_MISSING', // From src/config/env.ts and WalletContext
  'YOUR_DEFAULT_PROJECT_ID_FALLBACK', // From src/config/env.ts and WalletContext
  'your_reown_project_id', // From .env.example
];

// Placeholder/default values that are considered invalid for Supabase URL and Key
const INVALID_SUPABASE_FALLBACKS: string[] = [
  'your_supabase_url_here', // From .env.example
  'your_supabase_anon_key_here', // From .env.example
];

/**
 * Checks if the essential environment variables are set.
 * Throws an error if any critical variable is missing, empty, or a known invalid placeholder.
 */
export const checkEssentialEnvVars = (): void => {
  const missingOrInvalidVars: string[] = [];

  for (const varName of CRITICAL_ENV_VARS) {
    const value = process.env[varName]; // Changed from import.meta.env

    if (value === undefined || value === null || String(value).trim() === '') {
      missingOrInvalidVars.push(`${varName} is not defined or is empty.`);
      continue;
    }

    // Specific checks for NEXT_PUBLIC_REOWN_PROJECT_ID placeholders
    if (varName === 'NEXT_PUBLIC_REOWN_PROJECT_ID' && INVALID_PROJECT_ID_FALLBACKS.includes(String(value))) {
      missingOrInvalidVars.push(`${varName} is set to a placeholder value: "${value}".`);
    }

    // Specific checks for NEXT_PUBLIC_SUPABASE_URL placeholders
    if (varName === 'NEXT_PUBLIC_SUPABASE_URL' && INVALID_SUPABASE_FALLBACKS.includes(String(value))) {
      missingOrInvalidVars.push(`${varName} is set to a placeholder value: "${value}".`);
    }

    // Specific checks for NEXT_PUBLIC_SUPABASE_ANON_KEY placeholders
    if (varName === 'NEXT_PUBLIC_SUPABASE_ANON_KEY' && INVALID_SUPABASE_FALLBACKS.includes(String(value))) {
      missingOrInvalidVars.push(`${varName} is set to a placeholder value: "${value}".`);
    }
  }

  if (missingOrInvalidVars.length > 0) {
    const errorMessage = `Critical environment variable(s) missing or invalid:
${missingOrInvalidVars.join('\n')}
Please check your .env file or environment configuration. Application cannot start.`;
    throw new Error(errorMessage);
  }

  // Optional: Log success in development
  // Note: process.env.NODE_ENV is typically 'development', 'production', or 'test' in Next.js
  if (process.env.NODE_ENV === 'development') {
    logInfo('Essential environment variables validated successfully.');
  }
};
