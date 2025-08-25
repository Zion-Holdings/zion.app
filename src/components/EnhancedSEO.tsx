import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoOptimizer, SEOData } from '../utils/seoOptimizer';

interface EnhancedSEOProps {
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
  customImage?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  customTitle,
  customDescription,
  customKeywords,
  customImage,
  structuredData,
  noIndex = false,
  noFollow = false
}) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Generate SEO data based on current path
  const seoData: SEOData = seoOptimizer.generateSEOData(path);
  
  // Override with custom values if provided
  const finalTitle = customTitle || seoData.title;
  const finalDescription = customDescription || seoData.description;
  const finalKeywords = customKeywords || seoData.keywords;
  const finalImage = customImage || seoData.ogImage;
  const finalStructuredData = structuredData || seoData.structuredData;
  
  // Generate canonical URL
  const canonicalUrl = seoOptimizer.generateCanonicalUrl(path);
  
  // Meta robots tag
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')}" />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//api.ziontechgroup.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData, null, 2)}
      </script>
      
      {/* Additional Page-Specific Meta Tags */}
      {path === '/' && (
        <>
          <meta name="google-site-verification" content="your-verification-code" />
          <meta name="msvalidate.01" content="your-ms-validation-code" />
        </>
      )}
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Performance Optimizations */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
    </Helmet>
  );
};

export default EnhancedSEO;