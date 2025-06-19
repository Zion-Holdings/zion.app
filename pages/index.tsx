import React from 'react';
import { useRouter } from 'next/router';
import Home from '@/pages/Home';
import type { GetServerSideProps } from 'next';
import * as Sentry from '@sentry/nextjs';
// import { withSentryGetServerSideProps } from '@sentry/nextjs'; // Removed
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

import { withServerSideErrorHandling } from '@/utils/withErrorHandling';

const getServerSidePropsImpl: GetServerSideProps<HomePageProps> = async (ctx: any) => {
  await fetchHomeData();
  return { props: {} };
};

export const getServerSideProps = withServerSideErrorHandling(getServerSidePropsImpl);

const ErrorTestButton = () => {
  const handleClick = () => {
    try {
      throw new Error("This is a test error from the homepage button!");
    } catch (error) {
      if (isSentryActive) {
        Sentry.captureException(error);
      }
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000
      }}
    >
      Throw Test Error
    </button>
  );
};

const IndexPage: React.FC<HomePageProps> = (props) => {
  const router = useRouter();
  const showDebug = router.query.debug === 'true';
  const showButton = process.env.NODE_ENV === 'development' || showDebug;

  return (
    <>
      {props.hasError && (
        <div className="container mx-auto px-4 py-4">
          <ErrorBanner msg={props.errorMessage || "Failed to load home page."} />
        </div>
      )}
      <Home />
      {showButton && <ErrorTestButton />}
    </>
  );
};

export default IndexPage;
