import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticNavigation2025 from './UltraAdvancedFuturisticNavigation2025';
import UltraAdvancedFuturisticFooter2025 from './UltraAdvancedFuturisticFooter2025';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Performance optimization */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>

      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Navigation */}
        <UltraAdvancedFuturisticNavigation2025 />
        
        {/* Main Content */}
        <main className="flex-1 relative">
          {children}
        </main>
        
        {/* Footer */}
        <UltraAdvancedFuturisticFooter2025 />
      </div>
    </>
  );
};

export default Layout;
