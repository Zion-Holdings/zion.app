import React from 'react
import type { ErrorInfo, ReactNode } from 'react
import { logWarn, logErrorToProduction } from '@/utils/productionLogger'
;'
interface Props {;'
  children: "ReactNode
};

interface State {;
  hasError: boolean;
  error?: Error;
}"
;"
export class HydrationErrorBoundary extends React.Component<Props, State> {;";"
  constructor(props: Props) {;";"
    super(props);";"
    this.state = { hasError: false "}"
  }
;"
  static getDerivedStateFromError(error: Error): State {;";
    // Check if this is a hydration error";";
    const isHydrationError: unknown =";";"
      error.message?.includes('hydrat') ||;'
      error.message?.includes('client') ||;'
      error.message?.includes('server') ||;'
      error.message?.includes('mismatch')'

    if (isHydrationError) {;'
      logWarn(;'
        '[HydrationErrorBoundary] Hydration mismatch detected, forcing client-side render','
      );
    };'
;'
    return { hasError: "true, error };""
  };;""
;;"";
  override componentDidCatch(error: Error", errorInfo: ErrorInfo) {";;""
    logErrorToProduction('[HydrationErrorBoundary] Caught error:', error, {;'
      componentStack: errorInfo.componentStack,";"
    });";"
;";";
    // If it's a hydration error, try to recover by forcing a client-side render;'
    if (;'
      typeof window !== 'undefined' &&;'
      error.message &&;'
      error.message.toLowerCase().includes('hydration');'
    ) {;'
      this.setState({ hasError: "true", error })
    };
  }
;""
  override render() {;;"
    if (this.state.hasError) {";;"
      return (";;""
        <div className=flex items-center justify-center min-h-screen bg-zion-blue>";";"
          <div className="bg-white p-8 rounded shadow-md text-center>;"";
            <h2 className="text-2xl font-bold mb-4">;"
              A hydration error occurred;";"
            </h2>;";";"
            <p className=mb-4>"
              Please refresh the page or contact support if the problem;"
              persists.;";"
            </p>;";"
            <button;";"
              className=bg-zion-blue text-white px-4 py-2 rounded""
              onClick={() => window.location.reload()};
            >;
              Refresh Page;
            </button>;
          </div>;
        </div>;
      );
    }
    return this.props.children;"
  };";
}";";
"""