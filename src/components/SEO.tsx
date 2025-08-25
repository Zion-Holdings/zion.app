
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  type?: 'website' | 'article' | 'profile';
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
  ogImage = '/og-image.jpg',
  ogUrl,
  canonical,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) => {
  const siteName = 'Zion Tech Group';
  const siteUrl = 'https://ziontechgroup.com';
  const fullTitle = title?.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = canonical || ogUrl || `${siteUrl}${window.location.pathname}`;
  const fullOgImage = ogImage?.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.',
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
      areaServed: 'Worldwide'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      streetAddress: '364 E Main St STE 1008'
    }
  };

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: siteUrl,
    description: 'Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Article schema (if applicable)
  const articleSchema = (type === 'article' || ogType === 'article') ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: fullOgImage,
    author: {
      '@type': 'Organization',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`
      }
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    },
    ...(section && { articleSection: section }),
    ...(tags.length > 0 && { keywords: tags.join(', ') })
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="Zion Tech Group - Revolutionary Micro SaaS & AI Solutions"
      description="Leading provider of revolutionary micro SaaS services, AI solutions, cloud infrastructure, and cutting-edge technology services. Transform your business with our innovative solutions."
      keywords="micro SaaS, AI solutions, cloud infrastructure, cybersecurity, machine learning, React, Node.js, AWS, Azure, business automation"
      canonical="/"
      ogImage="/images/zion-homepage-og.jpg"
      ogType="website"
    />
  );
}

export function ServicePageSEO({ 
  serviceName, 
  description, 
  category 
}: { 
  serviceName: string;
  description: string;
  category: string;
}) {
  return (
    <SEO
      title={`${serviceName} - Zion Tech Group`}
      description={description}
      keywords={`${serviceName}, ${category}, tech services, IT solutions, Zion Tech Group`}
      canonical={`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      ogType="product"
    />
  );
}

export function TalentPageSEO({ 
  talentName, 
  skills, 
  description 
}: { 
  talentName: string;
  skills: string[];
  description: string;
}) {
  return (
    <SEO
      title={`${talentName} - Tech Talent | Zion Tech Group`}
      description={description}
      keywords={`${talentName}, ${skills.join(', ')}, tech talent, AI expert, developer, Zion Tech Group`}
      canonical={`/talent/${talentName.toLowerCase().replace(/\s+/g, '-')}`}
      ogType="profile"
    />
  );
}
