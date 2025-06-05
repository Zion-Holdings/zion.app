// __tests__/utils/validateEnv.test.ts

// NOTE: DO NOT add a static import for checkEssentialEnvVars here.
// It needs to be dynamically imported within each test after mocks are applied.

// Mock import.meta.env
const mockImportMetaEnv = (envValues: Record<string, string | boolean | undefined>) => {
  let devToSet = true;
  if (typeof envValues.DEV === 'boolean') {
    devToSet = envValues.DEV;
  }
  // Separate DEV from other envValues for clarity
  const otherEnvValues = { ...envValues };
  delete otherEnvValues.DEV;

  for (const key of Object.keys(otherEnvValues)) {
    const value = otherEnvValues[key];
    if (value !== undefined) {
      vi.stubEnv(key, String(value));
    } else {
      // If undefined in input, stub as empty string to override vitest.config.ts defaults
      // and ensure it's treated as "missing" by the validator.
      vi.stubEnv(key, '');
    }
  }

  // Apply DEV last, merging with whatever import.meta.env looks like after stubEnv calls.
  // This attempts to ensure DEV is correctly set even if stubEnv is aggressive.
  const currentEnv = globalThis.import?.meta?.env || {};
  vi.stubGlobal('import', { meta: { env: { ...currentEnv, DEV: devToSet } } });
};

describe('checkEssentialEnvVars', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
    // Aggressively ensure import.meta.env is reset if it exists from a previous state
    if (globalThis.import && globalThis.import.meta) {
      globalThis.import.meta.env = {};
    }
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it('should not throw an error when all essential environment variables are set correctly', () => {
    mockImportMetaEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    // Dynamically import after mocking
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).not.toThrow();
    });
  });

  it('should throw an error if VITE_REOWN_PROJECT_ID is missing', () => {
    mockImportMetaEnv({
      // VITE_REOWN_PROJECT_ID is missing
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_REOWN_PROJECT_ID is not defined or is empty/);
    });
  });

  it('should throw an error if VITE_SUPABASE_URL is empty', () => {
    mockImportMetaEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: '', // Empty value
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_SUPABASE_URL is not defined or is empty/);
    });
  });

  it('should throw an error if VITE_SUPABASE_ANON_KEY is a placeholder value', () => {
    mockImportMetaEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'your_supabase_anon_key_here', // Placeholder
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_SUPABASE_ANON_KEY is set to a placeholder value: "your_supabase_anon_key_here"/);
    });
  });

  it('should throw an error if VITE_REOWN_PROJECT_ID is a placeholder value', () => {
    mockImportMetaEnv({
      VITE_REOWN_PROJECT_ID: 'YOUR_PROJECT_ID', // Placeholder
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_REOWN_PROJECT_ID is set to a placeholder value: "YOUR_PROJECT_ID"/);
    });
  });

  it('should throw an error listing multiple missing or invalid variables', () => {
    mockImportMetaEnv({
      VITE_REOWN_PROJECT_ID: undefined, // Explicitly undefined, will be stubbed as '' by mockImportMetaEnv
      VITE_SUPABASE_URL: 'your_supabase_url_here', // Placeholder
      VITE_SUPABASE_ANON_KEY: undefined, // Explicitly undefined, will be stubbed as ''
    });
    return import('@/utils/validateEnv').then(module => {
      try {
        module.checkEssentialEnvVars();
        // If it doesn't throw, the test should fail
        throw new Error("checkEssentialEnvVars did not throw an error as expected");
      } catch (error: any) {
        const errorMessage = error.message;
        expect(errorMessage).toMatch(/VITE_REOWN_PROJECT_ID is not defined or is empty/);
        expect(errorMessage).toMatch(/VITE_SUPABASE_URL is set to a placeholder value: "your_supabase_url_here"/);
        expect(errorMessage).toMatch(/VITE_SUPABASE_ANON_KEY is not defined or is empty/);
      }
    });
  });

  it('should log success message in DEV mode when variables are valid', () => {
    mockImportMetaEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
      DEV: true, // Explicitly set DEV true
    });
    const consoleLogSpy = vi.spyOn(console, 'log');
    return import('@/utils/validateEnv').then(module => {
      module.checkEssentialEnvVars();
      expect(consoleLogSpy).toHaveBeenCalledWith('Essential environment variables validated successfully.');
      consoleLogSpy.mockRestore();
    });
  });

  it('should not log success message when not in DEV mode even if variables are valid', () => {
    mockImportMetaEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
      DEV: false, // Explicitly set DEV false
    });

    const consoleLogSpy = vi.spyOn(console, 'log');
    // Ensure spy is clean before the specific call we want to monitor
    consoleLogSpy.mockClear();

    return import('@/utils/validateEnv').then(module => {
      try {
        module.checkEssentialEnvVars();
        expect(consoleLogSpy).not.toHaveBeenCalledWith('Essential environment variables validated successfully.');
      } finally {
        consoleLogSpy.mockRestore();
      }
    });
  });
});
