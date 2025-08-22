import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Analytics from '../components/Analytics';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}