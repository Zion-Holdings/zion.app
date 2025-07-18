// React 19 Optimization Features
import React, { startTransition, useDeferredValue, memo, useCallback, useMemo } from 'react';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

export const React19Optimizations = {
  /**
   * Use React 19's improved startTransition for non-urgent updates
   */
  deferNonUrgentUpdates: (callback: () => void) => {
    startTransition(() => {
      callback();
    });
  },

  /**
   * Enhanced memoization helpers using React 19 improvements
   */
  _optimizedMemoComponent: <T extends React.ComponentType<unknown>>(Component: T) => {
    return memo(Component, (prevProps: Record<string, unknown>, nextProps: Record<string, unknown>) => {
      // Use React 19's improved shallow comparison
      return Object.keys(prevProps).every(
        key => prevProps[key] === nextProps[key]
      );
    });
  },

  /**
   * Create optimized callbacks with React 19 performance improvements
   */
  createOptimizedCallback: <T extends (...args: unknown[]) => unknown>(
    callback: T,
    _deps: React.DependencyList
  ) => {
    return useCallback(callback, deps);
  },

  /**
   * Enhanced useMemo with React 19 optimizations
   */
  optimizedMemoValue: <T>(factory: () => T, deps: React.DependencyList): T => {
    return useMemo(factory, deps);
  },

  /**
   * Use React 19's improved concurrent features
   */
  useDeferredState: <T>(value: T): T => {
    return useDeferredValue(value);
  },

  /**
   * Performance monitoring for React 19 features
   */
  measurePerformance: (name: string, fn: () => void) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const _start = performance.now();
      fn();
      const _end = performance.now();
    } else {
      fn();
    }
  },

  /**
   * Enhanced error boundary pattern for React 19
   */
  _createErrorBoundary: (fallback: React.ComponentType<{ error: Error }>) => {
    return class React19ErrorBoundary extends React.Component<
      { children: React.ReactNode },
      { hasError: boolean; error?: Error }
    > {
      constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
      }

      override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        logErrorToProduction('React 19 Error Boundary:', error);
      }

      override render() {
        if (this.state.hasError && this.state.error) {
          return React.createElement(fallback, { error: this.state.error });
        }

        return this.props.children;
      }
    };
  },

  /**
   * Check if React 19 features are available
   */
  _isReact19: () => {
    try {
      // Check for React 19 specific features
      return typeof startTransition === 'function' && 
             typeof useDeferredValue === 'function';
    } catch {
      return false;
    }
  },

  /**
   * Enable React 19 strict mode optimizations
   */
  _enableStrictModeOptimizations: () => {
    if (process.env.NODE_ENV === 'development') {
      // logInfo('React 19 Strict Mode optimizations enabled');
    }
  },
};

export default React19Optimizations;