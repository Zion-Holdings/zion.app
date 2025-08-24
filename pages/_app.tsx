import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
    </EnhancedLayout>
  );
}
