// __tests__/utils/validateEnv.test.ts
import { vi, describe, it, expect, beforeEach, afterEach, type SpyInstance } from 'vitest';

// NOTE: DO NOT add a static import for checkEssentialEnvVars here.
// It needs to be dynamically imported within each test after mocks are applied.

// Store original process.env
const ORIGINAL_ENV = { ...process.env };

// Helper to set and reset process.env for Vitest tests
const mockProcessEnv = (envValues: Record<string, string | boolean | undefined>) => {
  process.env = { ...ORIGINAL_ENV }; // Start with a fresh copy of original env

  // Set specific values for the test
  for (const key in envValues) {
    if (envValues[key] !== undefined) {
      process.env[key] = String(envValues[key]);
    } else {
      delete process.env[key]; // Ensure it's treated as undefined by the code
    }
  }
};


describe('checkEssentialEnvVars', () => {
  beforeEach(() => {
    vi.resetModules(); // Clears the cache for modules, useful when env vars change
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV; // Restore original environment
    vi.restoreAllMocks(); // Restores all spies
  });

  it('should not throw an error when all essential environment variables are set correctly', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    const module = await import('@/utils/validateEnv');
    expect(() => module.checkEssentialEnvVars()).not.toThrow();
  });

  it('should throw an error if NEXT_PUBLIC_REOWN_PROJECT_ID is missing', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    const module = await import('@/utils/validateEnv');
    expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/);
  });

  it('should throw an error if NEXT_PUBLIC_SUPABASE_URL is empty', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: '',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    const module = await import('@/utils/validateEnv');
    expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_URL is not defined or is empty/);
  });

  it('should throw an error if NEXT_PUBLIC_SUPABASE_ANON_KEY is a placeholder value', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'your_supabase_anon_key_here',
    });
    const module = await import('@/utils/validateEnv');
    expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_ANON_KEY is set to a placeholder value: "your_supabase_anon_key_here"/);
  });

  it('should throw an error if NEXT_PUBLIC_REOWN_PROJECT_ID is a placeholder value', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'YOUR_PROJECT_ID',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    const module = await import('@/utils/validateEnv');
    expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_REOWN_PROJECT_ID is set to a placeholder value: "YOUR_PROJECT_ID"/);
  });

  it('should throw an error listing multiple missing or invalid variables', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: undefined,
      NEXT_PUBLIC_SUPABASE_URL: 'your_supabase_url_here',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: undefined,
    });
    const module = await import('@/utils/validateEnv');
    try {
      module.checkEssentialEnvVars();
      throw new Error("checkEssentialEnvVars did not throw an error as expected");
    } catch (error: any) {
      const errorMessage = error.message;
      expect(errorMessage).toMatch(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/);
      expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_URL is set to a placeholder value: "your_supabase_url_here"/);
      expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined or is empty/);
    }
  });

  it('should log success message in DEV mode when variables are valid', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    // For import.meta.env.DEV, Vitest usually sets this based on mode.
    // Assuming 'development' mode implies import.meta.env.DEV = true
    const consoleLogSpy = vi.spyOn(console, 'log');
    const module = await import('@/utils/validateEnv');
    module.checkEssentialEnvVars();
    expect(consoleLogSpy).toHaveBeenCalled();
  });

  it('should not log success message when not in DEV mode even if variables are valid', async () => {
    mockProcessEnv({
      NODE_ENV: 'production',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
     // For import.meta.env.DEV, Vitest usually sets this based on mode.
    // Assuming 'production' mode implies import.meta.env.DEV = false
    const consoleLogSpy = vi.spyOn(console, 'log');
    const module = await import('@/utils/validateEnv');
    module.checkEssentialEnvVars();
    expect(consoleLogSpy).not.toHaveBeenCalledWith('Essential environment variables validated successfully.');
  });
});

describe('validateProductionEnvironment', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
    vi.restoreAllMocks();
  });

  it('should not throw an error in development even if INTERNAL_AUTH_SERVICE_URL is missing, and should log a warning', async () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_anon_key',
      INTERNAL_AUTH_SERVICE_URL: undefined,
    });

    const consoleWarnSpy = vi.spyOn(console, 'warn');
    const configModule = await import('@/utils/environmentConfig');
    expect(() => configModule.validateProductionEnvironment()).not.toThrow();
    expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('Internal auth service URL is not configured - using fallback. Signup might be affected.'));
  });

  it('should throw an error in production if INTERNAL_AUTH_SERVICE_URL is missing', async () => {
    mockProcessEnv({
        NODE_ENV: 'production',
        NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_anon_key',
        NEXT_PUBLIC_SENTRY_DSN: 'https://sentry.io/123',
        INTERNAL_AUTH_SERVICE_URL: undefined,
    });
    const configModule = await import('@/utils/environmentConfig');
    expect(() => configModule.validateProductionEnvironment()).toThrowError(/INTERNAL_AUTH_SERVICE_URL must be configured in production for user signup/);
  });

  it('should not throw an error in production if INTERNAL_AUTH_SERVICE_URL is set', async () => {
     mockProcessEnv({
        NODE_ENV: 'production',
        NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_anon_key',
        NEXT_PUBLIC_SENTRY_DSN: 'https://sentry.io/123',
        INTERNAL_AUTH_SERVICE_URL: 'https://my-auth-service.com',
    });
    const configModule = await import('@/utils/environmentConfig');
    expect(() => configModule.validateProductionEnvironment()).not.toThrow();
  });

  it('should throw an error in production if Supabase URL is a placeholder', async () => {
    mockProcessEnv({
        NODE_ENV: 'production',
        NEXT_PUBLIC_SUPABASE_URL: 'https://placeholder.supabase.co',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_anon_key',
        NEXT_PUBLIC_SENTRY_DSN: 'https://sentry.io/123',
        INTERNAL_AUTH_SERVICE_URL: 'https://my-auth.example.com',
    });
    const configModule = await import('@/utils/environmentConfig');
    expect(() => configModule.validateProductionEnvironment()).toThrowError(/NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be configured in production/);
  });

  it('should throw an error in production if Sentry DSN is missing', async () => {
    mockProcessEnv({
        NODE_ENV: 'production',
        NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_anon_key',
        NEXT_PUBLIC_SENTRY_DSN: undefined,
        INTERNAL_AUTH_SERVICE_URL: 'https://my-auth.example.com',
    });
    const configModule = await import('@/utils/environmentConfig');
    expect(() => configModule.validateProductionEnvironment()).toThrowError(/NEXT_PUBLIC_SENTRY_DSN must be configured in production for error monitoring/);
  });
});
