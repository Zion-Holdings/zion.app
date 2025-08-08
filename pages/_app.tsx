import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import PageLoadTracker from '../components/metrics/PageLoadTracker';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <PageLoadTracker />
      <Component {...pageProps} />
    </EnhancedLayout>
  );
}
