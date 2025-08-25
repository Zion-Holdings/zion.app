import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/images/zion-og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  language = 'en',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-logo-192.png',
    description: 'AI-Powered Tech Marketplace and Digital Transformation Solutions',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@ziontechgroup.com'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      category: 'Technology Services',
      description: 'AI solutions, micro SAAS, cloud services, and digital transformation'
    }
  };

  // Merge custom structured data with default
  const finalStructuredData = structuredData || defaultStructuredData;

  // Generate meta robots content
  const robots = [];
  if (noindex) robots.push('noindex');
  if (nofollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index, follow');

  // Generate Open Graph tags
  const ogTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: canonical || window.location.href },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Zion Tech Group' },
    { property: 'og:locale', content: language },
    { property: 'og:author', content: author }
  ];

  // Add article-specific Open Graph tags
  if (ogType === 'article') {
    if (publishedTime) ogTags.push({ property: 'article:published_time', content: publishedTime });
    if (modifiedTime) ogTags.push({ property: 'article:modified_time', content: modifiedTime });
    if (section) ogTags.push({ property: 'article:section', content: section });
    tags.forEach(tag => ogTags.push({ property: 'article:tag', content: tag }));
  }

  // Generate Twitter Card tags
  const twitterTags = [
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:site', content: '@ziontechgroup' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage }
  ];

  // Generate additional meta tags
  const additionalTags = [
    { name: 'author', content: author },
    { name: 'robots', content: robots.join(', ') },
    { name: 'language', content: language },
    { name: 'revisit-after', content: '7 days' },
    { name: 'distribution', content: 'global' },
    { name: 'rating', content: 'general' },
    { name: 'theme-color', content: '#22ddd2' },
    { name: 'msapplication-TileColor', content: '#22ddd2' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ];

  // Add keywords if provided
  if (keywords) {
    additionalTags.push({ name: 'keywords', content: keywords });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Language and Character Set */}
      <html lang={language} />
      <meta charSet="utf-8" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

      {/* Additional Meta Tags */}
      {additionalTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}

      {/* Open Graph Tags */}
      {ogTags.map((tag, index) => (
        <meta key={`og-${index}`} property={tag.property} content={tag.content} />
      ))}

      {/* Twitter Card Tags */}
      {twitterTags.map((tag, index) => (
        <meta key={`twitter-${index}`} name={tag.name} content={tag.content} />
      ))}

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/zion-logo-180.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/zion-logo-152.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/images/zion-logo-167.png" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//api.ziontechgroup.com" />
      <link rel="dns-prefetch" href="//cdn.ziontechgroup.com" />

      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional Structured Data for WebPage */}
      {canonical && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: canonical,
            publisher: {
              '@type': 'Organization',
              name: 'Zion Tech Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ziontechgroup.com/images/zion-logo-192.png'
              }
            },
            mainEntity: {
              '@type': 'Organization',
              name: 'Zion Tech Group',
              description: 'AI-Powered Tech Marketplace and Digital Transformation Solutions'
            }
          })}
        </script>
      )}

      {/* Breadcrumb Structured Data */}
      {canonical && canonical !== 'https://ziontechgroup.com/' && (
        <script type="application/ld+json">
          {JSON.stringify({
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
                name: title,
                item: canonical
              }
            ]
          })}
        </script>
      )}

      {/* Search Engine Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-verification-code" />
      <meta name="yandex-verification" content="your-verification-code" />

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

      {/* Performance Hints */}
      <link rel="preload" href="/src/main.tsx" as="script" />
      <link rel="preload" href="/src/index.css" as="style" />
      <link rel="preload" href="/fonts/Orbitron-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEO;

