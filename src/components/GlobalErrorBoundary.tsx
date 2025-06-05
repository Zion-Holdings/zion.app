import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom'; // Added for retry functionality
import { getEnqueueSnackbar } from '@/context/SnackbarContext';
import { captureException } from '@/utils/sentry'; // Added for Sentry integration

function GlobalErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate(); // Added for retry functionality
  let specificMessage = "Please try again. If the problem continues, please contact support."; // Updated message
  const errorMessage = error?.message?.toLowerCase() || "";

  if (
    errorMessage.includes("nextrouter was not mounted") ||
    errorMessage.includes("router context") ||
    errorMessage.includes("could not find router")
  ) {
    specificMessage = "It looks like there's an issue with loading this page's content or navigation setup. " + specificMessage;
  }

  return (
    <div role="alert" className="p-6 m-4 border border-red-300 rounded-md bg-red-50 text-center space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Oops! Something went wrong.</h2> {/* Updated title */}
      <p className="text-red-600">{specificMessage}</p>
      {error?.message && (
        <details className="p-2 bg-red-100 rounded text-left text-sm">
          <summary className="cursor-pointer text-red-500 font-medium">Error Details</summary>
          <pre className="mt-2 text-red-500 whitespace-pre-wrap break-all">
            {error.message}
          </pre>
        </details>
      )}
      <button
        onClick={() => navigate(0)} // Changed to navigate(0)
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Retry {/* Changed button text */}
      </button>
    </div>
  );
}

export default function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  const handleError = (error: Error, info: React.ErrorInfo) => {
    console.error("GlobalErrorBoundary caught an error:", error, info);

    // Report to Sentry if DSN is configured
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      captureException(error); // Added Sentry call
    }

    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(error.message || "An unexpected error occurred.", { variant: 'error' });
    } catch (e) {
      console.error("Error in enqueueSnackbar:", e);
      // noop if snackbar itself fails
    }
  };

  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
