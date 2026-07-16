import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'End-to-end AI, cloud, and growth operations services: help desk automation, development acceleration, outreach, cost optimization, DevOps, fleet, observability, data, and more.',
  alternates: { canonical: '/services' },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Zion Tech Group Service Catalog',
    description: 'Browse AI, IT, cloud, security, data, automation, and DevOps services across 30+ categories.',
    url: 'https://ziontechgroup.com/services',
    isPartOf: { '@type': 'WebSite', url: 'https://ziontechgroup.com/', name: 'Zion Tech Group' },
    about: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com',
      email: 'kleber@ziontechgroup.com',
      telephone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ziontechgroup.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ziontechgroup.com/services' },
      ],
    },
  };

  return (
    <>
      <JsonLd data={payload} />
      {children}
    </>
  );
}
