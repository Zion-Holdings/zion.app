import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticLayout from '../components/FuturisticLayout';
import DefaultSEO from '../components/DefaultSEO';
import { Outfit, Orbitron } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], display: 'swap', variable: '--font-outfit' });
const orbitron = Orbitron({ subsets: ['latin'], display: 'swap', variable: '--font-orbitron' });

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <FuturisticLayout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900">Skip to content</a>
      <div className={`${outfit.variable} ${orbitron.variable} min-h-screen flex flex-col`}>
        <DefaultSEO />
        <Header />
        <main id="main-content" className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </FuturisticLayout>
  );
}
