// src/config/env.ts
export const getAppKitProjectId = (): string => {
  // Check if import.meta.env is available (Vite environment)
  if (import.meta && import.meta.env) {
    return import.meta.env.VITE_REOWN_PROJECT_ID || 'YOUR_DEFAULT_PROJECT_ID_ENV_MISSING';
  }
  // Fallback for environments where import.meta.env is not defined (e.g., some test setups if not properly mocked)
  // or if process.env is used as a fallback strategy.
  // For this specific case, we primarily rely on import.meta.env for Vite.
  if (typeof process !== 'undefined' && process.env && process.env.VITE_REOWN_PROJECT_ID) {
    return process.env.VITE_REOWN_PROJECT_ID;
  }
  return 'YOUR_DEFAULT_PROJECT_ID_FALLBACK';
};
