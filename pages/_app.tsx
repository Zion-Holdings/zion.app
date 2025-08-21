import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navigation from '../components/layout/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}