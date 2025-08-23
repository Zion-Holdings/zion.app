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
  structuredData: any;
}

interface SEOOptimizerProps {
  pageData?: Partial<SEOData>;
  autoOptimize?: boolean;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  pageData = {}, 
  autoOptimize = true 
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>('');
  const [seoScore, setSeoScore] = useState<number>(0);
  const [seoIssues, setSeoIssues] = useState<string[]>([]);

  // Default SEO data
  const defaultSEO: SEOData = {
    title: 'Zion Tech Group - Pioneering the Future of Technology',
    description: 'Discover cutting-edge AI, quantum computing, and autonomous solutions that drive business transformation. Leading innovation in technology services.',
    keywords: [
      'AI technology', 'quantum computing', 'autonomous systems', 'business transformation',
      'technology solutions', 'innovation', 'digital transformation', 'enterprise technology',
      'machine learning', 'artificial intelligence', 'quantum solutions', 'automation'
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
      description: 'Pioneering the future of technology with innovative solutions that drive business transformation',
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
        'https://twitter.com/ziontechgroup'
      ]
    }
  };

  // Merge default data with page-specific data
  const seoData: SEOData = {
    ...defaultSEO,
    ...pageData,
    title: pageData.title || defaultSEO.title,
    description: pageData.description || defaultSEO.description,
    canonicalUrl: pageData.canonicalUrl || `${defaultSEO.canonicalUrl}${router.asPath}`,
    structuredData: {
      ...defaultSEO.structuredData,
      ...pageData.structuredData
    }
  };

  // Update page title and meta tags
  useEffect(() => {
    setCurrentPage(router.asPath);
    
    // Update document title
    document.title = seoData.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.description);

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords.join(', '));

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seoData.canonicalUrl);

    // Update Open Graph tags
    updateOpenGraphTags();
    
    // Update Twitter Card tags
    updateTwitterCardTags();
    
    // Add structured data
    addStructuredData();
    
    // Run SEO audit if auto-optimize is enabled
    if (autoOptimize) {
      runSEOAudit();
    }
  }, [router.asPath, seoData, autoOptimize]);

  // Update Open Graph tags
  const updateOpenGraphTags = () => {
    const ogTags = [
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:type', content: seoData.ogType },
      { property: 'og:url', content: seoData.canonicalUrl },
      { property: 'og:image', content: seoData.ogImage },
      { property: 'og:site_name', content: 'Zion Tech Group' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
  };

  // Update Twitter Card tags
  const updateTwitterCardTags = () => {
    const twitterTags = [
      { name: 'twitter:card', content: seoData.twitterCard },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
      { name: 'twitter:image', content: seoData.ogImage },
      { name: 'twitter:site', content: '@ziontechgroup' }
    ];

    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
  };

  // Add structured data
  const addStructuredData = () => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(seoData.structuredData);
    document.head.appendChild(script);
  };

  // Run SEO audit
  const runSEOAudit = () => {
    const issues: string[] = [];
    let score = 100;

    // Check title length
    if (seoData.title.length < 30 || seoData.title.length > 60) {
      issues.push('Title length should be between 30-60 characters');
      score -= 10;
    }

    // Check description length
    if (seoData.description.length < 120 || seoData.description.length > 160) {
      issues.push('Description length should be between 120-160 characters');
      score -= 10;
    }

    // Check for missing alt text on images
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) {
      issues.push(`${imagesWithoutAlt.length} images missing alt text`);
      score -= 5;
    }

    // Check heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const h1Count = document.querySelectorAll('h1').length;
    if (h1Count === 0) {
      issues.push('Missing H1 heading');
      score -= 15;
    } else if (h1Count > 1) {
      issues.push('Multiple H1 headings found');
      score -= 10;
    }

    // Check for internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="https://ziontechgroup.com"]');
    if (internalLinks.length < 3) {
      issues.push('Low number of internal links');
      score -= 5;
    }

    // Check for meta viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      issues.push('Missing viewport meta tag');
      score -= 10;
    }

    // Check for language declaration
    const html = document.documentElement;
    if (!html.lang) {
      issues.push('Missing language declaration');
      score -= 5;
    }

    // Check for robots meta tag
    const robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      issues.push('Missing robots meta tag');
      score -= 5;
    }

    setSeoScore(Math.max(0, score));
    setSeoIssues(issues);
  };

  // Generate sitemap entry
  const generateSitemapEntry = () => {
    return {
      url: seoData.canonicalUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8
    };
  };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Performance Hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Social Media Verification */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-ms-verification-code" />
        
        {/* Structured Data for Breadcrumbs */}
        {router.asPath !== '/' && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://ziontechgroup.com'
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: currentPage.split('/').pop() || 'Page',
                    item: seoData.canonicalUrl
                  }
                ]
              })
            }}
          />
        )}
      </Head>

      {/* SEO Status Indicator (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-50 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-white text-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${seoScore >= 80 ? 'bg-green-400' : seoScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
            <span className="font-medium">SEO Score: {seoScore}/100</span>
          </div>
          {seoIssues.length > 0 && (
            <div className="space-y-1">
              <div className="text-gray-400">Issues:</div>
              {seoIssues.slice(0, 3).map((issue, index) => (
                <div key={index} className="text-red-300">• {issue}</div>
              ))}
              {seoIssues.length > 3 && (
                <div className="text-gray-400">+{seoIssues.length - 3} more</div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SEOOptimizer;