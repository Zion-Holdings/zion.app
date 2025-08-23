import React from 'react';
import { useRouter } from 'next/router';
import Home from '@/pages/Home';
import type { GetStaticProps } from 'next';
import * as Sentry from '@sentry/nextjs';
import { ErrorBanner } from '@/components/talent/ErrorBanner';

export interface HomePageProps {
  hasError?: boolean;
  errorMessage?: string;
  timestamp?: number; // Add timestamp for cache busting
}

// Check if Sentry is likely initialized (basic check, mirrors sentry.server.config.js)
const sentryDsnAvailable = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const isSentryActive = sentryDsnAvailable && !sentryDsnAvailable.startsWith('YOUR_');

export async function fetchHomeData() {
  // Placeholder async function. Real implementation would fetch data.
  return Promise.resolve(null);
}

// Use getStaticProps instead of getServerSideProps for better reliability and caching
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    await fetchHomeData();
    return { 
      props: {
        timestamp: Date.now()
      },
      // Revalidate every 5 minutes in production for fresh content
      revalidate: 300
    };
  } catch (error) {
    console.error('Error in getStaticProps for home page:', error);
    
    // Log to Sentry if available, but don't block the page
    if (isSentryActive) {
      try {
        Sentry.captureException(error);
      } catch (sentryError) {
        console.warn('Failed to log to Sentry:', sentryError);
      }
    }
    
    // Return fallback props instead of crashing
    return {
      props: {
        hasError: false, // Don't show error on home page, show fallback content
        timestamp: Date.now()
      },
      revalidate: 60 // Retry more frequently if there was an error
    };
  }
};

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
