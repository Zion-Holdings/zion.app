import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <EnhancedLayout>
      <AnyComponent {...pageProps} />
    </EnhancedLayout>
  );
}
