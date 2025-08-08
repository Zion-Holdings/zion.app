import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import '../styles/globals.css';
import '../styles/modern-design-system.css';
import '../styles/enhanced-design-system.css';
import { NotificationProvider } from '../components/ui/NotificationSystem';
import { AuthProvider } from '../components/ui/AuthProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <EnhancedLayout>
          <Component {...pageProps} />
        </EnhancedLayout>
      </NotificationProvider>
    </AuthProvider>
  );
}
