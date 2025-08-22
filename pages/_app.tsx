import type { AppProps } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  if (isHome) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}