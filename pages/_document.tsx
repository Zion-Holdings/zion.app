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
        var first = root.firstElementChild;
        if (!first || ['SCRIPT','STYLE','LINK'].indexOf(first.tagName) !== -1) {
          console.error("Blank screen detected - replacing content");
          root.innerHTML = '<div style="padding:2rem;text-align:center;font-family:sans-serif;">\
            <h2>Application failed to load.</h2>\
            <p>Please refresh the page.</p>\
            <p>If the issue persists, run <code>./setup.sh npm</code> and <code>npm run fix:loading</code>.</p>\
            <p>Check <code>next_dev_server.log</code> for errors. If you do not have internet access, install dependencies when connectivity is restored.</p>\
          </div>';
          setTimeout(function(){ window.location.href = '/offline.html'; }, 1000);
        }
      }
    }, 3000);
  });`;
  
  // Comprehensive message channel error interceptor
  const messageChannelErrorScript = `
    // Intercept and suppress message channel closure errors
    (function() {
      var originalConsoleError = console.error;
      console.error = function() {
        var args = Array.prototype.slice.call(arguments);
        var message = args.join(' ');
        
        // Suppress message channel related errors
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse')) {
          return; // Don't log these errors
        }
        
        // Call original console.error for other errors
        originalConsoleError.apply(console, args);
      };
      
      // Intercept unhandled promise rejections
      window.addEventListener('unhandledrejection', function(event) {
        var message = event.reason && event.reason.message ? event.reason.message : String(event.reason);
        
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse')) {
          event.preventDefault();
          return;
        }
      });
    })();
  `;

  return (
    <Html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.launchdarkly.com https://www.googletagmanager.com https://widget.intercom.io https://*.googleapis.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://*.supabase.co https://*.stripe.com https://*.sentry.io; object-src 'none'; base-uri 'self';"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* <script dangerouslySetInnerHTML={{ __html: loaderTimeoutScript }} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: blankScreenDetectScript }} />
        <script dangerouslySetInnerHTML={{ __html: messageChannelErrorScript }} />
      </body>
    </Html>
  );
}
