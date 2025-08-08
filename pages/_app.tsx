import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../sentry.client.config.js';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
