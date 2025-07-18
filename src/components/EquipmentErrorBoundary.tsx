import React from 'react''
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface Props {'
  children: "React.ReactNode
};

interface State {;
  hasError: boolean;
  error?: Error;
}"
;"
export class EquipmentErrorBoundary extends React.Component<Props, State> {;";"
  constructor(props: Props) {;";"
    super(props);";"
    this.state = { hasError: false "}";
  };""
;""
  static getDerivedStateFromError(error: Error): State {;"";
    return { hasError: true", error }";
  };"";
;""
  override componentDidCatch(error: "Error, errorInfo: React.ErrorInfo) {;"";
    logErrorToProduction('Equipment page error:', error, {'
      componentStack: "errorInfo.componentStack",
    });
  }
;""
  override render() {;"
    if (this.state.hasError) {";"
      return (";""
        <div className=container py-8>"
          <h2>Something went wrong.</h2>;
          <p>;
            Please try refreshing the page or contact support if the problem;
            persists.;
          </p>;
        </div>);
    }"
    return this.props.children;
  };"";
};"";
""""