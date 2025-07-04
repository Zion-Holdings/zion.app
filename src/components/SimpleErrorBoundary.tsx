import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

export class SimpleErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('SimpleErrorBoundary caught an error:', error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} retry={this.retry} />;
      }

      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#fef2f2',
          color: '#dc2626'
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '2px solid #fecaca'
          }}>
            <h1 style={{ color: '#dc2626', marginBottom: '1rem' }}>
              ⚠️ Something went wrong
            </h1>
            
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#374151' }}>
              The app encountered an error while loading. This might be causing the blank screen issue.
            </p>
            
            {this.state.error && (
              <div style={{ 
                marginBottom: '2rem', 
                padding: '1rem', 
                backgroundColor: '#fef2f2', 
                borderRadius: '0.5rem',
                border: '1px solid #fecaca'
              }}>
                <h3 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>Error Details:</h3>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0, wordBreak: 'break-word' }}>
                  {this.state.error.message}
                </p>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={this.retry}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Try Again
              </button>
              
              <button 
                onClick={() => window.location.reload()}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Reload Page
              </button>
              
              <button 
                onClick={() => window.location.href = '/test'}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Test Page
              </button>
            </div>
            
            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>
                <strong>Timestamp:</strong> {new Date().toLocaleString()}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: '0.5rem 0 0 0' }}>
                <strong>Environment:</strong> {process.env.NODE_ENV || 'development'}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 