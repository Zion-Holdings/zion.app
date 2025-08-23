import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, TrendingUp, BarChart3, Globe, 
  Smartphone, Monitor, Zap, CheckCircle
} from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  twitterCard: string;
  canonical: string;
  structuredData?: object;
}

interface EnhancedSEOProps {
  seoData: SEOData;
  pageType?: 'homepage' | 'service' | 'blog' | 'about' | 'contact';
  showAnalytics?: boolean;
  className?: string;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  seoData,
  pageType = 'homepage',
  showAnalytics = false,
  className = ''
}) => {
  const [seoScore, setSeoScore] = useState<number>(0);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);

  // Calculate SEO score
  useEffect(() => {
    let score = 100;
    const issues: string[] = [];

    // Check title length
    if (seoData.title.length < 30 || seoData.title.length > 60) {
      score -= 15;
      issues.push('Title length should be between 30-60 characters');
    }

    // Check description length
    if (seoData.description.length < 120 || seoData.description.length > 160) {
      score -= 15;
      issues.push('Description length should be between 120-160 characters');
    }

    // Check keywords
    if (seoData.keywords.length < 3) {
      score -= 10;
      issues.push('Include at least 3 relevant keywords');
    }

    // Check for structured data
    if (!seoData.structuredData) {
      score -= 10;
      issues.push('Add structured data for better search visibility');
    }

    setSeoScore(Math.max(0, score));
    setSeoIssues(issues);
  }, [seoData]);

  // Generate structured data based on page type
  const generateStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Revolutionary AI & IT Services for 2045",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup",
        "https://github.com/Zion-Holdings"
      ]
    };

    switch (pageType) {
      case 'service':
        return {
          ...baseData,
          "@type": "Service",
          "name": seoData.title,
          "description": seoData.description,
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        };
      case 'blog':
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": seoData.title,
          "description": seoData.description,
          "author": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString()
        };
      default:
        return baseData;
    }
  };

  const structuredData = seoData.structuredData || generateStructuredData();

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={seoData.twitterCard} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Additional page-specific meta tags */}
        {pageType === 'homepage' && (
          <>
            <meta name="google-site-verification" content="your-verification-code" />
            <meta name="msvalidate.01" content="your-bing-verification-code" />
          </>
        )}
      </Head>

      {/* SEO Analytics Panel (Optional) */}
      {showAnalytics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed bottom-6 left-6 z-50 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-green-500/20 shadow-2xl p-4 ${className}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-5 h-5 text-green-400" />
            <h3 className="text-sm font-semibold text-white">SEO Score</h3>
          </div>
          
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-300 text-xs">Overall</span>
              <span className={`text-sm font-bold ${
                seoScore >= 90 ? 'text-green-400' :
                seoScore >= 70 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {seoScore}/100
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  seoScore >= 90 ? 'bg-green-500' :
                  seoScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${seoScore}%` }}
              />
            </div>
          </div>

          {/* SEO Issues */}
          {seoIssues.length > 0 && (
            <div className="space-y-1">
              <h4 className="text-xs font-medium text-yellow-400">Issues Found:</h4>
              {seoIssues.slice(0, 2).map((issue, index) => (
                <div key={index} className="text-xs text-yellow-300">
                  • {issue}
                </div>
              ))}
              {seoIssues.length > 2 && (
                <div className="text-xs text-blue-400">
                  +{seoIssues.length - 2} more issues
                </div>
              )}
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-3 pt-3 border-t border-gray-700">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Zap className="w-3 h-3" />
              <span>SEO Optimized</span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default EnhancedSEO;