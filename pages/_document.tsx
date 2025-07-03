import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Simple theme script without complex polyfills
  const themeScript = `(() => {
    try {
      var theme = localStorage.getItem('theme');
      var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var className = isDark ? 'dark' : 'light';
      var root = document.documentElement;
      root.classList.add(className);
      root.setAttribute('data-theme', className);
    } catch(e) {}
  })();`;
  
  // Simple loader timeout without complex error handling
  const loaderTimeoutScript = `setTimeout(function(){
    var el = document.getElementById('initial-loader');
    if (el) el.style.display = 'none';
  }, 10000);`;

  return (
    <Html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.launchdarkly.com https://www.googletagmanager.com https://widget.intercom.io https://*.googleapis.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co https://*.stripe.com https://*.sentry.io; object-src 'none'; base-uri 'self';"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: loaderTimeoutScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
