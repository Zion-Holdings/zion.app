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

  // Detect blank screen after hydration
  const blankScreenDetectScript = `window.addEventListener('load', function () {
    setTimeout(function () {
      var root = document.getElementById('__next');
      if (root && root.innerText.trim() === '') {
        root.innerHTML = '<div style="padding:2rem;text-align:center;font-family:sans-serif;"><h2>Application failed to load.</h2><p>Please refresh the page.</p><p>If the issue persists, run <code>./setup.sh npm</code> to reinstall dependencies.</p></div>';
      }
    }, 3000);
  });`;
  const globalErrorScript = `['error','unhandledrejection'].forEach(function(evt){
    window.addEventListener(evt, function(){
      var root = document.getElementById('__next');
      if (root && root.innerText.trim() === '') {
        root.innerHTML = '<div style="padding:2rem;text-align:center;font-family:sans-serif;'><h2>Application failed to load.</h2><p>Check the browser console for errors.</p><p>If dependencies are missing, run <code>./setup.sh npm</code>.</p></div>';
      }
    });
  });`;

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
        <script dangerouslySetInnerHTML={{ __html: blankScreenDetectScript }} />
        <script dangerouslySetInnerHTML={{ __html: globalErrorScript }} />
      </body>
    </Html>
  );
}
