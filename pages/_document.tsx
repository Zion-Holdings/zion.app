import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteUrl = 'https://ziontechgroup.com';
  const siteName = 'Zion Tech Group';
  const siteDescription = 'Zion Tech Group — AI-powered digital solutions, marketplaces, and enterprise innovation.';
  const themeColorLight = '#ffffff';
  const themeColorDark = '#0a0a0a';

  return (
    <Html lang="en">
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="manifest" href="/site.webmanifest" />

          <meta name="application-name" content={siteName} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={siteName} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content={themeColorLight} media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content={themeColorDark} media="(prefers-color-scheme: dark)" />

          <meta name="description" content={siteDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content={siteName} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:url" content={siteUrl} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={siteName} />
          <meta name="twitter:description" content={siteDescription} />

          <link rel="canonical" href={siteUrl} />
        </Head>
      <body                                                                                                                                                                                                className="antialiased bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}