import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react';

import {logErrorToProduction} from '@/utils/productionLogger';


interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: unknown) {
    // Only pass errorInfo if it's an object
    if (typeof errorInfo === 'object' && errorInfo !== null) {
      logErrorToProduction('ErrorBoundary caught an error:', error, errorInfo as Record<string, unknown>);
    } else {
      logErrorToProduction('ErrorBoundary caught an error:', error);
    }
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="container py-8">
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
