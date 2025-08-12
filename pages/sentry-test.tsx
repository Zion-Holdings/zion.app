// pages/sentry-test.tsx
import React from 'react';
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger';


const SentryTestPage = () => {
  const handleClientError = () => {
    try {
      throw new Error('Sentry Client Test Error - Button Clicked!');
    } catch (error) {
      Sentry.captureException(error);
      alert('Client-side error thrown and captured by Sentry. Check your Sentry dashboard (or console for DSN issues).');
    }
  };

  const handleServerError = async () => {
    try {
      // This simulates an API call to a serverless function that might throw an error
      // For a true server-side error test from the page load, getStaticProps/getServerSideProps would be used.
      // This example focuses on an error captured via an interaction.
      await fetch('/api/sentry-test-error-api'); // This API route needs to be created
      alert('Server-side API error trigger attempted. Check your Sentry dashboard (or console for DSN issues).');
    } catch (error) {
      // This catch is for the fetch failing, not Sentry capturing the API's error directly here.
      // Sentry should capture it on the API route side.
      Sentry.captureException(error);
      alert('Error trying to trigger server-side API error. Check your Sentry dashboard or console.');
    }
  };


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sentry Integration Test Page</h1>
      <p>
        This page is for testing the Sentry error reporting setup.
        If Sentry is configured correctly (including valid DSNs in environment variables),
        clicking these buttons should result in errors being sent to your Sentry dashboard.
      </p>
      <button
        onClick={handleClientError}
        style={{ padding: '10px', marginRight: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Throw Client-Side Error
      </button>
      <button
        onClick={handleServerError}
        style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Trigger Server-Side API Error
      </button>
      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#555' }}>
        <strong>Note:</strong> For this test to be fully effective, ensure that
        `NEXT_PUBLIC_SENTRY_DSN` (for client-side) and `SENTRY_DSN` (for server-side/API)
        are set in your environment variables (e.g., in an `.env.local` file for local development).
        Without valid DSNs, Sentry will initialize but will not be able to send events.
        Check your browser console and server logs for any Sentry-related messages.
      </p>
    </div>
  );
};

// import { withSentryGetServerSideProps } from '@sentry/nextjs'; // Removed

// Example of how to trigger a server-side error during page load (SSR)
export const getServerSideProps = async (context: any) => { // Added type for context for clarity
  // The context object is passed here by Next.js and Sentry's HOC
  // You can add custom Sentry tags or breadcrumbs related to this specific SSR execution if needed
  Sentry.addBreadcrumb({
    category: 'testing',
    message: 'getServerSideProps in sentry-test.tsx was called',
    level: 'info',
  });

  try {
    // Simulate an error occurring during server-side rendering
    throw new Error("Sentry Server-Side Test Error - getServerSideProps from sentry-test.tsx");
  } catch (error) {
    // withSentryGetServerSideProps will automatically capture this error.
    // You could re-throw it if you want to ensure Next.js's default error handling also kicks in,
    // or handle it gracefully by returning props for an error display.
    // For testing, we want Sentry to capture it. Re-throwing is a common pattern.
    // However, since this is a test page, we might just log and return empty props
    // or props indicating an error occurred for the page to display.
    logErrorToProduction('Simulated error in getServerSideProps for sentry-test.tsx:', { data: error });
    Sentry.captureException(error); // Manually capture exception

    // Optionally, set status code on response if available in context
    if (context.res) {
      context.res.statusCode = 500;
    }
    // Return props, perhaps indicating an error state to the component
    return { props: { serverSideErrorOccurred: true } };
  }
  // This line would not be reached if an error is thrown and not caught locally,
  // but if the error is caught and handled (e.g., by returning error props),
  // then you might return normal props here in a non-error scenario.
  // return { props: { serverSideErrorOccurred: false } };
};

export default SentryTestPage;
