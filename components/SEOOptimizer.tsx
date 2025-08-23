import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  AlertTriangle, 
  Info, 
  X, 
  Settings,
  ExternalLink
} from 'lucide-react';

interface SEOIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  category: 'meta' | 'content' | 'performance' | 'accessibility' | 'technical';
  message: string;
  element?: HTMLElement;
  severity: 'low' | 'medium' | 'high';
  fix?: string;
  impact: number; // 0-100
}

interface SEOMetrics {
  title: {
    length: number;
    hasKeywords: boolean;
    hasBrand: boolean;
    score: number;
  };
  description: {
    length: number;
    hasKeywords: boolean;
    hasCallToAction: boolean;
    score: number;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    h3Count: number;
    hasKeywords: boolean;
    score: number;
  };
  images: {
    total: number;
    withAlt: number;
    optimized: number;
    score: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
    score: number;
  };
  content: {
    wordCount: number;
    keywordDensity: number;
    readability: number;
    score: number;
  };
  overall: number;
}

interface SEOOptimizerProps {
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
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Pioneering Future Technology Solutions',
  description = 'Leading technology company specializing in AI, quantum computing, space technology, and enterprise IT solutions. Transform your business with cutting-edge innovation.',
  keywords = 'AI, artificial intelligence, quantum computing, space technology, enterprise IT, machine learning, automation, cybersecurity, cloud computing, digital transformation',
  image = '/og-image.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section = 'Technology',
  tags = ['AI', 'Quantum Computing', 'Space Technology', 'Enterprise IT']
}) => {
  const siteName = 'Zion Tech Group';
  const twitterHandle = '@ziontechgroup';
  const siteUrl = 'https://ziontechgroup.com';

  // Structured data for organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Pioneering the future of technology with innovative solutions that drive business transformation',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup',
      'https://youtube.com/ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Kleber',
      jobTitle: 'CEO & Founder',
      email: 'kleber@ziontechgroup.com'
    },
    foundingDate: '2020',
    industry: 'Technology',
    numberOfEmployees: '50-200',
    serviceArea: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Machine Learning Solutions',
            description: 'Advanced artificial intelligence and machine learning services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quantum Computing Services',
            description: 'Next-generation quantum technology solutions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Space Technology Solutions',
            description: 'Innovative space exploration and mining solutions'
          }
        }
      });

      newMetrics.links.internal = internalLinks;
      newMetrics.links.external = externalLinks;
      newMetrics.links.broken = brokenLinks;

      // Links score calculation
      if (internalLinks >= 3) newMetrics.links.score += 40;
      if (externalLinks >= 1) newMetrics.links.score += 30;
      if (internalLinks + externalLinks >= 5) newMetrics.links.score += 30;

      if (internalLinks < 3) {
        newIssues.push({
          id: 'few-internal-links',
          type: 'info',
          category: 'content',
          message: 'Consider adding more internal links for better site structure',
          severity: 'low',
          fix: 'Add relevant internal links to other pages on your site',
          impact: 5
        });
      }

      // Analyze content
      const textContent = document.body.textContent || '';
      const words = textContent.trim().split(/\s+/).filter(word => word.length > 0);
      newMetrics.content.wordCount = words.length;

      // Calculate keyword density
      let keywordCount = 0;
      defaultKeywords.forEach(keyword => {
        const regex = new RegExp(keyword.toLowerCase(), 'gi');
        const matches = textContent.toLowerCase().match(regex);
        if (matches) keywordCount += matches.length;
      });
      
      newMetrics.content.keywordDensity = words.length > 0 ? (keywordCount / words.length) * 100 : 0;

      // Simple readability score (Flesch Reading Ease approximation)
      const sentences = textContent.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
      const avgWordsPerSentence = words.length / sentences.length;
      newMetrics.content.readability = Math.max(0, Math.min(100, 100 - (avgWordsPerSentence - 15) * 2));

      // Content score calculation
      if (newMetrics.content.wordCount >= 300) newMetrics.content.score += 30;
      if (newMetrics.content.keywordDensity >= 0.5 && newMetrics.content.keywordDensity <= 2.5) newMetrics.content.score += 40;
      if (newMetrics.content.readability >= 60) newMetrics.content.score += 30;

      if (newMetrics.content.wordCount < 300) {
        newIssues.push({
          id: 'content-too-short',
          type: 'warning',
          category: 'content',
          message: 'Page content is too short (should have at least 300 words)',
          severity: 'medium',
          fix: 'Add more relevant content to your page',
          impact: 20
        });
      }

      if (newMetrics.content.keywordDensity < 0.5) {
        newIssues.push({
          id: 'low-keyword-density',
          type: 'info',
          category: 'content',
          message: 'Keyword density is low - consider adding more relevant keywords naturally',
          severity: 'low',
          fix: 'Naturally incorporate target keywords throughout your content',
          impact: 10
        });
      } else if (newMetrics.content.keywordDensity > 2.5) {
        newIssues.push({
          id: 'keyword-stuffing',
          type: 'warning',
          category: 'content',
          message: 'Keyword density is too high (may be considered keyword stuffing)',
          severity: 'medium',
          fix: 'Reduce keyword usage to natural levels',
          impact: 15
        });
      }

      // Calculate overall score
      newMetrics.overall = Math.round(
        (newMetrics.title.score * 0.2) +
        (newMetrics.description.score * 0.15) +
        (newMetrics.headings.score * 0.15) +
        (newMetrics.images.score * 0.1) +
        (newMetrics.links.score * 0.1) +
        (newMetrics.content.score * 0.3)
      );

      setMetrics(newMetrics);
      setIssues(newIssues);

      // Add to analysis history
      setAnalysisHistory(prev => [
        { url: currentUrl, score: newMetrics.overall, date: new Date() },
        ...prev.slice(0, 9)
      ]);

          } catch {
        // Silently handle analysis errors
      } finally {
      setIsAnalyzing(false);
    }
  }, [currentUrl]);

  // Get SEO grade
  const getSEOGrade = useMemo(() => {
    if (!metrics) return { grade: 'N/A', color: 'text-gray-400', bgColor: 'bg-gray-100' };
    
    if (metrics.overall >= 90) return { grade: 'A+', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (metrics.overall >= 80) return { grade: 'A', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (metrics.overall >= 70) return { grade: 'B', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (metrics.overall >= 60) return { grade: 'C', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    if (metrics.overall >= 50) return { grade: 'D', color: 'text-orange-600', bgColor: 'bg-orange-100' };
    return { grade: 'F', color: 'text-red-600', bgColor: 'bg-red-100' };
  }, [metrics]);

  // Get issue count by severity
  const getIssueCounts = useMemo(() => {
    const counts = { error: 0, warning: 0, info: 0 };
    issues.forEach(issue => {
      counts[issue.type]++;
    });
    return counts;
  }, [issues]);

  // Get total impact score
  const getTotalImpact = useMemo(() => {
    return issues.reduce((total, issue) => total + issue.impact, 0);
  }, [issues]);

  // Auto-analyze when component becomes visible
  useEffect(() => {
    if (isVisible && !metrics) {
      analyzePage();
    }
  }, [isVisible, metrics, analyzePage]);

  if (!isVisible) return null;

  // Structured data for website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: description,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: section,
        item: `${siteUrl}/${section.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteName} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteName} - ${description}`} />
      
      {/* Additional Open Graph Tags */}
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={image} />
      
      {/* Twitter Additional Tags */}
      <meta name="twitter:image:alt" content={`${siteName} - ${description}`} />
      <meta name="twitter:domain" content="ziontechgroup.com" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="364 E Main St STE 1008" />
      <meta name="business:contact_data:locality" content="Middletown" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19709" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="kleber@ziontechgroup.com" />
      
      {/* Verification Meta Tags */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />
      
      {/* Additional Performance Optimizations */}
      <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="modulepreload" href="/_next/static/chunks/pages/_app.js" />
      
      {/* PWA Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Accessibility Meta Tags */}
      <meta name="accessibility-control" content="full" />
      <meta name="accessibility-feature" content="high-contrast, large-text, screen-reader" />
      <meta name="accessibility-hazard" content="none" />
      <meta name="accessibility-mode" content="full" />
      <meta name="accessibility-requirement" content="WCAG2.1" />
      <meta name="accessibility-standard" content="WCAG2.1" />
      <meta name="accessibility-support" content="full" />
    </Head>
  );
};

export default SEOOptimizer;