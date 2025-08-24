import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
  );
}

export default MyApp;
