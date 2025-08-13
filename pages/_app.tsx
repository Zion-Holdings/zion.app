import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Footer from '../components/Footer';

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
