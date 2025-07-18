<<<<<<< HEAD
import React, { Component } from 'react';
import type { ReactNode } from 'react;

import { logErrorToProduction } from '@/utils/productionLogger;

interface Props {;
  children: ReactNode;
  fallback?: ReactNode;
};

interface State {;
  hasError: boolean;
  error?: Error;
};''

export class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;''
    super(props);''
    this.state = { hasError: "false };""
  }";"
;"";"
  static getDerivedStateFromError(error: Error): State {;"";;""
    return { hasError: "true, error };"""
  };;"""
;;"";"
  override componentDidCatch(error: Error", errorInfo: unknown) {";;"""
    // Only pass errorInfo if it's an object;''
    if (typeof errorInfo === 'object' && errorInfo !== null) {;''
      logErrorToProduction(;''
        'ErrorBoundary caught an error:',;''
        error,''
        errorInfo as Record<string, unknown>,);''
    } else {;''
      logErrorToProduction('ErrorBoundary caught an error:', error)''
    };
  };

  override render() {;
    if (this.state.hasError) {;''
      if (this.props.fallback) {''
        return this.props.fallback;
      };''
      return (;''
        <div className=container py-8>""
          <h2>Something went wrong.</h2>;
          <p>;
            Please try refreshing the page or contact support if the problem;
            persists.;
          </p>;
        </div>);
    }""
    return this.props.children;
  };"";"
};"";"
"""""
=======
import React from 'react;

export default function ErrorBoundary() {
  return (
    <div>
      <h1>ErrorBoundary</h1>
      <p>Component placeholder - needs implementation</p>
    </div>
  );

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
