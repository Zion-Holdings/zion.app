import type { AppProps } from 'next/app';
import '../styles/globals.css';
// Footer removed (component not present). Keep layout minimal.

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
