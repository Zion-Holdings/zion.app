import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { getEnqueueSnackbar } from '@/context/SnackbarContext'; // Assuming this path is correct

function GlobalErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  let specificMessage = "Something went wrong. Please try refreshing the page.";
  const errorMessage = error?.message?.toLowerCase() || "";

  // Check for keywords related to common routing or context issues
  if (
    errorMessage.includes("nextrouter was not mounted") ||
    errorMessage.includes("router context") ||
    errorMessage.includes("could not find router") // Add other relevant keywords if known
  ) {
    specificMessage = "It looks like there's an issue with loading this page's content or navigation setup. Please try refreshing. If the problem continues, please contact support.";
  }

  return (
    <div role="alert" className="p-6 m-4 border border-red-300 rounded-md bg-red-50 text-center space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Oops! Page Load Error</h2>
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
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Try Again
      </button>
    </div>
  );
}

export default function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  const handleError = (error: Error, info: React.ErrorInfo) => { // Added info parameter
    console.error("GlobalErrorBoundary caught an error:", error, info); // Log the error and component stack
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
