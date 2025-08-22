import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}