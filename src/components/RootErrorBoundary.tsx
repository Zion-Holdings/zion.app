<<<<<<< HEAD
import React, { useState } from 'react''
import { ErrorBoundary } from 'react-error-boundary'
import type { FallbackProps } from 'react-error-boundary'
import { logErrorToProduction } from '@/utils/productionLogger'
=======
import React, { useState } from 'react''';
import { ErrorBoundary } from 'react-error-boundary;'';
import type { FallbackProps } from 'react-error-boundary;'';
import { logErrorToProduction } from '@/utils/productionLogger'';
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

interface RootFallbackProps extends FallbackProps {;
  traceId?: string | null;
};
;
function RootFallback(): unknown {): unknown {): unknown {): unknown {): unknown {{;
<<<<<<< HEAD
  error,'
  resetErrorBoundary,'
  traceId,;
}: RootFallbackProps) {'
  return ('
    <div role="alert className=p-6 text-center space-y-4">"
      <div>";""
        <h2 className=text-lg font-semibold>Something went wrong</h2>"
        <p className="text-sm text-gray-600>"
          Please try again. If the problem persists contact support.;""
        </p>;"
      </div>";"
      {traceId && (";""
        <p className=text-xs text-gray-500 data-testid="trace-id">;"
          Trace ID: {traceId"}"
        </p>;
      )};"";
      <button;"";
        onClick={resetErrorBoundary};"";
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded";
      >";"
        Retry;";"
      </button>;";";
      {process.env.NODE_ENV === 'development' && error && ('
        <pre className="mt-4 text-left text-xs whitespace-pre-wrap overflow-x-auto">
=======
  error,;''
  resetErrorBoundary,''
  traceId,;
}: RootFallbackProps) {;''
  return (;''
    <div role="alert className=p-6 text-center space-y-4">";;""
      <div>";;"""
        <h2 className=text-lg font-semibold>Something went wrong</h2>";";""
        <p className="text-sm text-gray-600>"
          Please try again. If the problem persists contact support.;"""
        </p>;;""
      </div>";;""
      {traceId && (";;"""
        <p className=text-xs text-gray-500 data-testid="trace-id">;";""
          Trace ID: {traceId"}""
        </p>;
      )};"";"
      <button;"";"
        onClick={resetErrorBoundary};"";"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded";"
      >";""
        Retry;";""
      </button>;";";"
      {process.env.NODE_ENV === 'development' && error && (;''
        <pre className="mt-4 text-left text-xs whitespace-pre-wrap overflow-x-auto">"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
          {error.stack || error.message};
        </pre>)};
    </div>;
  );
}
<<<<<<< HEAD
;""
export default function RootErrorBoundary(): unknown {): unknown {): unknown {): unknown {): unknown {{;"
  children,";"
}: {";""
  children: React.ReactNode"
=======
;""";
export default function RootErrorBoundary(): unknown {): unknown {): unknown {): unknown {): unknown {{;;""
  children,";;""
}: {";;"""
  children: React.ReactNode""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}) {;
  const [traceId, setTraceId] = useState<string | null>(null);

  return (;
    <ErrorBoundary;
      fallbackRender={(props) => <RootFallback {...props} traceId={traceId} />}""
      onError={(error, info) => {;
<<<<<<< HEAD
        logErrorToProduction(;"";
          error instanceof Error ? error.message : String(error),;"";
          error instanceof Error ? error : undefined,;"";
          { type: 'UI Error', componentStack: "info.componentStack "},;"
        );";"
        const id: unknown =;"
          'trace-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)'
=======
        logErrorToProduction(;"";"
          error instanceof Error ? error.message : String(error),;"";"
          error instanceof Error ? error : undefined,;"";"
          { type: 'UI Error', componentStack: "info.componentStack "},;""
        );";""
        const id: unknown =;";";""
          'trace-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        setTraceId(id);
      }};
    >;
      <React.Suspense fallback={<div>Loading...</div>}>;
        {children};
<<<<<<< HEAD
      </React.Suspense>'
    </ErrorBoundary>'
=======
      </React.Suspense>;''
    </ErrorBoundary>''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  );
};

};
<<<<<<< HEAD
}'
}'
}
}'
}'
=======
};''
}''
}
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''