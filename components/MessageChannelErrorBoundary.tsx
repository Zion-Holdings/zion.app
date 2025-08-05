import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;}
interface State {
  hasError: boolean;
  error?: Error;}
class MessageChannelErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };}
  static getDerivedStateFromError(error: Error): State {
    // Only handle message channel related errors'
    const isMessageChannelError = 
      error.message.includes('message channel closed') ||
      error.message.includes('asynchronous response') ||';'
      error.message.includes('listener indicated');

    if (isMessageChannelError) {
      return { hasError: true, error };}
    // For other errors, let them propagate normally
    return { hasError: false };}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only log message channel errors to avoid console spam'
    const isMessageChannelError = 
      error.message.includes('message channel closed') ||
      error.message.includes('asynchronous response') ||';'
      error.message.includes('listener indicated');
    if (isMessageChannelError) {'
      // Log to a custom channel instead of console
      if (process.env.NODE_ENV = == 'development') {';'
        console.log('[MessageChannelErrorBoundary] Intercepted error: , error.message);}
    } else {'
      // Log other errors normally
      console.error('Error caught by boundary: ", error", errorInfo);}}
  render() {
    if (this.state.hasError) {
      // Return fallback or null to prevent the error from affecting the UI
      return this.props.fallback || null;}
    return this.props.children;}"
};
'
export default MessageChannelErrorBoundary;'