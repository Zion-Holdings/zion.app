import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
  twitterCard: string;
  canonicalUrl: string;
  structuredData: Record<string, unknown>;
}

interface PageSEOConfig {
  [key: string]: SEOData;
}

const EnhancedSEOOptimizer: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>('');
  const [seoScore, setSeoScore] = useState<number>(0);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);

  // Default SEO configuration
  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - Pioneering the Future of Technology',
    description: 'Leading provider of quantum computing, AI consciousness, autonomous systems, and revolutionary technology solutions. Transform your business with cutting-edge innovation.',
    keywords: [
      'quantum computing',
      'AI consciousness',
      'autonomous systems',
      'technology solutions',
      'quantum AI',
      'space technology',
      'enterprise solutions',
      'AI automation',
      'quantum cybersecurity',
      'futuristic technology'
    ],
    ogImage: '/images/zion-tech-group-og.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    canonicalUrl: 'https://ziontechgroup.com',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
      description: 'Pioneering the future of technology with quantum computing, AI consciousness, and autonomous systems.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@ziontechgroup.com'
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
        'https://github.com/zion-tech-group'
      ]
    }
  };

  // Page-specific SEO configurations
  const pageSEO: PageSEOConfig = {
    '/': {
      ...defaultSEO,
      title: 'Zion Tech Group - Pioneering the Future of Technology',
      description: 'Leading provider of quantum computing, AI consciousness, autonomous systems, and revolutionary technology solutions. Transform your business with cutting-edge innovation.',
      structuredData: {
        ...defaultSEO.structuredData,
        '@type': 'WebSite',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ziontechgroup.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    },
    '/services': {
      ...defaultSEO,
      title: 'Technology Services - Zion Tech Group',
      description: 'Comprehensive technology services including AI automation, quantum computing, cybersecurity, and enterprise solutions. Expert consulting and implementation.',
      keywords: [...defaultSEO.keywords, 'technology services', 'consulting', 'implementation', 'enterprise solutions'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Technology Services',
        provider: {
          '@type': 'Organization',
          name: 'Zion Tech Group'
        },
        description: 'Comprehensive technology services including AI automation, quantum computing, and cybersecurity.',
        areaServed: 'Worldwide',
        serviceType: 'Technology Consulting'
      }
    },
    '/about': {
      ...defaultSEO,
      title: 'About Zion Tech Group - Our Mission & Vision',
      description: 'Learn about Zion Tech Group\'s mission to pioneer the future of technology through innovation, research, and cutting-edge solutions.',
      keywords: [...defaultSEO.keywords, 'about us', 'mission', 'vision', 'company history', 'leadership'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        mainEntity: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          description: 'Pioneering the future of technology through innovation and research.'
        }
      }
    },
    '/contact': {
      ...defaultSEO,
      title: 'Contact Zion Tech Group - Get in Touch',
      description: 'Contact Zion Tech Group for technology consulting, AI solutions, quantum computing services, and enterprise technology partnerships.',
      keywords: [...defaultSEO.keywords, 'contact', 'consulting', 'partnerships', 'support'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        mainEntity: {
          '@type': 'Organization',
          name: 'Zion Tech Group',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'info@ziontechgroup.com',
            availableLanguage: 'English'
          }
        }
      }
    }
  };

  // Get current page SEO data
  const getCurrentPageSEO = (): SEOData => {
    const path = router.pathname;
    return pageSEO[path] || defaultSEO;
  };

  // Generate dynamic meta tags
  const generateMetaTags = (seoData: SEOData) => {
    const tags = [
      // Basic meta tags
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords.join(', ') },
      { name: 'author', content: 'Zion Tech Group' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // Open Graph tags
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:type', content: seoData.ogType },
      { property: 'og:url', content: seoData.canonicalUrl + router.asPath },
      { property: 'og:image', content: seoData.ogImage },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: seoData.twitterCard },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
      { name: 'twitter:image', content: seoData.ogImage },
      { name: 'twitter:site', content: '@ziontechgroup' },
      
      // Additional SEO tags
      { name: 'theme-color', content: '#06b6d4' },
      { name: 'msapplication-TileColor', content: '#06b6d4' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      
      // Security headers
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
    ];

    return tags;
  };

  // SEO audit function
  const performSEOAudit = () => {
    const issues: string[] = [];
    let score = 100;

    // Check title length
    const currentSEO = getCurrentPageSEO();
    if (currentSEO.title.length < 30 || currentSEO.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
      score -= 10;
    }

    // Check description length
    if (currentSEO.description.length < 120 || currentSEO.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      score -= 10;
    }

    // Check for keywords in title and description
    const titleLower = currentSEO.title.toLowerCase();
    const descLower = currentSEO.description.toLowerCase();
    const hasKeywords = currentSEO.keywords.some(keyword => 
      titleLower.includes(keyword.toLowerCase()) || descLower.includes(keyword.toLowerCase())
    );

    if (!hasKeywords) {
      issues.push('Keywords should be included in title or description');
      score -= 15;
    }

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      issues.push('Page should have proper heading structure');
      score -= 20;
    }

    // Check for images with alt text
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= Math.min(15, imagesWithoutAlt.length * 3);
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    if (internalLinks.length < 3) {
      issues.push('Page should have internal links for better SEO');
      score -= 10;
    }

    setSeoScore(Math.max(0, score));
    setSeoIssues(issues);
  };

  // Update page tracking
  useEffect(() => {
    setCurrentPage(router.pathname);
    performSEOAudit();
  }, [router.pathname]);

  const currentSEO = getCurrentPageSEO();
  const metaTags = generateMetaTags(currentSEO);

  return (
    <>
      <Head>
        <title>{currentSEO.title}</title>
        <link rel="canonical" href={currentSEO.canonicalUrl + router.asPath} />
        
        {/* Meta tags */}
        {metaTags.map((tag, index) => (
          <meta key={index} {...tag} />
        ))}

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(currentSEO.structuredData)
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Additional SEO meta tags */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Social media verification */}
        <meta name="twitter:creator" content="@ziontechgroup" />
        <meta name="twitter:domain" content="ziontechgroup.com" />
        
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Performance hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
      </Head>

      {/* SEO Status Indicator (Development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-50 bg-black/90 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-4 w-80">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-cyan-400">SEO Status</h3>
            <div className={`px-3 py-1 rounded-full text-sm font-bold ${
              seoScore >= 90 ? 'bg-green-600 text-white' :
              seoScore >= 80 ? 'bg-yellow-600 text-white' :
              seoScore >= 70 ? 'bg-orange-600 text-white' :
              'bg-red-600 text-white'
            }`}>
              {seoScore}/100
            </div>
          </div>
          
          <div className="text-sm text-gray-300 mb-3">
            <p><strong>Page:</strong> {currentPage}</p>
            <p><strong>Title:</strong> {currentSEO.title}</p>
            <p><strong>Description:</strong> {currentSEO.description.substring(0, 100)}...</p>
          </div>

          {seoIssues.length > 0 && (
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-red-400 mb-2">Issues Found:</h4>
              <ul className="space-y-1">
                {seoIssues.map((issue, index) => (
                  <li key={index} className="text-xs text-red-300">• {issue}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={performSEOAudit}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
          >
            Re-run SEO Audit
          </button>
        </div>
      )}
    </>
  );
};

export default EnhancedSEOOptimizer;