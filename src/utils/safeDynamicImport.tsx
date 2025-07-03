import dynamic from 'next/dynamic';
import React from 'react';
import { logErrorToProduction } from '@/utils/productionLogger';

interface Options {
  /** Name of the component for logging */
  name: string;
  /** Disable server-side rendering */
  ssr?: boolean;
  /** Optional custom loading component */
  loading?: React.ComponentType;
}

/**
 * Safely load a component using next/dynamic with automatic error handling.
 * If the import fails, a simple fallback component is rendered and the error
 * is logged via `logErrorToProduction`.
 */
export function safeDynamicImport<T extends React.ComponentType<any>>(
  importer: () => Promise<{ default: T }>,
  options: Options
) {
  const { name, ssr = false, loading: Loading } = options;

  return dynamic(
    () =>
      importer().catch((err) => {
        logErrorToProduction(`Dynamic import failed for ${name}:`, { data: err });
        return () => (
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            Failed to load {name}
          </div>
        );
      }),
    {
      ssr,
      loading: () =>
        Loading ? <Loading /> : <div style={{ display: 'none' }}>Loading {name}...</div>,
    }
  );
}

export default safeDynamicImport;

