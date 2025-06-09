import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import CustomErrorPage from '../../pages/_error'; // Import the custom error page
import { logError } from '@/utils/logError'; // Assuming this utility exists and is appropriate

// Define the props for the CustomErrorFallback
interface CustomErrorFallbackProps extends FallbackProps {
  // You can add any additional props here if needed in the future
}

// This is the fallback component that will be rendered on error
const CustomErrorFallback: React.FC<CustomErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  // 'error' and 'resetErrorBoundary' are passed by react-error-boundary
  // We render our custom error page, passing necessary props if CustomErrorPage expects any
  // For now, CustomErrorPage uses getInitialProps for status code, which is more for SSR.
  // For a purely client-side boundary, statusCode might not be directly available or relevant in the same way.
  // We can pass the error object if CustomErrorPage is adapted to use it.
  return <CustomErrorPage />;
};

// Define the props for CustomErrorBoundary
interface CustomErrorBoundaryProps {
  children: React.ReactNode;
}

const CustomErrorBoundary: React.FC<CustomErrorBoundaryProps> = ({ children }) => {
  const handleError = (error: Error, info: React.ErrorInfo) => {
    // Log the error using an existing utility or a new one
    // The existing logError function might need adjustment if it expects specific parameters
    console.error("CustomErrorBoundary caught an error:", error, info);
    const errorId = Date.now().toString(36) + Math.random().toString(36).substring(2);
    // Example: logError(error, { componentStack: info.componentStack, route: window.location.pathname });
    // Ensure logError is called in a way that matches its signature and your logging strategy
    logError(error, {
      componentStack: info.componentStack,
      route: typeof window !== 'undefined' ? window.location.pathname : 'Unknown',
      errorId: errorId
    });
  };

  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorFallback}
      onError={handleError}
      // onReset is optional, can be used to reset application state
      // For example: onReset={() => { /* reset state here */ }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
