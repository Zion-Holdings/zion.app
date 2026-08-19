import JsonLd from '@/components/JsonLd';

interface ArticleStructuredDataProps {
  headline?: string;
  title?: string;
  description: string;
  datePublished?: string;
  publishedAt?: string;
  publishDate?: string;
  updatedAt?: string;
  slug?: string;
  canonical?: string;
  url?: string;
  authorName?: string;
  publisherName?: string;
  image?: string;
}

export default function ArticleStructuredData({
  headline,
  title,
  description,
  datePublished,
  publishedAt,
  publishDate,
  updatedAt,
  slug,
  canonical,
  url,
  authorName = 'Zion Tech Group',
  publisherName = 'Zion Tech Group',
  image = 'https://ziontechgroup.com/og-image.png',
}: ArticleStructuredDataProps) {
  const resolvedHeadline = headline || title || '';
  const resolvedDate = datePublished || publishedAt || publishDate || '';
  const resolvedUrl = canonical || url || slug || '';
  const slugWithPrefix = slug && slug.startsWith('blog/') ? slug : slug ? `blog/${slug}` : resolvedUrl.replace(/^https?:\/\/[^/]+\//, '');

  const pageUrl = resolvedUrl.startsWith('http')
    ? resolvedUrl
    : `https://ziontechgroup.com/${slugWithPrefix}`;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: resolvedHeadline,
    description,
    image,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://ziontechgroup.com',
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      url: 'https://ziontechgroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      },
    },
    datePublished: resolvedDate,
    dateModified: updatedAt || resolvedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${pageUrl}/`,
    },
    url: `${pageUrl}/`,
  };

  return <JsonLd data={data} />;
}
