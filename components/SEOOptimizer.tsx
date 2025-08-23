import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOOptimizer: React.FC<SEOProps> = ({
  title = "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions",
  description = "Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge 2040-2041 technology.",
  keywords = "AI, artificial intelligence, quantum computing, autonomous systems, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI",
  image = "/og-image.svg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = ["AI", "Quantum Computing", "Technology", "Innovation"],
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`;

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Revolutionary AI & Quantum Technology Solutions",
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
      "https://twitter.com/ziontechgroup",
      "https://www.linkedin.com/company/ziontechgroup",
      "https://youtube.com/@ziontechgroup",
      "https://github.com/Zion-Holdings"
    ],
    "foundingDate": "2020",
    "industry": "Technology",
    "numberOfEmployees": "50-100"
  };

  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Revolutionary AI & Quantum Technology Solutions",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Structured data for service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": fullTitle,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "serviceType": section,
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services"
    }
  };

  // Generate structured data for website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    description: 'Revolutionary technology solutions for the future',
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ziontechgroup.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Generate structured data for breadcrumbs
  const generateBreadcrumbSchema = () => {
    const pathSegments = router.asPath.split('/').filter(Boolean);
    if (pathSegments.length === 0) return null;

    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ziontechgroup.com'
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: `https://ziontechgroup.com${currentPath}`
      });
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems
    };
  };

  const breadcrumbSchema = generateBreadcrumbSchema();

  // Set meta robots
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`);
    } else {
      const newMetaRobots = document.createElement('meta');
      newMetaRobots.name = 'robots';
      newMetaRobots.content = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
      document.head.appendChild(newMetaRobots);
    }
  }, [noindex, nofollow]);

  // Set canonical URL
  useEffect(() => {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      const newCanonicalLink = document.createElement('link');
      newCanonicalLink.rel = 'canonical';
      newCanonicalLink.href = canonicalUrl;
      document.head.appendChild(newCanonicalLink);
    }
  }, [canonicalUrl]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 shadow-2xl z-40 overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">SEO Optimizer</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time SEO analysis</p>
          </div>
          <button
            onClick={toggleVisibility}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close SEO optimizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current URL */}
        <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Page</p>
          <p className="text-sm font-mono break-all">{currentUrl}</p>
        </div>

        {/* Analysis Button */}
        <div className="mb-6">
          <button
            onClick={analyzePage}
            disabled={isAnalyzing}
            className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            aria-label="Analyze current page"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Analyze Page</span>
              </>
            )}
          </button>
        </div>

        {/* Metrics Display */}
        {metrics && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">SEO Score: {metrics.overall}/100</h3>
            
            <div className="space-y-4">
              {/* Title */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Title</span>
                  <span className={`text-sm font-bold ${metrics.title.score >= 80 ? 'text-green-600' : metrics.title.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.title.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Length: {metrics.title.length} characters</p>
                  <p>Keywords: {metrics.title.hasKeywords ? '✓' : '✗'}</p>
                  <p>Brand: {metrics.title.hasBrand ? '✓' : '✗'}</p>
                </div>
              </div>

              {/* Headings */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Headings</span>
                  <span className={`text-sm font-bold ${metrics.headings.score >= 80 ? 'text-green-600' : metrics.headings.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.headings.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>H1: {metrics.headings.h1Count}</p>
                  <p>H2: {metrics.headings.h2Count}</p>
                  <p>H3: {metrics.headings.h3Count}</p>
                </div>
              </div>

              {/* Images */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Images</span>
                  <span className={`text-sm font-bold ${metrics.images.score >= 80 ? 'text-green-600' : metrics.images.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.images.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Total: {metrics.images.total}</p>
                  <p>With Alt: {metrics.images.withAlt}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Content</span>
                  <span className={`text-sm font-bold ${metrics.content.score >= 80 ? 'text-green-600' : metrics.content.score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {metrics.content.score}/100
                  </span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Words: {metrics.content.wordCount}</p>
                  <p>Keyword Density: {metrics.content.keywordDensity}%</p>
                  <p>Readability: {metrics.content.readability}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Issues List */}
        {issues.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Issues Found ({issues.length})</h3>
            <div className="space-y-3">
              {issues.map((issue) => (
                <div
                  key={issue.id}
                  className={`p-3 rounded-lg border-l-4 ${getSeverityBg(issue.severity)} border-l-${issue.severity === 'high' ? 'red' : issue.severity === 'medium' ? 'yellow' : 'blue'}-500`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className={`w-4 h-4 ${getSeverityColor(issue.severity)}`} />
                        <span className={`text-sm font-medium ${getSeverityColor(issue.severity)} capitalize`}>
                          {issue.severity} {issue.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{issue.message}</p>
                      {issue.fix && (
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <strong>Fix:</strong> {issue.fix}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      -{issue.impact} pts
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analysis History */}
        {analysisHistory.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Recent Analysis</h3>
            <div className="space-y-2">
              {analysisHistory.slice(0, 5).map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.url}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.date.toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`text-sm font-bold ${
                    item.score >= 80 ? 'text-green-600' : 
                    item.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {item.score}/100
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expandable Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <h4 className="text-gray-900 dark:text-white font-medium text-sm">Advanced SEO Tips</h4>
                
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Title Optimization</h5>
                    <p>Keep titles between 30-60 characters. Include primary keywords near the beginning.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Meta Description</h5>
                    <p>Write compelling descriptions between 120-160 characters. Include a call-to-action.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Heading Structure</h5>
                    <p>Use one H1 per page, followed by H2s and H3s. Include keywords naturally.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Image Optimization</h5>
                    <p>Always add descriptive alt text. Use relevant filenames and compress images.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Content Quality</h5>
                    <p>Aim for at least 300 words. Use keywords naturally and provide value to readers.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpansion}
          className="mt-6 w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} advanced tips`}
        >
          <Settings className="w-4 h-4" />
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'Show More'}
          </span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default SEOOptimizer;