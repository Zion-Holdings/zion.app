import React from 'react';
import { AppLayout } from '@/layout/AppLayout';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <AppLayout>
          <div className="container py-8">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <pre className="whitespace-pre-wrap text-red-500">
              {this.state.error?.message}
            </pre>
          </div>
        </AppLayout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
