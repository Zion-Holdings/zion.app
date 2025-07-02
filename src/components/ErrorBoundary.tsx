import React, { Component, ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react';

import {logErrorToProduction} from '@/utils/productionLogger';


interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    logErrorToProduction('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{ border: '5px solid red', padding: '20px', textAlign: 'center', backgroundColor: 'lightyellow' }}>
          <h1>CUSTOM ERROR BOUNDARY (ErrorBoundary.tsx) TRIGGERED!</h1>
          <p>If you see this, the page component crashed.</p>
          {this.state.error && <pre>{this.state.error.message}</pre>}
          <button onClick={() => window.location.reload()}>Refresh Page</button>
          <button onClick={() => window.location.href = '/'}>Go Home</button>
        </div>
      );
    }

    return this.props.children;
  }
}
