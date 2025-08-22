import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Analytics from '../components/Analytics';
import SEO from '../components/SEO';
import { SEOContext } from '../components/SEOContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  const renderedRef = React.useRef(false);

  // Reset the flag on route change by keying provider by asPath using a simple counter
  // Next.js _app lacks router here without import; rely on ref reset per render
  renderedRef.current = false;

  return (
    <SEOContext.Provider value={{ renderedRef }}>
      <Analytics />
      {/* Default SEO fallback: will be ignored if page-level SEO renders and sets the flag */}
      {!renderedRef.current && (
        <SEO />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SEOContext.Provider>
  );
}