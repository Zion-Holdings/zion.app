import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useNavigate, useLocation } from 'react-router-dom'; // Added for retry functionality and location
import { getEnqueueSnackbar } from '@/context/SnackbarContext';
import { logError } from '@/utils/logError';

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
  const location = useLocation(); // Get location information

  const handleError = (error: Error, info: React.ErrorInfo) => {
    console.error("GlobalErrorBoundary caught an error:", error, info);
    logError(error, { route: location.pathname, componentStack: info.componentStack });

    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      let displayMessage = error.message || "An unexpected error occurred.";
      if (error.message.includes("cannot read properties of null") || error.message.includes("cannot read property")) {
        displayMessage = "A critical component failed to initialize. This might be due to a configuration issue or network problem. Please try refreshing. If the problem persists, contact support.";
      } else if (error.message.includes("network error")) {
        displayMessage = "A network error occurred. Please check your internet connection and try again.";
      }
      enqueueSnackbar(displayMessage, { variant: 'error' });
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
