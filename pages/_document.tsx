import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
      <body                                                                                                                                                                     className="antialiased bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}