import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Footer from '../components/Footer';
import FuturisticLayout from '../components/FuturisticLayout';

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <FuturisticLayout>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </FuturisticLayout>
  );
}
