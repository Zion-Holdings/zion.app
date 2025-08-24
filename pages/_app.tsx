import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import ChatWidget from '../components/support/ChatWidget';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnhancedLayout>
      <Component {...pageProps} />
      <ChatWidget />
    </EnhancedLayout>
  );
}
