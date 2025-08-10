import '../styles/enhanced-design-system.css';
import '../styles/modern-design-system.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const AutomationPromoBanner = dynamic(() => import('../components/AutomationPromoBanner'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showBanner = router.pathname === '/';
  return (
    <EnhancedLayout>
      {showBanner && <AutomationPromoBanner />}
      <Component  {...pageProps} />
    </EnhancedLayout>
  );
}