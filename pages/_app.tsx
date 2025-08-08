import type { AppProps } from 'next/app';
import Head from 'next/head';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/globals.css';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zion App</title>
      </Head>
      <EnhancedLayout>
        <Component {...pageProps} />
      </EnhancedLayout>
    </>
  );
}
