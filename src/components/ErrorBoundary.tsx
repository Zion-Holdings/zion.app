import React from 'react';
import { toast } from 'react-hot-toast';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    toast.error(error.message || 'An unexpected error occurred');
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}
