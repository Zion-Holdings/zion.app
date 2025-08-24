// Simplified app initialization - removed complex polyfills
console.log('🚀 Starting Zion App...');

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import '../src/index.css'; // Temporarily disabled to test loading

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zion App - AI Marketplace & DAO Platform</title>
        <meta name="description" content="Zion App - The ultimate AI marketplace and DAO platform for the future of work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
