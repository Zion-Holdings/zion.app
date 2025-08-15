import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticLayout from '../components/FuturisticLayout';
import DefaultSEO from '../components/DefaultSEO';

export default function ZionApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  // For the index page (AI Service Factory services), render without the Zion layout
  if (isIndexPage) {
    return (
      <>
        <DefaultSEO />
        <Component {...pageProps} />
      </>
    );
  }

  // For all other pages, use the Zion Tech Group layout
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
