import type { AppProps } from 'next/app';
import '../styles/globals.css';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
import FuturisticLayout from '../components/FuturisticLayout';
import DefaultSEO from '../components/DefaultSEO';

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <FuturisticLayout>
      <div className="min-h-screen flex flex-col">
        <DefaultSEO />
        <SmartHeader />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <SmartFooter />
      </div>
    </FuturisticLayout>
  );
}
