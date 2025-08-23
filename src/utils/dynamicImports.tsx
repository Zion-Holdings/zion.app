import React from 'react';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import {logErrorToProduction} from './productionLogger';
import { logInfo } from '@/utils/productionLogger';


// Loading component for dynamic imports
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary for failed dynamic imports
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="flex items-center justify-center p-8 text-red-600">
    <p>Failed to load component: {error.message}</p>
  </div>
);

// Enhanced dynamic import with error handling
export function createDynamicImport<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: {
    loading?: () => React.JSX.Element;
    ssr?: boolean;
    errorFallback?: ComponentType<{ error: Error }>;
  } = {}
) {
  const DynamicComponent = dynamic(importFn, {
    loading: options.loading || LoadingSpinner,
    ssr: options.ssr ?? true,
  });

  // Wrap with error handling
  const WrappedComponent = (props: any) => {
    try {
      return <DynamicComponent {...props} />;
    } catch (error) {
      logErrorToProduction('Dynamic import failed:', { data: error });
      if (options.errorFallback) {
        return <options.errorFallback error={error as Error} />;
      }
      return <ErrorFallback error={error as Error} />;
    }
  };

  return WrappedComponent;
}

// Pre-optimized dynamic imports for heavy components
// Note: Commented out until components export proper default exports
// export const DynamicComponents = {
//   // Components will be added when they have proper default exports
// };

// Route-based code splitting helpers  
// Note: Commented out until pages export proper default exports
// export const DynamicPages = {
//   // Pages will be added when they have proper default exports
// };

// Utility for preloading components
export function preloadComponent(component: ComponentType) {
  if (typeof window !== 'undefined' && 'preload' in component) {
    (component as any).preload();
  }
}

// Bundle size tracker
export function trackBundleUsage(componentName: string) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    logInfo(`[Bundle] Loading component: ${componentName}`);
  }
} 