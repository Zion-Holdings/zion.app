/**
 * Safe Component Loader
 * 
 * This utility provides safe loading of components with comprehensive error handling
 * to prevent getInitialProps and other runtime errors.
 */

import React, { Component } from 'react';
import dynamic from 'next/dynamic';

// Error boundary for component loading
class ComponentErrorBoundary extends Component<
  { children: React.ReactNode; fallback?: React.ComponentType },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Component loading error:', error);
  }

  render() {
    if (this.state.hasError) {
      const Fallback = this.props.fallback || DefaultFallback;
      return React.createElement(Fallback);
    }

    return this.props.children;
  }
}

// Default fallback component
const DefaultFallback: React.FC = () => {
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

// Safe dynamic component loader
export function createSafeComponent(
  importPath: string,
  fallbackComponent?: React.ComponentType,
  options?: {
    loading?: React.ComponentType;
    ssr?: boolean;
  }
) {
  const SafeComponent = dynamic(
    () => {
      return import(importPath)
        .then(module => {
          // Ensure we have a valid component
          const Component = module.default || module;
          if (!Component || typeof Component !== 'function') {
            throw new Error(`Invalid component loaded from ${importPath}`);
          }
          
          // Wrap component to ensure it has proper structure
          const WrappedComponent: React.FC<any> = (props) => {
            try {
              return React.createElement(Component, props);
            } catch (error) {
              console.error(`Error rendering component from ${importPath}:`, error);
              const Fallback = fallbackComponent || DefaultFallback;
              return React.createElement(Fallback);
            }
          };
          
          // Ensure getInitialProps is safe
          if ((Component as any).getInitialProps) {
            (WrappedComponent as any).getInitialProps = async (ctx: any) => {
              try {
                return await (Component as any).getInitialProps(ctx);
              } catch (error) {
                console.error(`Error in getInitialProps for ${importPath}:`, error);
                return {};
              }
            };
          }
          
          return { default: WrappedComponent };
        })
        .catch(error => {
          console.error(`Failed to load component from ${importPath}:`, error);
          const Fallback = fallbackComponent || DefaultFallback;
          return { default: Fallback };
        });
    },
    {
      loading: options?.loading || (() => React.createElement('div', {
        style: { 
          padding: '2rem', 
          textAlign: 'center',
          color: '#6c757d'
        }
      }, 'Loading...')) as any,
      ssr: options?.ssr ?? false
    }
  );

  // Return component wrapped in error boundary
  const BoundedComponent: React.FC<any> = (props) => {
    return React.createElement(
      ComponentErrorBoundary,
      { fallback: fallbackComponent },
      React.createElement(SafeComponent, props)
    );
  };

  return BoundedComponent;
}

// Pre-configured safe components for common pages
export const SafeWalletComponent = createSafeComponent('../pages/Wallet');
export const SafeWishlistComponent = createSafeComponent('../pages/Wishlist');
export const SafeTeamComponent = createSafeComponent('../pages/OrgChart');
export const SafeTalentsComponent = createSafeComponent('../pages/TalentsPage');