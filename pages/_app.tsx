import type { AppProps } from 'next/app;
import { ThemeProvider } from 'next-themes;
import { AuthProvider } from '../src/context/auth/AuthProvider;
import '../src/styles/globals.css;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
