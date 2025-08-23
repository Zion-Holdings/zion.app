// CRITICAL: Import immediate process polyfill FIRST to prevent process.env errors
import '../src/utils/immediate-process-polyfill';

// CRITICAL: Runtime check - polyfills should be loaded from document script and webpack banner
if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
  // console.log('🚨 APP.TSX RUNTIME CHECK - Polyfills should be active');
}

// Enhanced error logging - import early for comprehensive coverage
import enhancedErrorLogger from '../src/utils/enhanced-error-logger';

// Add global error handling for undefined components
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason?.message?.includes('getInitialProps')) {
      console.error('Component loading error caught:', event.reason);
      event.preventDefault(); // Prevent the error from crashing the app
    }
  });
  
  // Additional error handling for process.env errors
  window.addEventListener('error', (event) => {
    if (event.message?.includes('Cannot read properties of undefined')) {
      console.error('Runtime error caught:', event.error);
      event.preventDefault();
    }
  });
  
  // Enhanced error handling for getInitialProps and http errors
  window.addEventListener('error', (event) => {
    const errorMessage = event.message || '';
    const errorSource = event.filename || '';
    
    // Handle getInitialProps errors
    if (errorMessage.includes('getInitialProps') || errorMessage.includes('Cannot read properties of undefined (reading \'getInitialProps\')')) {
      console.error('getInitialProps error caught:', event.error);
      event.preventDefault();
      return;
    }
    
    // Handle http/https errors
    if (errorMessage.includes('http is not defined') || errorMessage.includes('https is not defined')) {
      console.error('HTTP/HTTPS error caught:', event.error);
      event.preventDefault();
      return;
    }
    
    // Handle TypeScript helper errors
    if (errorMessage.includes('__extends') || errorMessage.includes('__assign') || errorMessage.includes('Cannot destructure property')) {
      console.error('TypeScript helper error caught:', event.error);
      event.preventDefault();
      return;
    }
  });
  
  // Enhanced unhandled rejection handling
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    const message = reason?.message || '';
    
    // Handle getInitialProps promise rejections
    if (message.includes('getInitialProps') || message.includes('Cannot read properties of undefined (reading \'getInitialProps\')')) {
      console.error('getInitialProps promise rejection caught:', reason);
      event.preventDefault();
      return;
    }
    
    // Handle component loading errors
    if (message.includes('Failed to load component') || message.includes('Invalid component')) {
      console.error('Component loading promise rejection caught:', reason);
      event.preventDefault();
      return;
    }
  });
  
  // Add blank screen detection
  window.addEventListener('load', () => {
    setTimeout(() => {
      const root = document.getElementById('__next');
      if (root) {
        const hasVisible = Array.from(root.children || []).some(
          (el) => !['SCRIPT', 'STYLE', 'LINK'].includes(el.tagName)
        );
        if (!hasVisible && root.innerText.trim() === '') {
          console.error('Blank screen detected - attempting recovery');
          // Show a basic fallback with additional instructions
          root.innerHTML = `
          <div style="padding: 2rem; text-align: center; font-family: sans-serif; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <h1 style="color: #333; margin-bottom: 1rem;">Zion Tech Marketplace</h1>
            <p style="color: #666; margin-bottom: 1rem;">Loading application...</p>
            <p style="color: #666; margin-bottom: 1rem;">If refreshing doesn't work, visit <a href='/offline.html'>offline mode</a> for troubleshooting steps.</p>
            <button onclick="window.location.reload()" style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
              Reload Page
            </button>
          </div>
        `;
        }
      }
    }, 3000);
  });
}

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  if (isHome) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
