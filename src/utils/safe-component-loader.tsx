import { logErrorToProduction } from '@/utils/productionLogger';

/**
 * Safe Component Loader
 * 
 * This utility provides safe loading of components with comprehensive error handling
 * to prevent getInitialProps and other runtime errors.
 */

import React from 'react';
import dynamic from 'next/dynamic';

// Error boundary for component loading
interface BoundaryProps {
  fallback: React.ComponentType<object>;
  children: React.ReactNode;
}

interface BoundaryState {
  hasError: boolean;
}

class ComponentErrorBoundary extends React.Component<BoundaryProps, BoundaryState> {
  static getDerivedStateFromError(error: Error): BoundaryState {
    return { hasError: true };
  }
  
  override componentDidCatch(error: Error, info: React.ErrorInfo) {
    logErrorToProduction('Component loading error:', error);
  }
  
  override render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback;
      return React.createElement(Fallback);
    }
    return this.props.children;
  }
}

// Default fallback component
const DefaultFallback: React.FC<object> = () => {
  return React.createElement('div', {
    style: {
      padding: '2rem',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    }
  }, [
    React.createElement('h2', { 
      key: 'title',
      style: { color: '#495057', marginBottom: '1rem' }
    }, '📄 Page Loading'),
    React.createElement('p', { 
      key: 'message',
      style: { color: '#6c757d', lineHeight: '1.5' }
    }, 'This page is being prepared. Please wait a moment while we load the content.'),
    React.createElement('div', {
      key: 'spinner',
      style: {
        width: '40px',
        height: '40px',
        border: '4px solid #e9ecef',
        borderTop: '4px solid #007bff',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '1rem auto'
      }
    })
  ]);
};

// Default loading component
const DefaultLoading: React.FC = () => {
  return React.createElement('div', {
    style: { 
      padding: '2rem', 
      textAlign: 'center',
      color: '#6c757d'
    }
  }, 'Loading...');
};

// Safe dynamic component loader with explicit import function
export function createSafeComponent(
  importFn: () => Promise<{ default: React.ComponentType<any> }>,
  fallbackComponent?: React.ComponentType,
  options?: {
    loading?: React.ComponentType;
    ssr?: boolean;
  }
) {
  const SafeComponent = dynamic(
    () => {
      return importFn()
        .then(module => {
          // Ensure we have a valid component
          const Component = module.default || module;
          if (!Component || typeof Component !== 'function') {
            throw new Error(`Invalid component loaded`);
          }
          
          // Wrap component to ensure it has proper structure
          const WrappedComponent: React.FC<Record<string, unknown>> = (props: Record<string, unknown>) => {
            try {
              return React.createElement(Component, props);
            } catch (error) {
              logErrorToProduction(`Error rendering component:`, error);
              const Fallback = fallbackComponent || DefaultFallback;
              return React.createElement(Fallback);
            }
          };
          
          // Ensure getInitialProps is safe and doesn't cause errors
          if ((Component as unknown as { getInitialProps?: (ctx: unknown) => Promise<unknown> }).getInitialProps) {
            (WrappedComponent as unknown as { getInitialProps?: (ctx: unknown) => Promise<unknown> }).getInitialProps = async (ctx: unknown) => {
              try {
                return await (Component as unknown as { getInitialProps: (ctx: unknown) => Promise<unknown> }).getInitialProps(ctx);
              } catch (error) {
                logErrorToProduction(`Error in getInitialProps:`, error);
                // Return empty props to prevent the error from crashing the app
                return {};
              }
            };
          }
          
          return { default: WrappedComponent };
        })
        .catch((error) => {
          logErrorToProduction(`Failed to load component:`, error);
          
          // Create a safe fallback component that handles getInitialProps
          const SafeFallback: React.FC<Record<string, unknown>> = (props: Record<string, unknown>) => {
            const Fallback = fallbackComponent || DefaultFallback;
            return React.createElement(Fallback, props);
          };
          
          // Ensure the fallback component has a safe getInitialProps
          (SafeFallback as unknown as { getInitialProps?: (ctx: unknown) => Promise<unknown> }).getInitialProps = async (ctx: unknown) => {
            try {
              // Try to call getInitialProps on the original component if it exists
              const originalModule = await importFn().catch(() => null);
              const originalComponent = originalModule?.default;
              if (originalComponent && typeof (originalComponent as any).getInitialProps === 'function') {
                return await (originalComponent as any).getInitialProps(ctx);
              }
            } catch (error) {
              logErrorToProduction(`Error in fallback getInitialProps:`, error);
            }
            // Return empty props as final fallback
            return {};
          };
          
          return { default: SafeFallback };
        });
    },
    {
      loading: options?.loading ? () => React.createElement(options.loading!) : () => <DefaultLoading />, 
      ssr: options?.ssr !== false, // Default to true for SSR
    }
  );

  return SafeComponent;
}

// Pre-configured safe components for common pages with explicit imports
export const SafeWalletComponent = createSafeComponent(() => import('../pages/Wallet'));
export const SafeWishlistComponent = createSafeComponent(() => import('../pages/Wishlist'));
export const SafeTeamComponent = createSafeComponent(() => import('../pages/OrgChart'));
export const SafeTalentsComponent = createSafeComponent(() => import('../pages/TalentsPage'));

interface SafeComponentLoaderProps {
  loader: () => Promise<{ default: React.ComponentType<object> }>;
  fallback?: React.ReactNode;
}

export function SafeComponentLoader({ loader, fallback }: SafeComponentLoaderProps) {
  const LazyComponent = React.lazy(loader) as React.ComponentType<object>;
  return (
    <React.Suspense fallback={fallback || null}>
      <LazyComponent />
    </React.Suspense>
  );
}