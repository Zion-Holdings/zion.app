import type { AppProps } from 'next/app';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import { RoleProvider } from '../components/context/RoleContext';
import { ToastProvider } from '../components/ui/ToastProvider';
import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RoleProvider>
      <ToastProvider>
        <EnhancedLayout>
          <Component {...pageProps} />
        </EnhancedLayout>
      </ToastProvider>
    </RoleProvider>
  );
}
