import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static override async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

  // Detect blank screen after hydration
  const blankScreenDetectScript = `window.addEventListener('load', function () {
    setTimeout(function () {
      var root = document.getElementById('__next');
      if (root) {
        var hasVisible = Array.from(root.children || []).some(function (el) {
          return ['SCRIPT','STYLE','LINK'].indexOf(el.tagName) === -1;
        });
        var isBlank = !hasVisible && root.innerText.trim() === '';
        if (isBlank) {
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
      var originalConsoleWarn = console.warn;
      
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
            message.includes('sendResponse') ||
            message.includes('SYNC_FAILED') ||
            message.includes('SYNC_TIMEOUT') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist') ||
            message.includes('Extension context invalidated') ||
            message.includes('A listener indicated an asynchronous response')) {
          return; // Don't log these errors
        }
        
        // Call original console.error for other errors
        originalConsoleError.apply(console, args);
      };
      
      console.warn = function() {
        var args = Array.prototype.slice.call(arguments);
        var message = args.join(' ');
        
        // Suppress extension-related warnings
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist')) {
          return; // Don't log these warnings
        }
        
        // Call original console.warn for other warnings
        originalConsoleWarn.apply(console, args);
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
            message.includes('sendResponse') ||
            message.includes('SYNC_FAILED') ||
            message.includes('SYNC_TIMEOUT') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist') ||
            message.includes('A listener indicated an asynchronous response')) {
          event.preventDefault();
          return;
        }
      });
      
      // Intercept global errors
      window.addEventListener('error', function(event) {
        var message = event.message || '';
        
        if (message.includes('message channel closed') ||
            message.includes('asynchronous response by returning true') ||
            message.includes('Extension context invalidated') ||
            message.includes('chrome.runtime') ||
            message.includes('service worker') ||
            message.includes('postMessage') ||
            message.includes('sendResponse') ||
            message.includes('Could not establish connection') ||
            message.includes('Receiving end does not exist') ||
            message.includes('A listener indicated an asynchronous response')) {
          event.preventDefault();
          return;
        }
      });
      
      // Suppress extension-related errors in the global scope
      if (typeof window !== 'undefined') {
        window.addEventListener('error', function(event) {
          if (event.filename && event.filename.includes('chrome-extension')) {
            event.preventDefault();
            return;
          }
        });
      }
    })();
  `;

  const cspContent = "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://*.launchdarkly.com https://www.googletagmanager.com https://widget.intercom.io https://*.googleapis.com https://*.gstatic.com https://*.sentry.io https://*.google-analytics.com https://*.doubleclick.net https://*.googlesyndication.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https://*.cloudinary.com; connect-src 'self' https://*.supabase.co https://*.sentry.io https://*.stripe.com";
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={cspContent} />
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
