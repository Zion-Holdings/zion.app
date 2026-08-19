interface BlogPostStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  author?: string;
}

export default function BlogPostStructuredData({
  title,
  description,
  datePublished,
  url,
  author = 'Zion Tech Group',
}: BlogPostStructuredDataProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: 'https://ziontechgroup.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://ziontechgroup.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ziontechgroup.com/logo.png',
      },
    },
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: url,
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
