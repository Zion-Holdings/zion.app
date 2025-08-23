import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Globe, Target, BarChart3, CheckCircle, AlertTriangle } from 'lucide-react';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  canonicalUrl: string;
  structuredData: any;
}

interface SEOEnhancerProps {
  seoData: SEOData;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ seoData, children }) => {
  const [seoScore, setSeoScore] = useState(0);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Analyze SEO score
  const analyzeSEO = async () => {
    setIsAnalyzing(true);
    
    // Simulate SEO analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
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
      issues.push('Add more relevant keywords (minimum 3)');
    }
    
    // Check for structured data
    if (!seoData.structuredData) {
      score -= 20;
      issues.push('Add structured data for better search engine understanding');
    }
    
    // Check for social media optimization
    if (!seoData.ogImage) {
      score -= 10;
      issues.push('Add Open Graph image for social media sharing');
    }
    
    setSeoScore(Math.max(0, score));
    setSeoIssues(issues);
    setIsAnalyzing(false);
  };

  useEffect(() => {
    analyzeSEO();
  }, [seoData]);

  // Generate structured data
  const generateStructuredData = () => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": seoData.description,
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "areaServed": "Worldwide"
      }
    };

    return baseStructuredData;
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
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content={seoData.ogType} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        <meta name="twitter:site" content="@ziontechgroup" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Additional structured data for services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI & Technology Solutions",
              "provider": {
                "@type": "Organization",
                "name": "Zion Tech Group"
              },
              "description": seoData.description,
              "areaServed": "Worldwide",
              "serviceType": "Technology Consulting",
              "category": "Technology"
            })
          }}
        />
      </Head>

      {/* SEO Dashboard */}
      <div className="fixed top-4 left-4 z-50">
        <motion.div
          className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Search className="w-5 h-5 text-green-400" />
            <h3 className="text-white font-semibold">SEO Score</h3>
            {isAnalyzing && (
              <motion.div
                className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            )}
          </div>

          <div className="text-center mb-3">
            <div className={`text-2xl font-bold ${
              seoScore >= 90 ? 'text-green-400' : 
              seoScore >= 70 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {seoScore}/100
            </div>
            <div className="text-xs text-gray-400">
              {seoScore >= 90 ? 'Excellent' : 
               seoScore >= 70 ? 'Good' : 
               seoScore >= 50 ? 'Fair' : 'Needs Improvement'}
            </div>
          </div>

          {/* SEO Metrics */}
          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3 text-blue-400" />
              <span className="text-gray-400">Title:</span>
              <span className={`ml-1 ${
                seoData.title.length >= 30 && seoData.title.length <= 60 ? 'text-green-400' : 'text-red-400'
              }`}>
                {seoData.title.length} chars
              </span>
            </div>
            <div className="flex items-center gap-1">
              <BarChart3 className="w-3 h-3 text-purple-400" />
              <span className="text-gray-400">Desc:</span>
              <span className={`ml-1 ${
                seoData.description.length >= 120 && seoData.description.length <= 160 ? 'text-green-400' : 'text-red-400'
              }`}>
                {seoData.description.length} chars
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-cyan-400" />
              <span className="text-gray-400">Keywords:</span>
              <span className={`ml-1 ${
                seoData.keywords.length >= 3 ? 'text-green-400' : 'text-red-400'
              }`}>
                {seoData.keywords.length}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-orange-400" />
              <span className="text-gray-400">Structured:</span>
              <span className={`ml-1 ${
                seoData.structuredData ? 'text-green-400' : 'text-red-400'
              }`}>
                {seoData.structuredData ? 'Yes' : 'No'}
              </span>
            </div>
          </div>

          {/* SEO Issues */}
          {seoIssues.length > 0 && (
            <div className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-3 h-3 text-red-400" />
                <span className="text-red-400 text-xs font-medium">
                  {seoIssues.length} Issues
                </span>
              </div>
              <ul className="text-xs text-red-300 space-y-1">
                {seoIssues.slice(0, 2).map((issue, index) => (
                  <li key={index}>• {issue}</li>
                ))}
                {seoIssues.length > 2 && (
                  <li className="text-red-400">... and {seoIssues.length - 2} more</li>
                )}
              </ul>
            </div>
          )}

          {/* SEO Success Indicators */}
          {seoScore >= 90 && (
            <div className="mt-3 p-2 bg-green-500/20 border border-green-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 text-xs">
                <CheckCircle className="w-3 h-3" />
                SEO Optimized
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Enhanced Semantic Content */}
      <div className="seo-enhanced">
        {children}
      </div>

      {/* SEO Enhancement Styles */}
      <style jsx>{`
        .seo-enhanced {
          /* Ensure proper semantic structure */
        }
        
        .seo-enhanced h1 {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.1;
        }
        
        .seo-enhanced h2 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .seo-enhanced h3 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.3;
        }
        
        .seo-enhanced p {
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .seo-enhanced img {
          max-width: 100%;
          height: auto;
        }
        
        .seo-enhanced a {
          color: #06b6d4;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        
        .seo-enhanced a:hover {
          color: #0891b2;
        }
        
        /* Ensure proper contrast for accessibility */
        .seo-enhanced {
          color: #e5e7eb;
          background-color: #111827;
        }
        
        /* Focus indicators for keyboard navigation */
        .seo-enhanced *:focus {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default SEOEnhancer;