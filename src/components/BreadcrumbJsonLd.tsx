import React from 'react';
import JsonLd from '@/components/JsonLd';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbJsonLdProps {
  breadcrumbs: BreadcrumbItem[];
}

const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ breadcrumbs }) => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.ziontechgroup.com';
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.label,
    item: crumb.path.startsWith('http') ? crumb.path : `${baseUrl}${crumb.path}`,
  }));

  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return <JsonLd data={data} />;
};

export default BreadcrumbJsonLd;
