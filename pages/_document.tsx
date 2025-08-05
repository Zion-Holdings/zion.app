import { Html, Head, Main, NextScript }  from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://unpkg.com; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net https://unpkg.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://api.supabase.co https://*.supabase.co https://api.openai.com https://api.anthropic.com; frame-src 'self' https://www.google.com https://www.youtube.com; object-src 'none'; base-uri 'self'; form-action 'self'; media-src 'self' https:; worker-src 'self' blob:;"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 