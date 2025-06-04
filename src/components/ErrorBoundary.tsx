import { Component, ReactNode, ErrorInfo } from 'react';
import { getEnqueueSnackbar } from '@/context/SnackbarContext';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface full error details in the console for easier debugging
    console.error('ErrorBoundary caught', error, info);
    const enqueueSnackbar = getEnqueueSnackbar();
    enqueueSnackbar(error.message, { variant: 'error' });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return <>{this.props.fallback}</>;
      return <div className="p-4 text-center">Something went wrong.</div>;
    }
    return this.props.children;
  }
}
