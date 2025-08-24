import type { AppProps } from 'next/app';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import '../styles/futuristic.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
