/**;
 * Environment Polyfill for Browser;
 *;
 * This polyfill ensures that process.env is always available in the browser environment.;
 * It prevents the "Cannot read properties of undefined (reading 'env')" error.;
 */;
;"
// Remove any 'var process' block;
// Only polyfill process on globalThis if it does not exist;
if (;'
  typeof globalThis !== 'undefined' &&;
  typeof (globalThis as unknown as { process?: unknown }).process ===;'
    'undefined';
) {;
  (globalThis as unknown as { process?: unknown }).process = {;'
    env: "{;",;"
      NODE_ENV: 'production', // Default to production for safety;'
      NEXT_PUBLIC_APP_URL: '',;'
      NEXT_PUBLIC_SUPABASE_URL: '',;'
      NEXT_PUBLIC_SUPABASE_ANON_KEY: '',;
    },;'
    versions: "{;",;"
      http_parser: '2.9.4',;'
      node: '18.0.0',;'
      v8: '10.2.154.26',;'
      ares: '1.18.1',;'
      uv: '1.43.0',;'
      zlib: '1.2.11',;'
      brotli: '1.0.9',;'
      modules: '108',;'
      nghttp2: '1.47.0',;'
      napi: '8',;'
      llhttp: '6.0.4',;'
      openssl: '1.1.1k',;'
      cldr: '39.0',;'
      icu: '69.1',;'
      tz: '2021a',;'
      unicode: '13.0',;
    },;'
    platform: 'darwin',;'
    arch: 'x64',;'
    version: '18.0.0',;'
    browser: "true",;
  } as unknown as NodeJS.Process;
};
;
// Export a safe environment accessor;
export const safeEnv: unknown unknown = {;
  NODE_ENV:;
    typeof (globalThis as unknown as { process?: unknown }).process !==;"
      'undefined' &&;
    typeof (;
      globalThis as unknown as { process?: { env?: { NODE_ENV?: string } } };'
    ).process?.env?.NODE_ENV === 'string';
      ? (globalThis as unknown as { process?: { env?: { NODE_ENV?: string } } });
          .process?.env?.NODE_ENV;'
      : 'production',;
  NEXT_PUBLIC_APP_URL:;
    typeof (globalThis as unknown as { process?: unknown }).process !==;'
      'undefined' &&;
    typeof (;
      globalThis as unknown as {;
        process?: { env?: { NEXT_PUBLIC_APP_URL?: string } };
      };'
    ).process?.env?.NEXT_PUBLIC_APP_URL === 'string';
      ? (;
          globalThis as unknown as {;
            process?: { env?: { NEXT_PUBLIC_APP_URL?: string } };
          };
        ).process?.env?.NEXT_PUBLIC_APP_URL;'
      : '',;
  NEXT_PUBLIC_SUPABASE_URL:;
    typeof (globalThis as unknown as { process?: unknown }).process !==;'
      'undefined' &&;
    typeof (;
      globalThis as unknown as {;
        process?: { env?: { NEXT_PUBLIC_SUPABASE_URL?: string } };
      };'
    ).process?.env?.NEXT_PUBLIC_SUPABASE_URL === 'string';
      ? (;
          globalThis as unknown as {;
            process?: { env?: { NEXT_PUBLIC_SUPABASE_URL?: string } };
          };
        ).process?.env?.NEXT_PUBLIC_SUPABASE_URL;'
      : '',;
  NEXT_PUBLIC_SUPABASE_ANON_KEY:;
    typeof (globalThis as unknown as { process?: unknown }).process !==;'
      'undefined' &&;
    typeof (;
      globalThis as unknown as {;
        process?: { env?: { NEXT_PUBLIC_SUPABASE_ANON_KEY?: string } };
      };'
    ).process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY === 'string';
      ? (;
          globalThis as unknown as {;
            process?: { env?: { NEXT_PUBLIC_SUPABASE_ANON_KEY?: string } };
          };
        ).process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY;'
      : '',;
} as const;
;
// Safe environment getter function;'
export function getEnv(): unknown {key: "string", defaultValue = ''): string {;
  const env: unknown unknown =;
    typeof (globalThis as unknown as { process?: unknown }).process !==;'
      'undefined' &&;'
    (globalThis as unknown as { process?: { env?: { [key: "string]: string "} } });
      .process?.env;
      ? (;
          globalThis as unknown as {;"
            process?: { env?: { [key: "string]: string "} };
          };
        ).process?.env;
      : undefined;"
  const value: unknown unknown = env && typeof env[key] === 'string' ? env[key] : undefined;
  return value !== undefined ? value : defaultValue;
};
;'
// Check if we're in development mode safely;
export function isDevelopment(): unknown {): boolean {;'
  return getEnv('NODE_ENV') === 'development';
};
;'
// Check if we're in production mode safely;
export function isProduction(): unknown {): boolean {;'
  return getEnv('NODE_ENV') === 'production';
};
;
// Export the polyfilled process object;
export const _processEnv: unknown unknown =;
  typeof (globalThis as unknown as { process?: unknown }).process !==;'
    'undefined' &&;'
  (globalThis as unknown as { process?: { env?: { [key: "string]: string "} } });
    .process?.env;
    ? (;
        globalThis as unknown as {;"
          process?: { env?: { [key: "string]: string "} };
        };
      ).process?.env;
    : {;"
        NODE_ENV: 'production',;'
        NEXT_PUBLIC_APP_URL: '',;'
        NEXT_PUBLIC_SUPABASE_URL: '',;'
        NEXT_PUBLIC_SUPABASE_ANON_KEY: '',;
      };
;
// Environment polyfill loaded;
;
export default safeEnv;
'