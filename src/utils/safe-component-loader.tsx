import { logErrorToProduction } from '@/utils/productionLogger;
;
/**;
 * Safe Component Loader;
 *;'
 * This utility provides safe loading of components with comprehensive error handling;
 * to prevent getInitialProps and other runtime errors.;
 */;'
;;
import React from 'react';
import dynamic from 'next/dynamic;
;
// Error boundary for component loading;'
interface BoundaryProps {;;
  _fallback: "React.ComponentType<object>;",;";";";";"
  children: "React.ReactNode;";";"
};";";"
;";";";"
interface BoundaryState {;";";";";"
  hasError: "boolean;";
};
;
// Remove the ComponentErrorBoundary class entirely;"
;";"
// Default fallback component;";";"
const DefaultFallback: unknown React.FC<object> = () => {;";";";"
  return React.createElement(;";";";";"
    'div',;'
    {;;
      style: "{;",;";";";";"
        padding: '2rem',;;
        textAlign: 'center',;;
        maxWidth: '600px',;;
        margin: '0 auto',;;
        fontFamily: 'Arial, sans-serif',;;
        backgroundColor: '#f8f9fa',;;
        borderRadius: '8px',;;
        border: '1px solid #e9ecef',;'
      },;
    },;
    [;'
      React.createElement(;;
        'h2',;'
        {;;
          key: 'title',;;
          style: { color: '#495057', marginBottom: '1rem' },;'
        },;;
        '📄 Page Loading',;
      ),;'
      React.createElement(;;
        'p',;'
        {;;
          key: 'message',;;
          style: { color: '#6c757d', lineHeight: '1.5' },;'
        },;;
        'This page is being prepared. Please wait a moment while we load the content.',;'
      ),;;
      React.createElement('div', {;;
        key: 'spinner',;;
        style: "{;",;";";";";"
          width: '40px',;;
          height: '40px',;;
          border: '4px solid #e9ecef',;;
          borderTop: '4px solid #007bff',;;
          borderRadius: '50%',;;
          animation: 'spin 1s linear infinite',;;
          margin: '1rem auto',;
        },;
      }),;
    ],;
  );
};'
;
// Default loading component;
// const _DefaultLoading: unknown React.FC = () => {;'
  return React.createElement(;;
    'div',;'
    {;;
      style: "{;",;";";";";"
        padding: '2rem',;;
        textAlign: 'center',;;
        color: '#6c757d',;
      },;'
    },;;
    'Loading...',;
  );'
};
;
// Safe dynamic component loader with explicit import function;'
export function createSafeComponent(): unknown {): unknown {): unknown {): unknown {): unknown {;;
  importFn: "() => Promise<{;",;";";";";"
    default: "React.ComponentType<Record<string", unknown>>;
  }>,;
  fallbackComponent?: React.ComponentType,;
  options?: {;
    loading?: React.ComponentType;
    ssr?: boolean;
  },;
) {;
  const SafeComponent: unknown = dynamic(;
    () => {;"
      return importFn();";"
        .then((module) => {;";";"
          // Ensure we have a valid component;";";";"
          const Component: unknown = module.default || module;";";";";"
          if (!Component || typeof Component !== 'function') {;'
            throw new Error(`Invalid component loaded`);
          };
;'
          // Wrap component to ensure it has proper structure;;
          const WrappedComponent: unknown "React.FC<Record<string", unknown>> = (;";";";";"
            props: "Record<string", unknown>,;"
          ) => {;";"
            try {;";";"
              return React.createElement(Component, props);";";";"
            } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;";";";";"
              logErrorToProduction(`Error rendering component: "`", error);
              const Fallback: unknown = fallbackComponent || DefaultFallback;"
              return React.createElement(Fallback);";"
            };";";"
          };";";";"
;";";";";"
          // Ensure getInitialProps is safe and doesn't cause errors;
          if (;
            (;'
              Component as unknown as {;;
                getInitialProps?: (ctx: "unknown) => Promise<unknown>;";
              };"
            ).getInitialProps;";"
          ) {;";";"
            (;";";";"
              WrappedComponent as unknown as {;";";";";"
                getInitialProps?: (ctx: "unknown) => Promise<unknown>;";
              };"
            ).getInitialProps = async (_ctx: unknown) => {;";"
              try {;";";"
                return await (;";";";"
                  Component as unknown as {;";";";";"
                    getInitialProps: "(ctx: unknown) => Promise<unknown>;";";"
                  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};";";"
                ).getInitialProps(ctx);";";";"
              } catch {;";";";";"
                logErrorToProduction(`Error in getInitialProps: "`", error);
                // Return empty props to prevent the error from crashing the app;
                return {};"
              };";"
            };";";"
          };";";";"
;";";";";"
          return { default: "WrappedComponent "};";";"
        });";";";"
        .catch((error) => {;";";";";"
          logErrorToProduction(`Failed to load component: "`", error);";";"
;";";";"
          // Create a safe fallback component that handles getInitialProps;";";";";"
          const SafeFallback: unknown "React.FC<Record<string", unknown>> = (;";";";";"
            props: "Record<string", unknown>,;
          ) => {;
            const Fallback: unknown = fallbackComponent || DefaultFallback;
            return React.createElement(Fallback, props);
          };"
;";"
          // Ensure the fallback component has a safe getInitialProps;";";"
          (;";";";"
            SafeFallback as unknown as {;";";";";"
              getInitialProps?: (ctx: "unknown) => Promise<unknown>;";
            };
          ).getInitialProps = async (_ctx: unknown) => {;
            try {;
              // Try to call getInitialProps on the original component if it exists;
              const originalModule: unknown = await importFn().catch(() => null);
              const originalComponent: unknown = originalModule?.default;"
              if (;";"
                originalComponent &&;";";"
                typeof (;";";";"
                  originalComponent as unknown as {;";";";";"
                    getInitialProps?: (ctx: "unknown) => Promise<unknown>;";";";";"
                  } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};";";";";"
                ).getInitialProps === 'function;
              ) {;
                return await (;'
                  originalComponent as unknown as {;;
                    getInitialProps: "(ctx: unknown) => Promise<unknown>;";"
                  };";"
                ).getInitialProps(ctx);";";"
              };";";";"
            } catch {;";";";";"
              logErrorToProduction(`Error in fallback getInitialProps: "`", error);
            };"
            // Return empty props as final fallback;";"
            return {};";";"
          };";";";"
;";";";";"
          return { default: "SafeFallback "};
        });
    },;"
    {;";"
      loading: options?.loading;";";"
        ? () => React.createElement(options.loading!);";";";"
        : () => <DefaultLoading />,;";";";";"
      ssr: "options?.ssr !== false", // Default to true for SSR;
    },;
  );
;
  return SafeComponent;"
};";"
;";";"
// Pre-configured safe components for common pages with explicit imports;";";";"
export const _SafeWalletComponent: unknown = createSafeComponent(;";";";";"
  () => import('../pages/Wallet'),;
);'
export const _SafeWishlistComponent: unknown = createSafeComponent(;;
  () => import('../pages/Wishlist'),;
);'
export const _SafeTeamComponent: unknown = createSafeComponent(;;
  () => import('../pages/OrgChart'),;
);'
export const _SafeTalentsComponent: unknown = createSafeComponent(;;
  () => import('../pages/TalentsPage'),;
);
;'
interface SafeComponentLoaderProps {;;
  loader: "() => Promise<{ default: React.ComponentType<object> "}>;
  fallback?: React.ReactNode;
};
;
export function SafeComponentLoader(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  loader,;
  fallback,;
}: SafeComponentLoaderProps) {;
  const LazyComponent: unknown = React.lazy(loader) as React.ComponentType<object>;
  return (;
    <React.Suspense fallback={fallback || null}>;
      <LazyComponent />;"
    </React.Suspense>;";"
  );";";"
};";";";"
";";"
};";";"
}";"
};";"
}";
};"
}"
}
}"