'use client';

import React from 'react';
import { usePathname} from 'next/navigation';
import JsonLd from '../components/JsonLd';

export function useAutoJsonLdPage() {
  const pathname = usePathname();

  const siteUrl = 'https://ziontechgroup.com';
  const orgName = 'Zion Tech Group';
  const fullUrl = `${siteUrl}${pathname || '/'}`;

  const title =
    (typeof document !== 'undefined' ? document.title.replace(/\s*\|.*$/, '').trim() : '') || orgName;

  const description =
    (typeof document !== 'undefined'
      ? document.querySelector('meta[name="description"]')?.getAttribute('content')
      : null) ||
    `${orgName} service page.`;

  const pathSegments = (pathname || '/').split('/').filter(Boolean);

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: fullUrl,
    name: title,
    description,
  };

  if (pathSegments.length > 0) {
    const items = pathSegments.map((segment, index) => {
      const urlSegment = `/${pathSegments.slice(0, index + 1).join('/')}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: decodeURIComponent(segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())),
        item: `${siteUrl}${urlSegment}/`,
      };
    });
    (schema as Record<string, unknown>)['breadcrumb'] = {
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  }

  return schema;
}

export function AutoJsonLd() {
  const schema = useAutoJsonLdPage();
  return React.createElement(JsonLd, { data: schema });
}
