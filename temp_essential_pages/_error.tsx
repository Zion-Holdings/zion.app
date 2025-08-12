import React from 'react';
import type { NextPageContext } from 'next/types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';

interface ErrorProps {
  statusCode: number;
  hasGetInitialPropsRun?: boolean;
  err?: any;
}

function ErrorPage({ statusCode, hasGetInitialPropsRun, err }: ErrorProps) {
  const router = useRouter();

  React.useEffect(() => {
    // If this is a 404 on the root path, try to redirect to home
    if (statusCode === 404 && (router.asPath === '/' || router.asPath === '')) {
      console.warn('Root path 404 detected, attempting recovery...');
      
      // Clear any potential cache issues
      if (typeof window !== 'undefined') {
        // Force reload to clear any cached state
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }
    }
  }, [statusCode, router.asPath]);

  // Special handling for root path 404s
  if (statusCode === 404 && (router.asPath === '/' || router.asPath === '')) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-white mb-4">🏠</h1>
            <h2 className="text-2xl font-bold text-white mb-2">Temporary Route Issue</h2>
            <p className="text-slate-300 mb-6">
              We're experiencing a temporary routing issue. Redirecting you to the home page...
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Go to Home Page
            </Link>
            
            <div className="text-sm text-slate-400">
              <p>If this issue persists, please try:</p>
              <ul className="mt-2 space-y-1">
                <li>• Refreshing the page</li>
                <li>• Clearing your browser cache</li>
                <li>• Trying again in a few minutes</li>
              </ul>
            </div>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-slate-800 rounded-lg text-left">
              <h3 className="text-yellow-400 font-medium mb-2">Debug Info:</h3>
              <pre className="text-xs text-slate-300 overflow-x-auto">
                {JSON.stringify({
                  statusCode,
                  path: router.asPath,
                  query: router.query,
                  timestamp: new Date().toISOString()
                }, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Standard error page for non-root-path errors
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            {statusCode === 404 ? '404' : statusCode || 'Error'}
          </h1>
          <h2 className="text-2xl font-bold text-white mb-2">
            {statusCode === 404 
              ? 'Page Not Found' 
              : statusCode 
                ? `Server Error ${statusCode}`
                : 'Application Error'
            }
          </h2>
          <p className="text-slate-300 mb-6">
            {statusCode === 404
              ? "The page you're looking for doesn't exist."
              : statusCode
                ? "A server error occurred while processing your request."
                : "An unexpected error occurred in the application."
            }
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go to Home Page
          </Link>
          
          <button
            onClick={() => router.back()}
            className="block w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && err && (
          <div className="mt-8 p-4 bg-slate-800 rounded-lg text-left">
            <h3 className="text-red-400 font-medium mb-2">Error Details:</h3>
            <pre className="text-xs text-slate-300 overflow-x-auto">
              {err.stack || err.message || 'No error details available'}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = async (context: NextPageContext) => {
  const { res, err } = context;
  const statusCode = res?.statusCode || err?.statusCode || 404;

  // Don't log 404s for static assets or favicon
  const isStaticAsset = context.asPath?.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/);
  const isFavicon = context.asPath === '/favicon.ico';
  
  if (!isStaticAsset && !isFavicon) {
    // Log the error to Sentry for non-static assets
    if (err && typeof window === 'undefined') {
      // Server-side error
      Sentry.withScope((scope) => {
        scope.setTag('errorType', 'server');
        scope.setTag('statusCode', statusCode);
        scope.setTag('path', context.asPath);
        scope.setLevel(statusCode === 404 ? 'warning' : 'error');
        scope.setContext('errorPage', {
          statusCode,
          path: context.asPath,
          query: context.query,
          userAgent: context.req?.headers['user-agent']
        });
        Sentry.captureException(err);
      });
    } else if (err) {
      // Client-side error
      Sentry.withScope((scope) => {
        scope.setTag('errorType', 'client');
        scope.setTag('statusCode', statusCode);
        scope.setTag('path', context.asPath);
        scope.setLevel(statusCode === 404 ? 'warning' : 'error');
        Sentry.captureException(err);
      });
    }

    // Special logging for root path 404s
    if (statusCode === 404 && (context.asPath === '/' || context.asPath === '')) {
      console.warn('ROOT PATH 404 DETECTED:', {
        statusCode,
        asPath: context.asPath,
        pathname: context.pathname,
        query: context.query,
        userAgent: context.req?.headers['user-agent'],
        timestamp: new Date().toISOString()
      });
      
      Sentry.withScope((scope) => {
        scope.setTag('rootPath404', true);
        scope.setLevel('error');
        scope.setContext('rootPathError', {
          asPath: context.asPath,
          pathname: context.pathname,
          query: context.query,
          userAgent: context.req?.headers['user-agent']
        });
        Sentry.captureMessage('Root path returned 404', 'error');
      });
    }
  }

  return {
    statusCode,
    hasGetInitialPropsRun: true
  };
};

export default ErrorPage;
