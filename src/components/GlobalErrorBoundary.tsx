import React, { useState } from 'react';
import Link from 'next/link';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { logInfo } from '@/utils/productionLogger';
import {logErrorToProduction} from '@/utils/productionLogger';
// Removed: import { useRouter } from 'next/router';
import { getEnqueueSnackbar } from '@/context/SnackbarContext';
import { sendErrorToBackend } from '@/utils/customErrorReporter';
import { getCapturedLogs } from '@/utils/consoleLogCapture';
import { generateTraceId } from '@/utils/generateTraceId';

// Fallback is defined inside GlobalErrorBoundary to access state

export default function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {

  const [traceId, setTraceId] = useState<string | null>(null);
  const [componentStack, setComponentStack] = useState<string | undefined>(undefined);

  const handleReportIssue = async (error: Error) => {
    const logs = getCapturedLogs().map(
      (l) => `[${l.timestamp}] [${l.level}] ${l.message}`
    );
    const id = traceId || generateTraceId();
    await sendErrorToBackend({
      message: error.message,
      stack: error.stack,
      componentStack,
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      timestamp: new Date().toISOString(),
      traceId: id,
      logs,
      source: 'GlobalErrorBoundaryReport',
    });
    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      enqueueSnackbar(`Issue reported. Reference ID: ${id}`, { variant: 'success' });
    } catch (err) {
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'Failed to show report confirmation' });
    }
  };

  function GlobalErrorFallback({ error }: FallbackProps) {
  // Removed: const router = useRouter();
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
        <button onClick={() => handleReportIssue(error)} className="text-blue-600 hover:underline">Report Issue</button>
      </div>
      {traceId && (
        <p className="text-xs text-muted-foreground mt-2">Reference ID: {traceId}</p>
      )}
    </div>
  );
}

  const handleError = (error: Error, info: React.ErrorInfo) => {
    logInfo("Detailed error info:", { name: error.name, message: error.message, stack: error.stack, componentStack: info.componentStack });
    logErrorToProduction(error.message, error, { 
      componentStack: info.componentStack || undefined,
      message: `GlobalErrorBoundary caught an error from component: ${info.componentStack ? info.componentStack.split('\n')[0]?.replace('    at ', '') || 'Unknown component' : 'Unknown component'}`
    });
    // Modified: logError call to not depend on location from react-router-dom
    // You might want to get pathname via window.location.pathname if this is purely client-side,
    // or pass it down as a prop if needed from a Next.js context.
    // For now, removing the route from this specific log call.
    // logError will also call sendErrorToBackend with source: 'logError'
    // The componentStack from React's ErrorInfo is passed to logErrorToProduction,
    // which then passes it to Sentry and to sendErrorToBackend.
    logErrorToProduction(error.message, error, {
      route: typeof window !== 'undefined' ? window.location.pathname : 'Unknown route (SSR/SSG)',
      componentStack: info.componentStack || undefined,
      // Add a clear source indicator for errors caught by GlobalErrorBoundary,
      // this will be part of the 'context' in logError.
      errorSourceContext: 'GlobalErrorBoundaryHandler'
    });
    const id = 'generated-trace-id'; // Replace with actual trace ID generation if needed
    setTraceId(id);
    setComponentStack(info.componentStack || undefined);

    // The direct call to sendErrorToBackend has been removed.
    // logError now handles sending the report to the custom backend.

    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      let displayMessage = "An unexpected error occurred. Our team has been notified."; // Default generic message

      // Check if the error object might be from an HTTP request (e.g., Axios error)
      // Axios errors often have a `response` object with a `status`.
      const httpStatus = (error as any)?.response?.status;

      if (httpStatus) {
        if (httpStatus === 404) {
          displayMessage = "A background request encountered an issue (Not Found). If you see this after a successful action, the action likely completed.";
        } else if (httpStatus >= 400 && httpStatus < 500) {
          displayMessage = `A background request failed (Error ${httpStatus}). If you see this after a successful action, the action likely completed.`;
        } else if (httpStatus >= 500) {
          displayMessage = `A server error occurred with a background request (Error ${httpStatus}). Our team is looking into it.`;
        }
        // For other HTTP statuses, the default generic message might be fine, or add more specific handling.
      } else if (error.message) {
        // Use the original error message if it's not an HTTP-like error with a status,
        // but still keep it relatively generic for the toast.
        // Specific messages for common client-side issues:
        if (error.message.includes("cannot read properties of null") || error.message.includes("cannot read property")) {
          displayMessage = "A critical component encountered an issue. Please try refreshing. If the problem persists, contact support.";
        } else if (error.message.includes("network error") || error.message.toLowerCase().includes("failed to fetch")) {
          displayMessage = "A network error occurred. Please check your internet connection and try again.";
        } else {
          // For other errors, provide a less alarming generic message.
          // Avoid showing raw error messages directly in toasts if they might be confusing.
          displayMessage = "An unexpected issue occurred. This has been logged.";
        }
      }

      enqueueSnackbar(displayMessage, {
        variant: 'error',
        // Prevent this generic error toast from persisting too long if it's a background issue
        autoHideDuration: 5000,
      });
    } catch (e) {
      logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { context: 'Error in enqueueSnackbar' });
      // noop if snackbar itself fails
    }
  };

  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
}
