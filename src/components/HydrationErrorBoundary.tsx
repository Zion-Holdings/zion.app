import React, { ErrorInfo, ReactNode } from 'react';
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';


interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class HydrationErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if this is a hydration error
    const isHydrationError = 
      error.message?.includes('hydrat') ||
      error.message?.includes('client') ||
      error.message?.includes('server') ||
      error.message?.includes('mismatch');

    if (isHydrationError) {
      logWarn('[HydrationErrorBoundary] Hydration mismatch detected, forcing client-side render');
    }

    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logErrorToProduction('[HydrationErrorBoundary] Caught error:', error, { componentStack: errorInfo.componentStack });
    
    // If it's a hydration error, try to recover by forcing a client-side render
    if (this.state.error?.message?.includes('hydrat')) {
      setTimeout(() => {
        this.setState({ hasError: false, error: undefined });
      }, 100);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-zion-blue">
          <div className="text-center max-w-md p-6">
            <div className="text-white text-xl mb-4">🔄 Loading Zion App</div>
            <div className="animate-pulse text-zion-cyan">
              Initializing secure connection...
            </div>
            <div className="mt-4 text-zion-slate-light text-sm">
              If this persists, please refresh the page
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 