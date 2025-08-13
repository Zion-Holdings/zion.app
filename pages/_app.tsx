import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticLayout from '../components/FuturisticLayout';
import DefaultSEO from '../components/DefaultSEO';

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <FuturisticLayout>
      <div className="min-h-screen flex flex-col">
        <DefaultSEO />
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </FuturisticLayout>
  );
}
