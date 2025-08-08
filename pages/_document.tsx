import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a1a" />
        <meta name="description" content="Zion — AI-powered marketplace, services, and products." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Zion" />
        <meta property="og:title" content="Zion — AI-Powered Marketplace" />
        <meta property="og:description" content="Futuristic, high-performance platform for AI services, products, and talent." />
        <meta property="og:image" content="/og/og-default.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion — AI-Powered Marketplace" />
        <meta name="twitter:description" content="Futuristic, high-performance platform for AI services, products, and talent." />
        <meta name="twitter:image" content="/og/og-default.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           className="antialiased bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}