import React from 'react';
import Link from 'next/link';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
// Removed: import { useNavigate, useLocation } from 'react-router-dom';
import { getEnqueueSnackbar } from '@/context/SnackbarContext';
import { logError } from '@/utils/logError';
// Removed sendErrorToBackend import as it's no longer directly used.

function GlobalErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  // Removed: const navigate = useNavigate();
  // Updated user-friendly messages
  const apologyMessage = "We apologize for the inconvenience.";
  const explanationMessage = "Our team has been notified and is working to fix the issue.";

  let customUserMessage = "";
  if (error?.message?.includes("Supabase URL or Anon Key is missing")) {
    customUserMessage = "Application Configuration Error: Essential settings for connecting to backend services are missing. Please contact support or, if you are a developer, check the deployment configuration for Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY).";
  }

  return (
    <div role="alert" className="p-6 m-4 border border-red-300 rounded-md bg-red-50 text-center space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Oops! Something went wrong.</h2>

      {customUserMessage ? (
        <p className="text-red-600">{customUserMessage}</p>
      ) : (
        <>
          <p className="text-red-600">{apologyMessage}</p>
          <p className="text-red-600">{explanationMessage}</p>
        </>
      )}

      {error?.message && (
        <details className="p-2 bg-red-100 rounded text-left text-sm">
          <summary className="cursor-pointer text-red-500 font-medium">Error Details</summary>
          <pre className="mt-2 text-red-500 whitespace-pre-wrap break-all">
            {error.message}
          </pre>
        </details>
      )}
      <button
        onClick={() => window.location.reload()} // Changed to refresh the page
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Reload {/* Changed button text */}
      </button>
      <div className="mt-4 space-x-4">
        <Link href="/status" className="text-blue-600 hover:underline">Status Page</Link>
        <a href="mailto:support@example.com" className="text-blue-600 hover:underline">Contact Support</a>
      </div>
    </div>
  );
}

export default function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  // Removed: const location = useLocation();

  const handleError = (error: Error, info: React.ErrorInfo) => {
    console.log("Detailed error info:", { name: error.name, message: error.message, stack: error.stack, componentStack: info.componentStack });
    console.error("GlobalErrorBoundary caught an error:", error, info);
    // Modified: logError call to not depend on location from react-router-dom
    // You might want to get pathname via window.location.pathname if this is purely client-side,
    // or pass it down as a prop if needed from a Next.js context.
    // For now, removing the route from this specific log call.
    // logError will also call sendErrorToBackend with source: 'logError'
    // The componentStack from React's ErrorInfo is passed to logError,
    // which then passes it to Sentry and to sendErrorToBackend.
    logError(error, {
      route: typeof window !== 'undefined' ? window.location.pathname : 'Unknown route (SSR/SSG)',
      componentStack: info.componentStack,
      // Add a clear source indicator for errors caught by GlobalErrorBoundary,
      // this will be part of the 'context' in logError.
      errorSourceContext: 'GlobalErrorBoundaryHandler'
    });

    // The direct call to sendErrorToBackend has been removed.
    // logError now handles sending the report to the custom backend.

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
