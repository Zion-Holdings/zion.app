import Head from 'next/head'
import { useRouter } from 'next/router'
import { getAppConfig } from '@/utils/config'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product' | 'profile'
  article?: {
    author?: string
    publishedTime?: string
    modifiedTime?: string
    section?: string
    tags?: string[]
  }
  product?: {
    price?: number
    currency?: string
    availability?: 'in_stock' | 'out_of_stock' | 'preorder'
    condition?: 'new' | 'used' | 'refurbished'
    brand?: string
    sku?: string
  }
  jsonLd?: Record<string, any>
  noindex?: boolean
  nofollow?: boolean
  canonical?: string
}

export default function AdvancedSEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  article,
  product,
  jsonLd,
  noindex = false,
  nofollow = false,
  canonical
}: SEOProps) {
  const router = useRouter()
  const config = getAppConfig()

  // Generate dynamic content
  const siteTitle = 'Zion Tech Marketplace'
  const defaultDescription = 'Professional tech marketplace for AI hardware, talent, and enterprise solutions'
  const defaultImage = `${config.app.url}/images/og-default.jpg`
  
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const pageDescription = description || defaultDescription
  const pageUrl = url || `${config.app.url}${router.asPath}`
  const pageImage = image || defaultImage

  // Generate structured data
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteTitle,
      url: config.app.url,
      description: defaultDescription,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${config.app.url}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }

    // Article structured data
    if (type === 'article' && article) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: pageDescription,
        image: pageImage,
        author: {
          '@type': 'Person',
          name: article.author || 'Zion Team'
        },
        publisher: {
          '@type': 'Organization',
          name: siteTitle,
          logo: {
            '@type': 'ImageObject',
            url: `${config.app.url}/logos/zion-logo.png`
          }
        },
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        articleSection: article.section,
        keywords: article.tags?.join(', ')
      }
    }

    // Product structured data
    if (type === 'product' && product) {
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: title,
        description: pageDescription,
        image: pageImage,
        brand: {
          '@type': 'Brand',
          name: product.brand || 'Zion'
        },
        sku: product.sku,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: product.currency || 'USD',
          availability: `https://schema.org/${product.availability === 'in_stock' ? 'InStock' : 'OutOfStock'}`,
          itemCondition: `https://schema.org/${product.condition === 'new' ? 'NewCondition' : 'UsedCondition'}`,
          seller: {
            '@type': 'Organization',
            name: siteTitle
          }
        }
      }
    }

    // Custom JSON-LD
    if (jsonLd) {
      return {
        '@context': 'https://schema.org',
        ...jsonLd
      }
    }

    return baseData
  }

  // Robots meta
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ')

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Article specific OG tags */}
      {type === 'article' && article && (
        <>
          <meta property="article:author" content={article.author} />
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Product specific OG tags */}
      {type === 'product' && product && (
        <>
          <meta property="product:price:amount" content={product.price?.toString()} />
          <meta property="product:price:currency" content={product.currency || 'USD'} />
          <meta property="product:availability" content={product.availability} />
          <meta property="product:condition" content={product.condition} />
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ZionTech" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="application-name" content={siteTitle} />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://gnwtggeptzkqnduuthto.supabase.co" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://analytics.google.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Alternative formats */}
      <link rel="alternate" type="application/rss+xml" title={`${siteTitle} RSS Feed`} href="/rss.xml" />
      <link rel="alternate" type="application/atom+xml" title={`${siteTitle} Atom Feed`} href="/atom.xml" />
    </Head>
  )
}

// Utility function for generating SEO-friendly URLs
export const generateSEOUrl = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Utility function for extracting keywords from content
export const extractKeywords = (content: string, maxKeywords: number = 10): string[] => {
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3)

  // Count word frequency
  const wordCount: Record<string, number> = {}
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1
  })

  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word)
}

// Hook for dynamic SEO based on page content
export const useDynamicSEO = (content?: string) => {
  const router = useRouter()
  
  const generateSEO = () => {
    const path = router.pathname
    const segments = path.split('/').filter(Boolean)
    
    // Generate title based on route
    let title = 'Zion Tech Marketplace'
    if (segments.length > 0) {
      title = segments
        .map((segment: string) => segment.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()))
        .join(' | ')
    }

    // Generate keywords from content
    const keywords = content ? extractKeywords(content, 8) : []

    return { title, keywords }
  }

  return generateSEO()
} 