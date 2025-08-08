import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
