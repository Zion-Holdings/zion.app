// __tests__/utils/validateEnv.test.ts

// NOTE: DO NOT add a static import for checkEssentialEnvVars here.
// It needs to be dynamically imported within each test after mocks are applied.

let originalProcessEnv: NodeJS.ProcessEnv;
let originalImportMeta: any;

const mockProcessEnvAndImportMeta = (envValues: Record<string, string | boolean | undefined>) => {
  originalProcessEnv = { ...process.env }; // Backup original process.env
  originalImportMeta = globalThis.import?.meta ? { ...globalThis.import.meta } : undefined;

  // Clear existing process.env keys that might interfere (those being tested)
  delete process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  // ... clear other specific envs if necessary for other tests

  const newMetaEnv: Record<string, any> = {};
  if (globalThis.import?.meta?.env) {
    Object.assign(newMetaEnv, globalThis.import.meta.env);
  }

  let devToSet = true;
  if (typeof envValues.DEV === 'boolean') {
    devToSet = envValues.DEV;
  }
  const otherEnvValues = { ...envValues };
  delete otherEnvValues.DEV;

  for (const key of Object.keys(otherEnvValues)) {
    const value = otherEnvValues[key];
    process.env[key] = value === undefined ? '' : String(value); // Set on process.env for jest
    newMetaEnv[key] = value === undefined ? '' : String(value); // Also set on import.meta.env mock
  }

  newMetaEnv.DEV = devToSet;

  // @ts-ignore
  globalThis.import = { meta: { env: newMetaEnv } };
};

describe('checkEssentialEnvVars', () => {
  beforeEach(() => {
    jest.resetModules(); // Jest's equivalent for vi.resetModules()
    // Backup and clear envs will be handled by mockProcessEnvAndImportMeta
  });

  afterEach(() => {
    process.env = originalProcessEnv; // Restore original process.env
    if (originalImportMeta) {
      globalThis.import.meta = originalImportMeta;
    } else if (globalThis.import) {
      // @ts-ignore
      delete globalThis.import.meta;
    }
  });

  it('should not throw an error when all essential environment variables are set correctly', () => {
    mockProcessEnvAndImportMeta({
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    // Dynamically import after mocking
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).not.toThrow();
    });
  });

  it('should throw an error if NEXT_PUBLIC_REOWN_PROJECT_ID is missing', () => {
    mockProcessEnvAndImportMeta({
      // NEXT_PUBLIC_REOWN_PROJECT_ID is missing by not being set on process.env
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/);
    });
  });

  it('should throw an error if NEXT_PUBLIC_SUPABASE_URL is empty', () => {
    mockProcessEnvAndImportMeta({
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: '', // Empty value
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_URL is not defined or is empty/);
    });
  });

  it('should throw an error if NEXT_PUBLIC_SUPABASE_ANON_KEY is a placeholder value', () => {
    mockProcessEnvAndImportMeta({
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'your_supabase_anon_key_here', // Placeholder
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_ANON_KEY is set to a placeholder value: "your_supabase_anon_key_here"/);
    });
  });

  it('should throw an error if NEXT_PUBLIC_REOWN_PROJECT_ID is a placeholder value', () => {
    mockProcessEnvAndImportMeta({
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'YOUR_PROJECT_ID', // Placeholder
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_REOWN_PROJECT_ID is set to a placeholder value: "YOUR_PROJECT_ID"/);
    });
  });

  it('should throw an error listing multiple missing or invalid variables', () => {
    mockProcessEnvAndImportMeta({
      NEXT_PUBLIC_REOWN_PROJECT_ID: undefined, // Will be set to '' by mockProcessEnvAndImportMeta
      NEXT_PUBLIC_SUPABASE_URL: 'your_supabase_url_here', // Placeholder
      NEXT_PUBLIC_SUPABASE_ANON_KEY: undefined, // Will be set to ''
    });
    return import('@/utils/validateEnv').then(module => {
      try {
        module.checkEssentialEnvVars();
        // If it doesn't throw, the test should fail
        throw new Error("checkEssentialEnvVars did not throw an error as expected");
      } catch (error: any) {
        const errorMessage = error.message;
        expect(errorMessage).toMatch(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/);
        expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_URL is set to a placeholder value: "your_supabase_url_here"/);
        expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined or is empty/);
      }
    });
  });

  it('should log success message in DEV mode when variables are valid', () => {
    mockProcessEnvAndImportMeta({
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
      DEV: true, // Explicitly set DEV true
    });
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log
    return import('@/utils/validateEnv').then(module => {
      module.checkEssentialEnvVars();
      expect(consoleLogSpy).toHaveBeenCalledWith('Essential environment variables validated successfully.');
      consoleLogSpy.mockRestore();
    });
  });

  it('should not log success message when not in DEV mode even if variables are valid', () => {
    mockProcessEnvAndImportMeta({
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
      DEV: false, // Explicitly set DEV false
    });

    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    // Ensure spy is clean before the specific call we want to monitor
    // consoleLogSpy.mockClear(); // Not strictly necessary with mockImplementation above for this test

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
