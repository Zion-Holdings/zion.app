import React from 'react';
import Home from '@/pages/Home';
import type { GetServerSideProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ErrorBanner } from '@/components/talent/ErrorBanner';

export interface HomePageProps {
  hasError?: boolean;
  errorMessage?: string; // For better debugging if needed
}

// Check if Sentry is likely initialized (basic check, mirrors sentry.server.config.js)
const sentryDsnAvailable = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const isSentryActive = sentryDsnAvailable && !sentryDsnAvailable.startsWith('YOUR_');

export async function fetchHomeData() {
  // Placeholder async function. Real implementation would fetch data.
  return Promise.resolve(null);
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  ctx
) => {
  if (isSentryActive) {
    Sentry.addBreadcrumb({ category: 'route', message: '/', level: 'info' });
  }
  try {
    if (ctx.query.forceError) {
      throw new Error('Forced error for testing');
    }
    await fetchHomeData();
    return { props: {} };
  } catch (error: any) {
    console.error("Error in getServerSideProps for /:", error); // Log the original error
    if (isSentryActive) {
      Sentry.captureException(error);
    }
    ctx.res.statusCode = 500;
    return { props: { hasError: true, errorMessage: error.message || 'An unexpected error occurred.' } };
  }
};

const IndexPage: React.FC<HomePageProps> = (props) => {
  return (
    <>
      {props.hasError && (
        <div className="container mx-auto px-4 py-4">
          <ErrorBanner msg={props.errorMessage || "Failed to load home page."} />
        </div>
      )}
      <Home />
    </>
  );
};

export default IndexPage;
