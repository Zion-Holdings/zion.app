import { siteConfig } from './siteConfig';

export function generateOrgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    email: 'kleber@ziontechgroup.com',
    telephone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    sameAs: [
      'https://github.com/zion-support',
      'https://www.linkedin.com/company/ziontechgroup',
      'https://x.com/ziontechgroup',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '200',
    },
  };
}
