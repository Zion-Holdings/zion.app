import React from 'react';
import Head from 'next/head';

// Placeholder for Zion Tech Logo - replace with actual logo component or URL
const ZionTechLogo = () => (
  // In Next.js, files inside the `public` folder are served from the root path
  // so the correct URL does not include the `public` prefix.
  <img
    src="/logos/zion-logo.png"
    alt="Zion Tech Logo"
    style={{ height: '50px', marginBottom: '20px' }}
  />
);

// Placeholder for status page URL and support email - replace with actual values
const STATUS_PAGE_URL = 'https://status.ziontech.com'; // Example URL
const SUPPORT_EMAIL = 'support@ziontech.com'; // Example email

const CustomErrorPage = ({ statusCode }: { statusCode?: number }) => {
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <>
      <Head>
        <title>Error - Zion Tech</title>
      </Head>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f0f2f5' // A light background color
      }}>
        <ZionTechLogo />
        <h1 style={{ fontSize: '2em', color: '#333', marginBottom: '0.5em' }}>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'Oops! Something went wrong.'}
        </h1>
        <p style={{ fontSize: '1.2em', color: '#555', marginBottom: '1.5em' }}>
          We apologize for the inconvenience. Our team has been notified.
        </p>
        <button
          onClick={handleReload}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            color: 'white',
            backgroundColor: '#007bff', // A primary button color
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '1em',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Reload Page
        </button>
        <div style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
          <p>If the problem persists, please check our <a href={STATUS_PAGE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'underline' }}>status page</a>.</p>
          <p>You can also contact our support team at <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#007bff', textDecoration: 'underline' }}>{SUPPORT_EMAIL}</a>.</p>
        </div>
      </div>
    </>
  );
};

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
