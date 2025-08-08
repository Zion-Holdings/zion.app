import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
