import React, { Component, ReactNode } from 'react';
import { toast } from 'react-hot-toast';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
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
